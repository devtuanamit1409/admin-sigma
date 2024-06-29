import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DatePicker } from "@mui/lab";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateBirth, setDateBirth] = useState(null);
  const [address, setAddress] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const getUser = async () => {
    try {
      const res = await axios.get(`https://demo-sigma.site/api/user/${id}`);
      const userData = res.data;
      setUser(userData);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setPhone(userData.phone);
      setGender(userData.gender);
      setDateBirth(userData.dateBirth);
      setAddress(userData.address);
      setIsAdmin(userData.isAdmin);
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi lấy thông tin người dùng.");
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedUser = {
        firstName,
        lastName,
        email,
        phone,
        gender,
        dateBirth,
        address,
        isAdmin,
      };
      const res = await axios.patch(
        `https://demo-sigma.site/api/user/update/${id}`,
        updatedUser
      );
      alert("Thông tin người dùng đã được cập nhật!");
      setUser(res.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi cập nhật thông tin người dùng.");
    }
  };

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Chi tiết người dùng
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Avatar
              src={user.picture}
              alt={user.firstName}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Date of Birth"
              value={dateBirth}
              onChange={(newValue) => setDateBirth(newValue)}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  color="primary"
                />
              }
              label="Admin"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Cập nhật
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserDetail;
