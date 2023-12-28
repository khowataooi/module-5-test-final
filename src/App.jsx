import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/products/ProductList";
import CreateProduct from "./pages/products/CreateProduct";
import EditProduct from "./pages/products/EditProduct";
import Info from "./pages/products/Info";

function App() {
  return (
    <Routes>
      <Route path={""} element={<Navigate to={"products/list"} />} />
      <Route path={"products"} element={<Home />}>
        <Route path={"list"} element={<ProductList />} />
        <Route path={"add"} element={<CreateProduct />} />
        <Route path={"edit/:id"} element={<EditProduct />} />
        <Route path={":id"} element={<Info />} />
      </Route>
    </Routes>
  );
}

export default App;
