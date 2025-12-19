import { useState } from "react";
import type { ProductFormType } from "../types/ProductFormType";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";

interface AddProductFormProps{
onAddProduct: (product:ProductFormType) =>void;
}
const AddProductForm = ({onAddProduct}:AddProductFormProps) => {
  const{register,handleSubmit} = useForm <ProductFormType>();
  const[rating, setRating] =useState<number>(0);

  const onSubmit = (data:ProductFormType) => {
    const product = {...data, rating}
    onAddProduct(product);
  }

  return (
    <div className="max-w-2xl max-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-2 rounded-2xl shadow">
        <div>
          <label className="block font-medium text-left mb-1 " htmlFor="name">
            name
          </label>
          <input
          {...register("name",{required:true})}
            className="w-full border rounded-lg p-2"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block font-medium text-left mb-1" htmlFor="Price">
            Price
          </label>
          <input
            className="w-full border rounded-lg p-2"
            type="number"
            placeholder="20000"
          />
        </div>
        <div>
          <label
            className="block font-medium text-left mb-1"
            htmlFor="category"
          >
            Category
          </label>
          <select
            name="category"
            id=""
            className="w-full border rounded-lg p-2"
          >
            <option>Smart Mobiles</option>
            <option>Smart Watches</option>
            <option>Laptop</option>
            <option>Accessories</option>
            <option>other</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-left mb-1" htmlFor="quantity">Quantity</label>
          <input type="number" className="w-full border rounded-lg p-2" />
        </div>
        <div>
          <label htmlFor="rating" className="block font-medium text-left mb-1">Rating</label>
          <div className="flex space-x-2">
            {[1,2,3,4,5].map((star)=> (
              <Star
              key={star}
              size={20} 
              onClick={() => setRating(star)}
              className={`cursor-pointer ${
                rating >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-400"
              }`}
              />
            ))}

          </div>
        </div>
        <button type="submit" 
        className="w-full bg-blue-600 text-white py-2 rounded-xl text-lg font-semibold">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
