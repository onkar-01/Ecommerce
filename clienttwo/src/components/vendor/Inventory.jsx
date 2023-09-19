import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../slices/productSlice";
import { FaEdit } from "react-icons/fa";
import InventoryEditForm from "./InventoryEditForm";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const InventoryCard = ({ product, key }) => {
  const navigate = useNavigate();

  const handleIncrementStock = async () => {
    try {
      const response = await fetch(
        `/api/v1/product/stock-increment-by-one/${product._id}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        // setProduct(updatedProduct.product);
        toast.success("Stock incremented successfully");
      } else {
        toast.error("Error decrementing stock: " + response.statusText);
      }
    } catch (error) {
      toast.error("Error decrementing stock: " + error.message);
    }
  };

  const handleDecrementStock = async () => {
    try {
      const response = await fetch(
        `/api/v1/product/stock-decrement-by-one/${product._id}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        // setProduct(updatedProduct.product);
        toast.success("Stock decremented successfully");
      } else {
        toast.error("Error decrementing stock: " + response.statusText);
      }
    } catch (error) {
      toast.error("Error decrementing stock: " + error.message);
    }
  };

  const image = product.images[0];

  const editInventoryHandler = () => {
    navigate(`/inventory/${product._id}/edit`);
  };

  return (
    <>
      <div class=" bg-white flex m-2 shadow-lg border border-[#ff742e] rounded-lg overflow-hidden">
        {image.url && (
          <img
            src={image.url}
            alt=""
            class=" h-36 object-contain"
            loading="lazy"
          />
        )}

        <div class=" p-2 w-full">
          <div className="title flex  justify-between  w-full">
            <h1 class="text-lg capitalize font-semibold text-slate-900 mr-[-15px] w-[100%]">
              {product.name}
            </h1>
            <button
              title="edit this inventory item"
              className="edit cursor-pointer hover:text-[#fc4a4a]"
              onClick={editInventoryHandler}
            >
              <FaEdit
                data-modal-target="defaultModal1"
                data-modal-toggle="defaultModal1"
              />
            </button>
          </div>
          <div class="text-lg font-semibold text-slate-500">
            ₹{product.price}
          </div>
          {product.stock > 0 ? (
            <div class="text-sm font-medium text-slate-700 mt-2">In Stock</div>
          ) : (
            <div class="text-sm font-medium text-slate-700 mt-2">
              Out of Stock
            </div>
          )}

          <div class="mt-4 flex items-center  justify-between">
            <div className="flex justify-between space-x-2 w-[80%] mx-auto">
              <button
                className="bg-[#ff742e] w-[33%]  ease-out duration-300 hover:scale-125 rounded-md text-[#fff]"
                onClick={() => handleDecrementStock()}
              >
                -
              </button>
              <p className="">{product.stock}</p>
              <button
                className=" bg-[#ff742e] w-[33%] ease-out duration-300 hover:scale-125 rounded-md text-[#fff]"
                onClick={() => handleIncrementStock()}
              >
                +
              </button>
            </div>
            {/* <button
            class="h-8 px-4 bg-[#f11] text-white ease-in duration-300 hover:scale-110  font-semibold rounded-md border border-slate-200"
            type="button"
          >
            Out of Stock
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

const InventoryItems = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.searchKeyword);
  const productData = useSelector((state) => state.product.productList);
  const userInfo = useSelector((state) => state.auth.userInfo);
  console.log(productData);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `/api/v1/${userInfo._id}/products?keyword=${keyword}`
        );
        if (res.ok) {
          const data = await res.json();
          dispatch(setProductList(data.products));
        } else {
          console.error("Error fetching products:", res.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [productData]);
  return (
    <div className=" grid lg:grid-cols-2  ">
      {productData?.map((product) => (
        <InventoryCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default InventoryItems;
