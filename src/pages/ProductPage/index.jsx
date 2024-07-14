import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/cards';
import { Button } from '../../components/buttonRent';
import Filter from '../../components/filter/filter';

function ProductPage() {
  const { gender, category } = useParams();
  const [productData, setProductData] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    sizeFilter: '',
    colorFilter: '',
    materialFilter: '',
    brandFilter: '',
    styleFilter: '',
    availableNow: false,
    categoryFilter: category,
    sortOrder: 'newest',
  });

  const currency = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'IDR'
  });

  const sortProducts = (products, sortOrder) => {
    const sortMap = {
      newest: (a, b) => new Date(b.date) - new Date(a.date),
      popular: (a, b) => b.popularity - a.popularity,
      highToLow: (a, b) => b.rent_price - a.rent_price,
      lowToHigh: (a, b) => a.rent_price - b.rent_price,
    };
    
    return products.slice().sort(sortMap[sortOrder] || ((a, b) => a - b));
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/${gender}/product`);

        const productsKey = `${gender}_products`;
        if (Array.isArray(response.data[productsKey]) && response.data[productsKey].length > 0) {
          const allProducts = response.data[productsKey];
          console.log(allProducts)
          setTotalProductCount(allProducts.length); 

          let filteredProducts = allProducts;

          if (filters.sizeFilter) {
            filteredProducts = filteredProducts.filter(product => product.size.includes(filters.sizeFilter));
          }
          if (filters.colorFilter) {
            filteredProducts = filteredProducts.filter(product => product.color.includes(filters.colorFilter));
          }
          if (filters.materialFilter) {
            filteredProducts = filteredProducts.filter(product => product.material.includes(filters.materialFilter));
          }
          if (filters.brandFilter) {
            filteredProducts = filteredProducts.filter(product => product.product_brand.includes(filters.brandFilter));
          }
          if (filters.styleFilter) {
            filteredProducts = filteredProducts.filter(product => product.style.includes(filters.styleFilter));
          }
          if (filters.availableNow) {
            filteredProducts = filteredProducts.filter(product => product.available);
          }
          if (filters.categoryFilter) {
            filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === filters.categoryFilter.toLowerCase());
          }

          filteredProducts = sortProducts(filteredProducts, filters.sortOrder);

          setProductData(filteredProducts);
        } else {
          setError('No product data available');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gender, filters, category]);

  return (
    <div className="max-w-screen-sm mx-auto md:max-w-2xl">
      <h2 className='text-center'>{gender === 'women' ? 'Women Products' : 'Men Products'}</h2>
      <div className='flex justify-between w-full'>
        <Filter setFilters={setFilters} category={gender} />
        <div className="flex items-center p-5">
          {loading && <p>Loading...</p>}
          {!loading && !error && <p className='ml-auto'>{productData.length} Result</p>}
        </div>
      </div>
      {!loading && !error && productData.length === 0 && <p className='ml-auto'>No products match the selected filters.</p>}

      
        <div className="p-5 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {productData.map((product) => (
            <div key={product.id} className="max-w-xs">
            <Link to={`/detailpage/${gender}/${product.id}`}>
            
              <Card className="border-none p-3">
                <div>
                  <img className="object-cover w-full h-72" src={product.image_url[0]} alt={product.product_name} />
                </div>
                <div className="p-2">
                  <p className="text-xs capitalize">{product.product_brand}</p>
                  <p className="text-xs pb-2 capitalize">{product.product_name}</p>
                  <p className="font-semibold text-xs">Rent for {currency.format(product.rent_price)}</p>
                  <p className="text-xs">Retail Value {currency.format(product.retail_price)}</p>
                </div>
              </Card>
              <div className="flex justify-center pt-5">
                <Button className="w-4/6 px-3 text-white font-semibold">
                  Rent Now
                </Button>
              </div>
            
            </Link>
            </div>
          ))}
        </div>
      
      
    </div>
  );
}

export default ProductPage;
