// import React, { useState } from 'react';
// import { Card } from '../../components/cards';
// import { TopNav } from "../../containers/Navbar";
// import { BottomNav } from "../../containers/bottomNav";
// import { Filter } from "../../components/filter/filter";
// import { Women } from '../categoryGender/components/women';

// export function WomenPage() {
//   const [filters, setFilters] = useState({
//     sizeFilter: '',
//     colorFilter: '',
//     materialFilter: '',
//     brandFilter: '',
//     styleFilter: '',
//     availableNow: false,
//   });

//   return (
//     <Card className="border-none p-0">
//       <TopNav />
//       <Card className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('src/assets/img/womenHeroBg.webp')]">
//         <p className="text-sm">Category</p>
//         <p className="font-bold text-2xl">Women</p>
//       </Card>
//       <div className="p-4 border-none flex justify-between">
//         <Filter setFilters={setFilters} category="women" />
//       </div>
//       <Women filters={filters} />
//       <BottomNav />
//     </Card>
//   );
// }
