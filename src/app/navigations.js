export const navigations = [
  { name: "Trang chủ", path: "/dashboard/default", icon: "dashboard" },
  { label: "PAGES", type: "label" },
  {
    name: "Thành phần sản phẩm",
    icon: "categoryicon",
    children: [
      { name: "Danh mục", iconText: "SI", path: "/dashboard/categorys" },
      { name: "Bộ sưu tập", iconText: "SI", path: "/dashboard/collections" },
      { name: "Thương hiệu", iconText: "SU", path: "/dashboard/brands" },

      {
        name: "Nhóm hương",
        iconText: "404",
        path: "/dashboard/fragrancenotes",
      },
    ],
  },
  {
    name: "Danh sách sản phẩm",
    icon: "equalizericon",
    path: "/dashboard/products",
  },
  {
    name: "Blog & Tin tức",
    icon: "launch",

    path: "/dashboard/news",
  },
  {
    name: "Quản lý đơn hàng",
    icon: "launch",
    path: "/dashboard/order",
  },
  {
    name: "Quản lý tài khoản",
    icon: "launch",
    path: "/dashboard/account",
  },
  {
    name: "Trang giới thiệu",
    icon: "launch",
    path: "/dashboard/about",
  },
  {
    name: "Form Liên Hệ",
    icon: "launch",
    path: "/dashboard/contact",
  },
];
