import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const InfoPage = () => {
  const [data, setData] = useState({
    title: "",
    firstBanner: "",
    subTitle: "",
    secondBanner: "",
    description: "",
    subDescription: "",
  });

  const [firstBannerFile, setFirstBannerFile] = useState(null);
  const [secondBannerFile, setSecondBannerFile] = useState(null);
  const [firstBannerPreview, setFirstBannerPreview] = useState(null);
  const [secondBannerPreview, setSecondBannerPreview] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const response = await axios.get("https://demo-sigma.site/api/info");
      setData(response.data);
      if (response.data.firstBanner) {
        setFirstBannerPreview(
          `https://demo-sigma.site/${response.data.firstBanner}`
        );
      }
      if (response.data.secondBanner) {
        setSecondBannerPreview(
          `https://demo-sigma.site/${response.data.secondBanner}`
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "firstBanner") {
      setFirstBannerFile(file);
      setFirstBannerPreview(URL.createObjectURL(file));
    } else if (name === "secondBanner") {
      setSecondBannerFile(file);
      setSecondBannerPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("description", data.description);
    formData.append("subDescription", data.subDescription);
    if (firstBannerFile) {
      formData.append("firstBanner", firstBannerFile);
    }
    if (secondBannerFile) {
      formData.append("secondBanner", secondBannerFile);
    }

    try {
      const response = await axios.put(
        "https://demo-sigma.site/api/info",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(response.data);
      alert("Info updated successfully!");
    } catch (err) {
      console.error(err.message);
      alert("Failed to update info");
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Update Info
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={data.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sub Title"
                name="subTitle"
                value={data.subTitle}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={data.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sub Description"
                name="subDescription"
                value={data.subDescription}
                onChange={handleInputChange}
                multiline
                rows={2}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload First Banner
                <input
                  type="file"
                  name="firstBanner"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {firstBannerPreview && (
                <Card sx={{ mt: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={firstBannerPreview}
                    alt="First Banner"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      First Banner Preview
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload Second Banner
                <input
                  type="file"
                  name="secondBanner"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {secondBannerPreview && (
                <Card sx={{ mt: 2 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={secondBannerPreview}
                    alt="Second Banner"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Second Banner Preview
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Update Info
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default InfoPage;
