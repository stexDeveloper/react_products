import React, { useEffect, useState } from "react";
// import profileImage from "../assets/coding.jpg";
import { toast } from "react-toastify";

function SingleProductComponent() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((response) => {
        setSingleProduct(response);
        setIsLoading(true);
        setTimeout(() => toast.success("Dosao proizvod"), 500);
      });
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <img
        src={profileImage}
        alt=""
        className="w-[400px] h-[400px] object-cover rounded-full"
      /> */}
      {isLoading ? (
        <>
          <img
            src={singleProduct.thumbnail}
            alt=""
            className="rounded-full border border-blue-400"
          />

          <div>
            <h2>{singleProduct.title}</h2>

            <img
              src={singleProduct.images[3]}
              alt=""
              className="w-[90px] h-[90]"
            />
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default SingleProductComponent;
