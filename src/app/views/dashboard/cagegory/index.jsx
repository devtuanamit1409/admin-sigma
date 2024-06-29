import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Modal,
  Input,
  Snackbar,
  Alert,
  Switch,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

const Category = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    name: "",
    _id: null,
  });
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const [homeView, setHomeView] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCategoryName("");
  };
  const handleEditClose = () => {
    setEditOpen(false);
    setCurrentCategory({ name: "", _id: null });
  };
  const getData = async () => {
    const res = await axios.get("https://demo-sigma.site/api/category");
    const categorys = await res.data;
    setData(categorys);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = async (id) => {
    const response = await axios.get(
      `https://demo-sigma.site/api/category/${id}`
    );
    setCurrentCategory({
      name: response.data.name,
      _id: response.data._id,
      homeView: response.data.homeView, // Lấy và set giá trị homeView
    });
    setHomeView(response.data.homeView); // Cập nhật state homeView khi mở modal chỉnh sửa
    setEditOpen(true);
  };

  const updateCategory = async () => {
    console.log("Updating with:", currentCategory); // Thêm để debug
    try {
      const response = await axios.patch(
        `https://demo-sigma.site/api/category/update/${currentCategory._id}`,
        {
          name: currentCategory.name,
          homeView: currentCategory.homeView,
        }
      );
      if (response.status === 200) {
        getData();
        handleEditClose();
        setSnackbarMessage("Cập nhật danh mục thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error while updating category", error);
      setSnackbarMessage(
        "Cập nhật danh mục thất bại! Tên danh mục đã tồn tại!"
      );
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://demo-sigma.site/api/category/create",
        {
          name: categoryName,
          homeView: homeView, // Gửi trạng thái switch
        }
      );
      if (response.status === 200) {
        getData(); // Refresh data list after adding new category
        setCategoryName("");
        setHomeView(false); // Reset switch state
        handleClose(); // Close modal and clear input after saving
        setSnackbarMessage("Thêm danh mục thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error while creating category", error);
      setSnackbarMessage("Thêm danh mục thất bại! Danh mục này đã tồn tại!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  const handleCategoryChange = (e) => {
    setCurrentCategory({ ...currentCategory, name: e.target.value });
  };
  const deleteCategoryById = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
      try {
        const response = await axios.delete(
          `https://demo-sigma.site/api/category/delete/${id}`
        );
        if (response.status === 200) {
          getData();
          setSnackbarMessage("Xóa danh mục thành công!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Error while deleting category", error);
        setSnackbarMessage("Xóa danh mục thất bại!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };
  const handleHomeViewChange = (event) => {
    if (editOpen) {
      // Nếu đang trong trạng thái chỉnh sửa, update giá trị homeView trong currentCategory
      setCurrentCategory({
        ...currentCategory,
        homeView: event.target.checked,
      });
    } else {
      // Nếu không, chỉ update giá trị homeView thông thường
      setHomeView(event.target.checked);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ paddingTop: 2, paddingBottom: 2 }}
          >
            Thêm danh mục
          </Typography>
          <Input
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Nhập tên danh mục"
          />
          <FormControlLabel
            control={
              <Switch checked={homeView} onChange={handleHomeViewChange} />
            }
            label="Hiển thị ở Home"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
            }}
          >
            <Button color="success" variant="contained" onClick={handleSave}>
              Lưu
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="edit-modal-title"
            variant="h6"
            component="h2"
            sx={{ paddingTop: 2, paddingBottom: 2 }}
          >
            Chỉnh sửa danh mục
          </Typography>
          <Input
            fullWidth
            value={currentCategory.name}
            onChange={handleCategoryChange}
            placeholder="Sửa tên danh mục"
          />
          <FormControlLabel
            control={
              <Switch
                checked={currentCategory.homeView}
                onChange={handleHomeViewChange}
              />
            }
            label="Hiển thị ở Home"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={updateCategory}
            >
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Typography
        sx={{
          textAlign: "center",
          padding: "20px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Danh sách danh mục
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start", paddingBottom: 4 }}>
        <Button onClick={handleOpen} variant="contained">
          Thêm danh mục
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên danh mục</TableCell>

              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((product) => (
                <TableRow key={product._id}>
                  <TableCell align="center" component="th" scope="row">
                    {product.name}
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{ marginRight: 4 }}
                      onClick={() => handleEdit(product._id)}
                      color="primary"
                    >
                      Sửa
                    </Button>
                    <Button
                      onClick={() => deleteCategoryById(product._id)}
                      variant="contained"
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
    </>
  );
};

export default Category;
