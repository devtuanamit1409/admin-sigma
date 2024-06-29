import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0); // Số trang bắt đầu từ 0 cho MUI
  const [rowsPerPage, setRowsPerPage] = useState(10); // Số hàng mỗi trang
  const [totalNews, setTotalNews] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://demo-sigma.site/api/news?page=${page + 1}&limit=${rowsPerPage}`
      );
      const news = res.data;
      setData(news.news);
      setTotalNews(news.totalNews);
      setRowsPerPage(news.limit);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, rowsPerPage]);

  // Xử lý thay đổi trang
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Xử lý thay đổi số hàng mỗi trang
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset về trang đầu tiên
  };

  const handleDelete = async (id) => {
    try {
      // Gửi yêu cầu DELETE đến server
      await axios.delete(`https://demo-sigma.site/api/news/${id}`);
      alert("Bài viết đã được xóa thành công!");
      // Cập nhật lại danh sách bài viết sau khi xóa
      getData();
    } catch (error) {
      console.error("Lỗi khi xóa bài viết: ", error);
      alert("Có lỗi xảy ra khi xóa bài viết.");
    }
  };

  return (
    <>
      <div className="main-btn-add">
        <Link className="btn-add-product" to="/dashboard/add-news">
          Thêm bài viết
        </Link>
      </div>

      <Typography
        sx={{
          textAlign: "center",
          padding: "20px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Danh sách bài viết
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên bài viết</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((newsItem) => (
              <TableRow key={newsItem._id}>
                <TableCell align="center" component="th" scope="row">
                  {newsItem.title}
                </TableCell>
                <TableCell align="center">
                  <Link to={`/dashboard/edit-news/${newsItem._id}`}>
                    <Button
                      variant="contained"
                      sx={{ marginRight: 4 }}
                      color="primary"
                    >
                      Sửa
                    </Button>
                  </Link>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(newsItem._id)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={totalNews}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default News;
