import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";

function ProductTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://demo-sigma.site/api/product?page=${page + 1}`
      );
      const products = res.data;
      setData(products.data);
      setTotalPages(products.totalPages); // Lưu tổng số trang trả về từ server
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // Chỉ page là dependency
  const handleEdit = (productId) => {
    console.log("Edit product", productId);
    // Logic để sửa sản phẩm
  };

  const handleDelete = (productId) => {
    console.log("Delete product", productId);
    // Logic để xoá sản phẩm
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1); // Chỉnh lại cho phù hợp với zero-based index
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <div className="main-btn-add">
        <Link className="btn-add-product" to="/dashboard/add-product">
          Thêm sản phẩm
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Giá</TableCell>
              <TableCell align="center">Danh mục</TableCell>
              <TableCell align="center">Thương hiệu</TableCell>
              <TableCell align="center">Ảnh sản phẩm</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="center" component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  {product.sizes[0].price.toLocaleString()}đ
                </TableCell>
                <TableCell align="center">{product.category.name}</TableCell>
                <TableCell align="center">{product.brand.name}</TableCell>
                <TableCell align="center">
                  <img
                    src={`https://demo-sigma.site/` + product.images[0]}
                    width="100%"
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  <Link to={`/dashboard/edit-product/${product._id}`}>Sửa</Link>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    color="secondary"
                  >
                    Xoá
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        sx={{ paddingTop: "15px", display: "flex", justifyContent: "end" }}
        spacing={2}
      >
        <Pagination
          count={totalPages}
          page={page + 1}
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>
    </>
  );
}

export default ProductTable;
