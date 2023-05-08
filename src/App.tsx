import React from "react";
import "./App.css";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProductTiles from "./pages/Product/ProductTiles";
import Header from "./components/Header/Header";
import { ProductManagement } from "./pages/Admin/Product/ProductManagement";
import AdminHeader from "./components/Header/AdminHeader";
import Checkout from "./pages/Product/Checkout";
import AdminLogin, { ADMIN_AUTHENTICATED_ROLE } from "./pages/Login/AdminLogin";
import { AdminSideNav } from "./components/AdminSideNav";
import { OrderManagement } from "./pages/Admin/Order/OrderManagement";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          />
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductTiles />} />
            <Route
              path="products"
              element={
                <React.Suspense fallback={<>...</>}>
                  <ProductTiles />
                </React.Suspense>
              }
            />
            <Route
              path="checkout"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Checkout />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route
            path="/admin/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <AdminLogin />
              </React.Suspense>
            }
          />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<ProductManagement />} />
            <Route
              path="products"
              element={
                <React.Suspense fallback={<>...</>}>
                  <ProductManagement />
                </React.Suspense>
              }
            />
            <Route
              path="orders"
              element={
                <React.Suspense fallback={<>...</>}>
                  <OrderManagement />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

function AdminLayout() {
  if (localStorage.getItem(ADMIN_AUTHENTICATED_ROLE) !== "Admin") {
    return <Navigate to={"/admin/login"} replace />;
  }

  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSideNav />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
