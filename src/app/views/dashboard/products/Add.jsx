import { useState, useEffect, useRef } from "react";
import {
  Button,
  Box,
  Stack,
  IconButton,
  TextField,
  MenuItem,
  Input,
  Typography,
  Grid,
  FormControlLabel,
  Switch,
  Chip,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Editor } from "@tinymce/tinymce-react";

import DeleteIcon from "@mui/icons-material/Delete";

import { Label, PhotoCamera } from "@mui/icons-material";
import axios from "axios";
const Add = () => {
  const style = {
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = async () => {
    try {
      // Sử dụng Promise.all để gửi các request một cách song song
      const [resBrand, resCategory, resCollection, resFragranceNote] =
        await Promise.all([
          axios.get("https://demo-sigma.site/api/brand"),
          axios.get("https://demo-sigma.site/api/category"),
          axios.get("https://demo-sigma.site/api/collection"),
          axios.get("https://demo-sigma.site/api/fragrancenote"),
        ]);

      // Xử lý dữ liệu sau khi tất cả các request đã hoàn thành
      const brandData = resBrand.data;
      const categoryData = resCategory.data;
      const collectionData = resCollection.data;
      const fragranceNoteData = resFragranceNote.data;

      // Set các dữ liệu state cùng lúc
      // Ví dụ:
      setState({
        brandData,
        categoryData,
        collectionData,
        fragranceNoteData,
      });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    brand: "",
    collectionProduct: "",
    gender: "",
    scent: "",
    style: "",
    topNotes: [],
    middleNotes: [],
    baseNotes: [],
    description: "",
    year: "",
    origin: "",
    discountPercent: 0,
    sizes: [],
    images: [],
    bestSelling: false,
    new: false,
    instruct: "",
    preserve: "",
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductForm({ ...productForm, [name]: value });
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // Chuyển FileList thành mảng
    setProductForm({ ...productForm, images: files }); // Lưu tất cả các tập tin vào trạng thái

    const fileReaders = [];
    let isCancel = false;

    setImagePreviews([]); // Xóa các xem trước hiện tại trước khi thêm mới

    files.forEach((file) => {
      const fileReader = new FileReader();
      fileReaders.push(fileReader);

      fileReader.onload = (e) => {
        if (isCancel) return;
        setImagePreviews((prev) => [...prev, e.target.result]); // Thêm xem trước mới vào mảng
      };
      fileReader.readAsDataURL(file);
    });

    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => fileReader.abort()); // Hủy bỏ các FileReader nếu component bị unmount
    };
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();

      // Xử lý các trường topNotes, middleNotes, và baseNotes
      topNotes.forEach((note) => formData.append("topNotes", note._id));
      middleNotes.forEach((note) => formData.append("middleNotes", note._id));
      baseNotes.forEach((note) => formData.append("baseNotes", note._id));

      // Xử lý trường sizes
      productForm.sizes.forEach((size, index) => {
        formData.append(`sizes[${index}][size]`, size.size);
        formData.append(`sizes[${index}][price]`, size.price);
      });

      // Xử lý các trường và files còn lại
      formData.append("name", productForm.name);
      formData.append("category", productForm.category);
      formData.append("brand", productForm.brand);
      formData.append("collectionProduct", productForm.collectionProduct);
      formData.append("gender", productForm.gender);
      formData.append("type", productForm.type);
      formData.append("scent", productForm.scent);
      formData.append("style", productForm.style);
      formData.append("description", productForm.description);
      formData.append("year", productForm.year);
      formData.append("origin", productForm.origin);
      formData.append("discountPercent", productForm.discountPercent);
      formData.append("instruct", productForm.instruct);
      formData.append("preserve", productForm.preserve);

      productForm.images.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post(
        "https://demo-sigma.site/api/product/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSnackbarMessage("Thêm sản phẩm thành công!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setTimeout(() => {
          window.location.href = "/dashboard/products";
        }, 1000);
      }
    } catch (error) {
      console.error("Error while creating product", error);
      setSnackbarMessage("Thêm sản phẩm thất bại! ");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleAddSize = () => {
    const newSize = { size: "", price: 0 };
    setProductForm({ ...productForm, sizes: [...productForm.sizes, newSize] });
  };

  // Hàm xử lý thay đổi size
  const handleChangeSize = (index, field, value) => {
    const newSizes = productForm.sizes.map((size, idx) => {
      if (idx === index) {
        return { ...size, [field]: value };
      }
      return size;
    });
    setProductForm({ ...productForm, sizes: newSizes });
  };

  // Hàm xóa size
  const handleRemoveSize = (index) => {
    const newSizes = productForm.sizes.filter((_, idx) => idx !== index);
    setProductForm({ ...productForm, sizes: newSizes });
  };
  const handleRemoveImage = (index) => {
    setImagePreviews((currentPreviews) =>
      currentPreviews.filter((_, i) => i !== index)
    );
    // Optionally remove from the file list in productForm as well
    setProductForm((currentForm) => ({
      ...currentForm,
      images: currentForm.images.filter((_, i) => i !== index),
    }));
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [topNotes, setTopNotes] = useState([]);
  const [middleNotes, setMiddleNotes] = useState([]);
  const [baseNotes, setBaseNotes] = useState([]);

  const handleChangeTopNotes = (event) => {
    const {
      target: { value },
    } = event;
    setTopNotes(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeMiddleNotes = (event) => {
    const {
      target: { value },
    } = event;
    setMiddleNotes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeBaseNotes = (event) => {
    const {
      target: { value },
    } = event;
    setBaseNotes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");
  const instructRef = useRef(null);
  const preserveRef = useRef(null);
  const descriptionRef = useRef(null);
  const handleEditorChange = (content, editor, type) => {
    setProductForm((prev) => ({ ...prev, [type]: content }));
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  return (
    <>
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
      <Box sx={style}>
        <Grid container spacing={2}>
          {/* Product Core Information */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Tên sản phẩm"
              name="name"
              value={productForm.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Danh mục"
              name="category"
              value={productForm.category}
              onChange={handleChange}
            >
              {state.categoryData &&
                state.categoryData.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Thương hiệu"
              name="brand"
              value={productForm.brand}
              onChange={handleChange}
            >
              {state.brandData &&
                state.brandData.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>

          {/* Collection and Demographic Information */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Bộ sưu tập"
              name="collectionProduct"
              value={productForm.collectionProduct}
              onChange={handleChange}
            >
              {state.collectionData &&
                state.collectionData.map((option) => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              select
              label="Giới tính"
              name="gender"
              value={productForm.gender}
              onChange={handleChange}
            >
              {["Nam", "Nữ", "Unisex"].map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Mùi hương"
              name="scent"
              value={productForm.scent}
              onChange={handleChange}
            />
          </Grid>

          {/* Detailed Specifications */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Phong cách"
              name="style"
              value={productForm.style}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Năm"
              name="year"
              type="number"
              value={productForm.year}
              onChange={handleChange}
            />
          </Grid>

          {/* Location and Marketing Flags */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Xuất xứ"
              name="origin"
              value={productForm.origin}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Phần trăm giảm giá"
              name="discountPercent"
              type="number"
              value={productForm.discountPercent}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="topNotes-label">Hương đầu</InputLabel>
              <Select
                labelId="topNotes-label"
                id="topNotes"
                multiple
                value={topNotes}
                onChange={handleChangeTopNotes}
                input={<OutlinedInput label="Hương đầu" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((item) => (
                      <Chip key={item._id} label={item.name} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {state.fragranceNoteData &&
                  state.fragranceNoteData.map((item) => (
                    <MenuItem
                      key={item._id}
                      value={item}
                      style={getStyles(
                        item.name,
                        topNotes.map((x) => x.name),
                        theme
                      )}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="middleNotes">Hương giữa</InputLabel>
              <Select
                labelId="middleNotes"
                id="middleNotes"
                multiple
                value={middleNotes}
                onChange={handleChangeMiddleNotes}
                input={<OutlinedInput label="Hương giữa" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((item) => (
                      <Chip key={item._id} label={item.name} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {state.fragranceNoteData &&
                  state.fragranceNoteData.map((item) => (
                    <MenuItem
                      key={item._id}
                      value={item}
                      style={getStyles(
                        item.name,
                        middleNotes.map((x) => x.name),
                        theme
                      )}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="baseNotes">Hương giữa</InputLabel>
              <Select
                labelId="baseNotes"
                id="baseNotes"
                multiple
                value={baseNotes}
                onChange={handleChangeBaseNotes}
                input={<OutlinedInput label="Hương cuối" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((item) => (
                      <Chip key={item._id} label={item.name} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {state.fragranceNoteData &&
                  state.fragranceNoteData.map((item) => (
                    <MenuItem
                      key={item._id}
                      value={item}
                      style={getStyles(
                        item.name,
                        baseNotes.map((x) => x.name),
                        theme
                      )}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={productForm.bestSelling}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      bestSelling: e.target.checked,
                    }))
                  }
                />
              }
              label="Bán chạy nhất"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={productForm.new}
                  onChange={(e) =>
                    setProductForm((prev) => ({
                      ...prev,
                      new: e.target.checked,
                    }))
                  }
                />
              }
              label="Sản phẩm mới"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Hướng dẫn sử dụng</Typography>
            <Editor
              onEditorChange={(content, editor) =>
                handleEditorChange(content, editor, "instruct")
              }
              apiKey="5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu"
              name="instruct"
              ref={instructRef}
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Bảo quản</Typography>
            <Editor
              onEditorChange={(content, editor) =>
                handleEditorChange(content, editor, "preserve")
              }
              apiKey="5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu"
              ref={preserveRef}
              name="preserve"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              select
              label="Loại"
              name="type"
              value={productForm.type}
              onChange={handleChange}
            >
              {["Niche", "Designer"].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleAddSize}>
              Thêm Size
            </Button>
            {productForm.sizes.map((size, index) => (
              <Grid container spacing={2} sx={{ paddingTop: 4 }} key={index}>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label="Size"
                    value={size.size}
                    onChange={(e) =>
                      handleChangeSize(index, "size", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    label="Giá"
                    type="number"
                    value={size.price}
                    onChange={(e) =>
                      handleChangeSize(index, "price", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemoveSize(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12} sm={2}>
            <label htmlFor="icon-button-file">
              Ảnh sản phẩm:
              <input
                class="input-upload-image"
                accept="image/*"
                id="icon-button-file"
                type="file"
                multiple
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
          </Grid>
          <Grid sm={12} sx={{ paddingTop: 4 }}>
            {imagePreviews.map((item, index) => (
              <Grid container sx={{ paddingBottom: 4 }} spacing={2} key={index}>
                <Grid item xs={10}>
                  <img src={item} width={150} height={100} alt="" />
                </Grid>
                <Grid item xs={2}>
                  <IconButton onClick={() => handleRemoveImage(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography variant="h6">Mô tả sản phẩm</Typography>
            <Editor
              name="description"
              onEditorChange={(content, editor) =>
                handleEditorChange(content, editor, "description")
              }
              ref={descriptionRef}
              apiKey="5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
            />
          </Grid>

          {/* Save Button */}
          <Grid item xs={12}>
            <Button
              onClick={handleFormSubmit}
              variant="contained"
              color="primary"
            >
              Lưu sản phẩm
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Add;
