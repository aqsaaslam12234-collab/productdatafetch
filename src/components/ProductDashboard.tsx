import { useEffect, useState } from "react";
import type { ProductFormType } from "../types/ProductFormType";
import AddProductForm from "./AddProductForm";
import ProductListTable from "./ProductListTable";

const ProductDashboard = () => {
  const [products, setProducts] = useState<ProductFormType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("product.json");
      const data = await request.json();
      setProducts(data);

      fetchData();
    };
  }, []);

  const addProduct = (newProduct: ProductFormType) => {
    setProducts((prev) => [...prev, newProduct]);
  };
  return (
    <div>
      <AddProductForm onAddProduct={addProduct} />
      <ProductListTable products={products} />
    </div>
  );
};

export default ProductDashboard;
