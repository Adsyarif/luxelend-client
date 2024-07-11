// // import React from 'react';
// // import Women from './Women';
// // import Men from './Men';
// // import { Card } from '../cards';
// // import { TopNav } from '../../containers/Navbar';
// // import { BottomNav } from '../../containers/bottomNav';
// // import { Filter } from '../filter/filter';

// // function ProductList({ gender, filters }) {
// //   return (
// //     <div className="product-list">
// //       {gender === 'women' && <Women filters={filters} />}
// //       {gender === 'men' && <Men filters={filters} />}
// //     </div>
// //   );
// // }

// // export default ProductList;


// // ProductList.js

// import React from 'react';
// import { Card } from '../cards';
// import { Button } from '../buttonRent';

// function ProductList({ products, loading, error }) {
//   console.log('Products:', products); // Tambahkan console.log untuk melihat nilai products

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (products.length === 0) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <div className="product-list p-5 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
//       {products.map((product) => (
//         <div key={product.id} className="product-item max-w-xs">
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

// export default ProductList;
