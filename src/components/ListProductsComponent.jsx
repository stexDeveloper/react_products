import React, { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";

function ListProductsComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-[40px] items-center justify-center mt-[80px] mb-[170px]">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        allProducts.map((product, index) => (
          <div
            key={product.id}
            className="w-[300px] h-full border border-blue-500 flex flex-col items-center justify-center gap-[20px] p-[20px]"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[150px] object-cover"
            />
            <div className="mt-[50px] text-center">
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
            <FaBasketShopping
              size={32}
              color="green"
              className="cursor-pointer"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default ListProductsComponent;

// import React, { useEffect, useState } from "react";
// import { FaBasketShopping } from "react-icons/fa6";

// function ListProductsComponent() {
//   //   console.log(product);

//   const [isLoading, setIsLoading] = useState(false);
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllProducts(data.products);
//         setIsLoading(true);
//       });
//     // console.log("RADII");
//   }, []);

//   return (
//     // <div className="w-[300px] h-full border border-blue-500 flex flex-col items-center justify-center gap-[20px] p-[20px]">
//     //   <img
//     //     src={product.thumbnail}
//     //     alt={product.title}
//     //     className="w-full h-[150px] object-cover"
//     //   />
//     //   <div className="mt-[50px] text-center">
//     //     <h2>{product.title}</h2>
//     //     <p>{product.price}</p>
//     //   </div>
//     //   <FaBasketShopping size={32} color="green" className="cursor-pointer" />
//     // </div>

//     <div className="flex flex-wrap gap-[40px] items-center justify-center">
//       {isLoading ? (
//         allProducts.map((product, index) => {
//           <div
//             key={product.id}
//             className="w-[300px] h-full border border-blue-500 flex flex-col items-center justify-center gap-[20px] p-[20px]"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="w-full h-[150px] object-cover"
//             />
//             <div className="mt-[50px] text-center">
//               <h2>{product.title}</h2>
//               <p>{product.price}</p>
//             </div>
//             <FaBasketShopping
//               size={32}
//               color="green"
//               className="cursor-pointer"
//             />
//           </div>;
//         })
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// }

// export default ListProductsComponent;
