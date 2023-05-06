import React from "react";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import ProductTiles from "./pages/Product/ProductTiles";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
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
