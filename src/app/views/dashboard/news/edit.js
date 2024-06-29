import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddEditPost = () => {
  const style = { p: 4 };
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [describe, setDescribe] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(
          `https://demo-sigma.site/api/news/${id}`
        );
        const news = response.data;
        console.log(news);
        setTitle(news.title);
        setAuthor(news.author);
        setDescribe(news.describe);
        setContent(news.content);
        // Kiểm tra và cập nhật đường dẫn ảnh nếu có
        if (news.image) {
          setImagePreview(
            `https://demo-sigma.site/${news.image.replace(/\\/g, "/")}`
          ); // Chuyển đổi đường dẫn và thay thế ký tự \\
        }
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };
    fetchNewsDetail();
  }, [id]);
  console.log(imagePreview);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      // Tạo URL tạm thời để hiển thị ảnh
      const imagePreviewUrl = URL.createObjectURL(file);
      setImagePreview(imagePreviewUrl);
    }
  };

  const handleSavePost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("describe", describe);
    formData.append("content", content);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await axios.put(`https://demo-sigma.site/api/news/${id}`, formData);
      alert("Bài viết đã được cập nhật thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating news: ", error);
      alert("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  return (
    <Box sx={style}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            label="Tác giả"
            name="author"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mô tả"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            name="describe"
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <label htmlFor="icon-button-file">
            Ảnh đại diện:
            <input
              className="input-upload-image"
              accept="image/*"
              id="icon-button-file"
              type="file"
              name="image"
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

        {imagePreview && (
          <Grid item xs={12} sm={4}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography variant="h6">Nội dung bài viết</Typography>
          <Editor
            value={content}
            onEditorChange={(newContent) => setContent(newContent)}
            name="description"
            apiKey="5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu"
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSavePost}>
            Lưu bài viết
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEditPost;
