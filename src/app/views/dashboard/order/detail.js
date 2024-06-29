import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Chip,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
  Divider,
} from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState("");

  const getOrder = async () => {
    try {
      const res = await axios.get(`https://demo-sigma.site/api/order/${id}`);
      setOrder(res.data);
      setStatus(res.data.status); // Cập nhật trạng thái ban đầu
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi lấy thông tin đơn hàng.");
    }
  };

  useEffect(() => {
    getOrder();
  }, [id]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const updateOrderStatus = async () => {
    try {
      const res = await axios.patch(`https://demo-sigma.site/api/order/${id}`, {
        status,
      });
      alert(`Status updated to: ${res.data.status}`);
      window.location.reload(); // Tải lại trang để cập nhật dữ liệu mới
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update status");
    }
  };

  if (!order) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Card raised sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          Chi tiết đơn hàng: {order.code}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Khách hàng: {order.fullName} ({order.email})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {order.address}, {order.ward}, {order.district}, {order.province}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Điện thoại: {order.phone}
        </Typography>
        <Chip
          label={`Trạng thái: ${order.status}`}
          color="primary"
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="div">
          Sản phẩm đặt mua:
        </Typography>
        <List>
          {order.products.map((product) => (
            <ListItem key={product._id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  src={`https://demo-sigma.site/${product.product.images[0].replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={product.product.name}
                  sx={{ width: 90, height: 90 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.product.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Size: {product.sizeInfo.size}, Giá:{" "}
                      {product.sizeInfo.price.toLocaleString()} VND
                    </Typography>
                    {product.sizeInfo.getDiscountedPrice && (
                      <Typography
                        component="span"
                        variant="body2"
                        color="error"
                        sx={{ ml: 2 }}
                      >
                        Giá giảm:{" "}
                        {product.sizeInfo.getDiscountedPrice.toLocaleString()}{" "}
                        VND
                      </Typography>
                    )}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" color="text.primary" sx={{ mt: 2 }}>
          Tổng tiền: {order.total.toLocaleString()} VND
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mt: 2 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="order-status-label">Trạng thái</InputLabel>
            <Select
              labelId="order-status-label"
              id="order-status-select"
              value={status}
              onChange={handleStatusChange}
              label="Trạng thái"
            >
              <MenuItem value="Chờ thanh toán">Chờ thanh toán</MenuItem>
              <MenuItem value="Xử lý đơn">Xử lý đơn</MenuItem>
              <MenuItem value="Vận chuyển">Vận chuyển</MenuItem>
              <MenuItem value="Đã giao">Đã giao</MenuItem>
              <MenuItem value="Đã hủy">Đã hủy</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={updateOrderStatus}
          >
            Cập nhật trạng thái
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Detail;
