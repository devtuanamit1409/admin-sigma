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
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import axios from "axios";
const Fragrance = () => {
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

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  // Hàm xử lý khi người dùng chọn ảnh
  const [imageEdit, setImageEdit] = useState(null);
  const [fileEdit, setFileEdit] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // Set image to base64 string for preview
    };
    reader.readAsDataURL(selectedImage); // Convert selected image to base64
    setFile(selectedImage); // Lưu trữ file ảnh vào state
  };
  const handleImageChangeEdit = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageEdit(reader.result); // Set image to base64 string for preview
    };
    reader.readAsDataURL(selectedImage); // Convert selected image to base64
    setFileEdit(selectedImage); // Lưu trữ file ảnh vào state
  };

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
    const res = await axios.get("https://demo-sigma.site/api/fragrancenote");
    const categorys = await res.data;
    setData(categorys);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = async (id) => {
    const response = await axios.get(
      `https://demo-sigma.site/api/fragrancenote/${id}`
    );
    setCurrentCategory(response.data);
    setEditOpen(true);
  };
  const updateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append("name", currentCategory.name);

      // Kiểm tra xem fileEdit có tồn tại không trước khi gửi request
      if (fileEdit) {
        formData.append("image", fileEdit); // Thêm file vào formData nếu có
      }

      const response = await axios.patch(
        `https://demo-sigma.site/api/fragrancenote/update/${currentCategory._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        getData();
        handleEditClose();
        setSnackbarMessage("Cập nhật nhóm hương thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error while updating collection", error);
      setSnackbarMessage("Cập nhật nhóm hương thất bại!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("image", file); // Append the file

      const response = await axios.post(
        "https://demo-sigma.site/api/fragrancenote/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        getData();
        setCategoryName("");
        handleClose();
        setSnackbarMessage("Thêm nhóm hương thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error while creating fragrancenote", error);
      setSnackbarMessage("Thêm nhóm hương thất bại! ");
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
    if (window.confirm("Bạn có chắc chắn muốn xóa nhóm hương này không?")) {
      try {
        const response = await axios.delete(
          `https://demo-sigma.site/api/fragrancenote/delete/${id}`
        );
        if (response.status === 200) {
          getData();
          setSnackbarMessage("Xóa nhóm hương thành công!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Error while deleting category", error);
        setSnackbarMessage("Xóa nhóm hương thất bại!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
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
            Thêm nhóm hương
          </Typography>
          <Input
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Nhập tên nhóm hương"
          />
          <Box sx={{ paddingTop: 4 }}>
            <label htmlFor="icon-button-file">
              Ảnh nhóm hương:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleImageChange}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            {image && <img src={image} width={150} alt="Selected Image" />}
          </Box>

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
            Chỉnh sửa nhóm hương
          </Typography>
          <Input
            fullWidth
            value={currentCategory.name}
            onChange={handleCategoryChange}
            placeholder="Sửa tên nhóm hương"
          />
          <Box sx={{ paddingTop: 4 }}>
            <label htmlFor="icon-button-file">
              Ảnh nhóm hương:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleImageChangeEdit}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            {imageEdit ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img src={imageEdit} width={150} alt="Selected Image" />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={`https://demo-sigma.site/` + currentCategory.image}
                width={150}
                alt="Selected Image"
              />
            )}
          </Box>
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
        autoHideDuration={2000}
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
        Danh sách nhóm hương
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start", paddingBottom: 4 }}>
        <Button onClick={handleOpen} variant="contained">
          Thêm nhóm hương
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên nhóm hương</TableCell>
              <TableCell align="center">Ảnh nhóm hương</TableCell>
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
                  <TableCell align="center" component="th" scope="row">
                    <img
                      src={`https://demo-sigma.site/` + product.image}
                      width={100}
                      alt=""
                    />
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

export default Fragrance;
