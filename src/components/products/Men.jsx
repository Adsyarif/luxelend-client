// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card } from '../cards';
// import { Button } from '../buttonRent';



// function Men({ filters }) {
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

//           // Apply filters here based on 'filters' prop

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
//     <div className="product-list">
//       {productData.map((product) => (
//         <div key={product.id} className="product-item">
//           {/* Product card component */}
//           <Card>
//             <img src={product.image_url} alt={product.product_name} />
//             <p>{product.product_name}</p>
//             <p>Rent for IDR {product.rent_price}</p>
//             <p>Retail value IDR {product.retail_price}</p>
//             <Button>Rent Now</Button>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Men;
