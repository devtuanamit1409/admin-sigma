/* eslint-disable jsx-a11y/img-redundant-alt */
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
const Collection = () => {
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
    description: "",
    _id: null,
  });
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const [bannerFile, setBannerFile] = useState(null);
  const [bannerEdit, setBannerEdit] = useState(null);
  const [bannerFileEdit, setBannerFileEdit] = useState(null);
  const [imageEdit, setImageEdit] = useState(null);
  const [fileEdit, setFileEdit] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFile(file); // Store the image file
    }
  };

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
      setBannerFile(file); // Store the banner file
    }
  };

  const handleImageChangeEdit = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageEdit(URL.createObjectURL(file));
      setFileEdit(file);
    }
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
    const res = await axios.get("https://demo-sigma.site/api/collection");
    const categorys = await res.data;
    setData(categorys);
  };
  const handleBannerChangeEdit = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerEdit(URL.createObjectURL(file));
      setBannerFileEdit(file);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleEdit = async (id) => {
    const response = await axios.get(
      `https://demo-sigma.site/api/collection/${id}`
    );
    setCurrentCategory({
      name: response.data.name,
      description: response.data.description,
      _id: response.data._id,
      image: response.data.image,
      banner: response.data.banner,
    });
    setImageEdit(response.data.image);
    setBannerEdit(response.data.banner);
    setFileEdit(null);
    setBannerFileEdit(null);
    setEditOpen(true);
  };

  const updateCategory = async () => {
    const formData = new FormData();
    formData.append("name", currentCategory.name);
    formData.append("description", currentCategory.description);
    if (fileEdit) {
      formData.append("image", fileEdit);
    }
    if (bannerFileEdit) {
      formData.append("banner", bannerFileEdit);
    }

    const response = await axios.patch(
      `https://demo-sigma.site/api/collection/update/${currentCategory._id}`,
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
      setSnackbarMessage("Cập nhật bộ sưu tập thành công!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("Cập nhật bộ sưu tập thất bại!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("description", description);
      if (file) {
        formData.append("image", file); // Append the image file
      }
      if (bannerFile) {
        formData.append("banner", bannerFile); // Append the banner file
      }

      const response = await axios.post(
        "https://demo-sigma.site/api/collection/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        getData();
        handleClose();
        setSnackbarMessage("Thêm bộ sưu tập thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        // Clear form fields and files
        setCategoryName("");
        setDescription("");
        setImage(null);
        setBanner(null);
        setFile(null);
        setBannerFile(null);
      }
    } catch (error) {
      console.error("Error while creating collection", error);
      setSnackbarMessage("Thêm bộ sưu tập thất bại!");
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
    if (window.confirm("Bạn có chắc chắn muốn xóa bộ sưu tập này không?")) {
      try {
        const response = await axios.delete(
          `https://demo-sigma.site/api/collection/delete/${id}`
        );
        if (response.status === 200) {
          getData();
          setSnackbarMessage("Xóa bộ sưu tập thành công!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.error("Error while deleting category", error);
        setSnackbarMessage("Xóa bộ sưu tập thất bại!");
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
        <Box
          sx={{
            width: 400,
            backgroundColor: "white",
            margin: "auto",
            padding: 2,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm bộ sưu tập
          </Typography>
          <Input
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Nhập tên bộ sưu tập"
            sx={{ my: 2 }}
          />
          <Input
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả"
            multiline
            rows={3}
            sx={{ my: 2 }}
          />
          <Box sx={{ py: 2 }}>
            <label htmlFor="icon-button-file">
              Ảnh bộ sưu tập:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
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
          <Box sx={{ py: 2 }}>
            <label htmlFor="icon-button-file-banner">
              Banner:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file-banner"
                type="file"
                onChange={handleBannerChange}
                style={{ display: "none" }}
              />
              <IconButton
                color="primary"
                aria-label="upload banner"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            {banner && <img src={banner} width={150} alt="Selected Banner" />}
          </Box>
          <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
            <Button color="success" variant="contained" onClick={handleSave}>
              Lưu
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={editOpen} onClose={handleEditClose}>
        <Box sx={style}>
          <Typography id="edit-modal-title" variant="h6">
            Chỉnh sửa bộ sưu tập
          </Typography>
          <Input
            fullWidth
            value={currentCategory.name}
            onChange={(e) =>
              setCurrentCategory({ ...currentCategory, name: e.target.value })
            }
            placeholder="Tên bộ sưu tập"
          />
          <Input
            fullWidth
            value={currentCategory.description}
            onChange={(e) =>
              setCurrentCategory({
                ...currentCategory,
                description: e.target.value,
              })
            }
            placeholder="Mô tả"
            multiline
            rows={3}
          />
          <Box sx={{ py: 2 }}>
            <label htmlFor="icon-button-file-edit">
              Ảnh bộ sưu tập:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file-edit"
                type="file"
                onChange={handleImageChangeEdit}
                style={{ display: "none" }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            {imageEdit && (
              <img
                src={`https://demo-sigma.site/` + imageEdit}
                width={150}
                alt="Current Image"
              />
            )}
          </Box>
          <Box sx={{ py: 2 }}>
            <label htmlFor="icon-button-file-banner-edit">
              Banner:
              <input
                className="input-upload-image"
                accept="image/*"
                id="icon-button-file-banner-edit"
                type="file"
                onChange={handleBannerChangeEdit}
                style={{ display: "none" }}
              />
              <IconButton
                color="primary"
                aria-label="upload banner"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            {bannerEdit && (
              <img
                src={`https://demo-sigma.site/` + bannerEdit}
                width={150}
                alt="Current Banner"
              />
            )}
          </Box>
          <Button color="primary" variant="contained" onClick={updateCategory}>
            Cập nhật
          </Button>
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
        Danh sách bộ sưu tập
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "start", paddingBottom: 4 }}>
        <Button onClick={handleOpen} variant="contained">
          Thêm bộ sưu tập
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên bộ sưu tập</TableCell>
              <TableCell align="center">Ảnh bộ sưu tập</TableCell>
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

export default Collection;
