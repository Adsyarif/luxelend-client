// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card } from "../../../../components/cards";
// import { Button } from "../../../../components/buttonRent";

// export function Men({ filters }) {
//   const [productData, setProductData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/men/product');
//         console.log('Response:', response.data);

//         if (Array.isArray(response.data.men_products) && response.data.men_products.length > 0) {
//           let filteredProducts = response.data.men_products;

//           if (filters.sizeFilter) {
//             filteredProducts = filteredProducts.filter(product => product.size.includes(filters.sizeFilter));
//           }
//           if (filters.colorFilter) {
//             filteredProducts = filteredProducts.filter(product => product.color.includes(filters.colorFilter));
//           }
//           if (filters.materialFilter) {
//             filteredProducts = filteredProducts.filter(product => product.material.some(mat => mat.includes(filters.materialFilter)));
//           }
//           if (filters.brandFilter) {
//             filteredProducts = filteredProducts.filter(product => product.product_brand === filters.brandFilter);
//           }
//           if (filters.styleFilter) {
//             filteredProducts = filteredProducts.filter(product => product.style.includes(filters.styleFilter));
//           }
//           if (filters.availableNow) {
//             filteredProducts = filteredProducts.filter(product => product.available);
//           }

//           setProductData(filteredProducts);
//         } else {
//           setError('No product data available');
//         }
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//         setError('Error fetching product data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [filters]);

//   useEffect(() => {
//     // Reset productData when filters change
//     setLoading(true); // Reset loading state
//     setProductData([]); // Clear previous product data
//     setError(null); // Clear previous error
//   }, [filters]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (productData.length === 0) {
//     return <p>No products match the selected filters.</p>;
//   }

//   return (
//     <div className="p-5 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
//       {productData.map((product) => (
//         <div key={product.id} className="max-w-xs">
//           <Card className="border-none p-3">
//             <div>
//               <img className="object-cover w-full h-96" src={product.image_url[0]} alt={product.product_name} />
//             </div>
//             <div className="p-2">
//               <p className="text-xs">{product.product_brand}</p>
//               <p className="text-xs pb-2">{product.product_name}</p>
//               <p className="font-semibold text-xs">Rent for IDR {product.rent_price}</p>
//               <p className="text-xs">Retail value IDR {product.retail_price}</p>
//             </div>
//           </Card>
//           <div className="flex justify-center pt-5">
//             <Button className="w-4/6 px-3 text-white font-semibold">
//               Rent Now
//             </Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
