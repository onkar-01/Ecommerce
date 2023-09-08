import VendorCard from "./Vendors";
import Loader from "../components/Loader";
import React, { Suspense, useEffect } from "react";
import Product_Card from "../components/Product_Card";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../slices/cartSlice";
import { setProductList } from "../slices/productSlice";
import { setVendorId } from "../slices/vendorSlice";

const Products = ({ id }) => {
  const [hydrated, setHydrated] = React.useState(false);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search.searchKeyword);
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  useEffect(() => {
    setHydrated(true);
    const fetchProducts = async () => {
      try {
        dispatch(setVendorId(id));
        const res = await fetch(`/api/v1/${id}/products?keyword=${keyword}`);
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
  }, [id, productData]);
  // Make sure to include id as a dependency

  console.log(`/api/v1/${id}/products`);

  const addToCartHandler = (options) => {
    dispatch(addToCart(options));
    console.log(options);
    toast.success("Added to cart");
  };

  if (!hydrated) {
    return <Loader />;
  }

  return (
    <section className="lg:w-[80%] sm:w-[60%] flex flex-auto flex-wrap justify-items-center justify-center gap-x-5 gap-y-10 md:gap-y-10 md:gap-x-10 lg:gap-y-14 lg:gap-x-10 mt-[20px] mb-5 mr-auto ml-auto sm:mr-5">
      <Suspense fallback={<Loader />}>
        {productData?.map((product) => (
          <Product_Card
            product={product}
            handler={addToCartHandler}
            key={product._id}
          />
        ))}
      </Suspense>
    </section>
  );
};

export default Products;
