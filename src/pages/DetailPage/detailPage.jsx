import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '../../components/buttonRent';
import { Card } from '../../components/cards';

function DetailPage() {
    const { gender, product_id } = useParams();
    const [detailProduct, setDetailProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetailProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/${gender}/product/${product_id}`);
                setDetailProduct(response.data);
            } catch (error) {
                console.error('Error fetching detail product:', error);
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        if (product_id) {
            fetchDetailProduct();
        }
    }, [gender, product_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!detailProduct) {
        return <div>No product details found</div>;
    }

    return (
        <div className="max-w-screen-sm mx-auto md:max-w-2xl">
            <Card>
                <h1 className="text-xl font-bold">{detailProduct.product_name}</h1>
                <div className="p-5 flex items-center justify-center w-full">
                    {detailProduct.image_url && (
                        <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
                            {detailProduct.image_url.map((url, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img src={url} alt={`Product Image ${index + 1}`} className="w-1/2 h-1/2" />
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>
                <p className="text-gray-700"><strong>Brand:</strong> {detailProduct.product_brand}</p>
                <p className="text-gray-700"><strong>Category:</strong> {detailProduct.category}</p>
                <p className="text-gray-700"><strong>Colors:</strong> {detailProduct.color && detailProduct.color.join(', ')}</p>
                <p className="text-gray-700"><strong>Materials:</strong> {detailProduct.material && detailProduct.material.join(', ')}</p>
                <p className="text-gray-700"><strong>Fit Note:</strong> {detailProduct.fit_note}</p>
                <p className="text-gray-700"><strong>Sizes:</strong> {detailProduct.size && detailProduct.size.join(', ')}</p>
                <p className="text-gray-700"><strong>Style:</strong> {detailProduct.style && detailProduct.style.join(', ')}</p>
                <p className="text-gray-700"><strong>Retail Price:</strong> Rp {detailProduct.retail_price}</p>
                <p className="text-gray-700"><strong>Rent Price:</strong> Rp {detailProduct.rent_price}</p>
                <Button>Rent Now</Button>
            </Card>
        </div>
    );
}

export default DetailPage;
