import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://demo-sigma.site/api/user");
      setUsers(res.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi lấy thông tin người dùng.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) {
      try {
        await axios.delete(`https://demo-sigma.site/api/user/delete/${id}`);
        setUsers(users.filter((user) => user._id !== id));
        alert("Đã xóa tài khoản thành công!");
      } catch (error) {
        console.error("Error:", error);
        alert("Có lỗi xảy ra khi xóa tài khoản.");
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" sx={{ padding: 2 }}>
        Danh sách tài khoản
      </Typography>
      <Table aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell>Ảnh</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Quyền</TableCell>
            <TableCell align="center">Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <Avatar src={user.picture} alt={user.firstName} />
              </TableCell>
              <TableCell>
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
              <TableCell align="center">
                <Link to={`/dashboard/account/${user._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: 1 }}
                  >
                    Cập nhật
                  </Button>
                </Link>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(user._id)}
                >
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
