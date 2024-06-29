import React from "react";
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
} from "@mui/material";
import { Link } from "react-router-dom";

const Index = () => {
  const [orders, setOrders] = useState([]);

  const getOrder = async () => {
    const res = await fetch("https://demo-sigma.site/api/order");
    const data = await res.json();
    setOrders(data.orders); // Giả sử data.orders chứa mảng các đơn hàng
  };

  useEffect(() => {
    getOrder();
  }, []);

  const handleDelete = async (id) => {
    // Hỏi người dùng xem có chắc chắn muốn xóa không
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")) {
      try {
        const response = await fetch(
          `https://demo-sigma.site/api/order/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Đơn hàng đã được xóa thành công!");
          getOrder(); // Cập nhật lại danh sách đơn hàng sau khi xóa
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Có lỗi xảy ra khi xóa đơn hàng.");
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mã đơn hàng</TableCell>
            <TableCell align="right">Tên khách hàng</TableCell>
            <TableCell align="right">Tổng tiền</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            <TableCell align="right">Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell component="th" scope="row">
                {order.code}
              </TableCell>
              <TableCell align="right">{order.fullName}</TableCell>
              <TableCell align="right">
                {order.total.toLocaleString()} VND
              </TableCell>
              <TableCell align="right">{order.status}</TableCell>
              <TableCell align="right">
                <Link to={`/dashboard/order/${order._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    Xem chi tiết
                  </Button>
                </Link>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(order._id)}
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

export default Index;
