// import React, { useState } from 'react';

// import { TopNav } from "../../containers/Navbar";
// import { BottomNav } from "../../containers/bottomNav";
// import { Filter } from "../../components/filter/filter";
// import { Men } from '../categoryGender/components/men';
// import { Card } from '../../components/cards';

// export function MenPage() {
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
//       <Card className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('src/assets/img/menHeroBg.webp')]">
//         <p className="text-sm">Category</p>
//         <p className="font-bold text-2xl">Men</p>
//       </Card>
//       <div className="p-4 border-none flex justify-between">
//         <Filter setFilters={setFilters} category="men" />
//       </div>
//       <Men filters={filters} />
//       <BottomNav />
//     </Card>
//   );
// }
