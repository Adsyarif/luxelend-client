import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    select: {
        width: '100%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#F9E29A',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        outline: 'none',
    },
};

const Filter = ({ setFilters, category }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sizeFilter, setSizeFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [materialFilter, setMaterialFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [styleFilter, setStyleFilter] = useState('');
    const [availableNow, setAvailableNow] = useState(false);
    const [sortOrder, setSortOrder] = useState('newest');
    const [activeSortOrder, setActiveSortOrder] = useState('newest');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleClearFilters = () => {
        setSizeFilter('');
        setColorFilter('');
        setMaterialFilter('');
        setBrandFilter('');
        setStyleFilter('');
        setAvailableNow(false);
        applyFilters();
        setSortOrder('');
        setActiveSortOrder('');   
    };

    const handleApplyFilters = () => {
        closeModal();
        applyFilters();
    };

    const applyFilters = () => {
        setFilters((prev) => ({
            ...prev,
            sizeFilter,
            colorFilter,
            materialFilter,
            brandFilter,
            styleFilter,
            availableNow,
            sortOrder,
            activeSortOrder,
        }))
    };

    const filters = {
        size: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: 'xxl', label: 'XXL' },
        ],
        color: [
            { value: 'blue', label: 'Blue' },
            { value: 'black', label: 'Black' },
            { value: 'grey', label: 'Grey' },
            { value: 'white', label: 'White' },
        ],
        material: [
            { value: 'cotton', label: 'Cotton' },
            { value: 'polyester', label: 'Polyester' },
            { value: 'wool', label: 'Wool' },
        ],
        brand: [
            { value: 'nike', label: 'Nike' },
            { value: 'adidas', label: 'Adidas' },
            { value: 'puma', label: 'Puma' },
        ],
        style: [
            { value: 'casual', label: 'Casual' },
            { value: 'formal', label: 'Formal' },
            { value: 'sportswear', label: 'Sportswear' },
        ],
    };

    const menFilters = {
        size: [
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: 'xxl', label: 'XXL' },
        ],
        color: [
            { value: 'blue', label: 'Blue' },
            { value: 'black', label: 'Black' },
            { value: 'grey', label: 'Grey' },
            { value: 'white', label: 'White' },
        ],
        material: [
            { value: 'cotton', label: 'Cotton' },
            { value: 'polyester', label: 'Polyester' },
            { value: 'wool', label: 'Wool' },
        ],
        brand: [
            { value: 'nike', label: 'Nike' },
            { value: 'adidas', label: 'Adidas' },
            { value: 'puma', label: 'Puma' },
        ],
        style: [
            { value: 'casual', label: 'Casual' },
            { value: 'formal', label: 'Formal' },
            { value: 'sportswear', label: 'Sportswear' },
        ],
    };

    const appliedFilters = category === 'men' ? menFilters : filters;

    return (
        <>
            <div className="p-5 ">
                <button className="rounded-md px-3 py-1 border border-slate-100 bg-[#F9E29A]" onClick={openModal}>
                    Filter + Sort
                </button>
                
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Filter Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        borderRadius: '10px',
                        width: '400px',
                        maxWidth: '80%',
                    },
                }}
            >
                <div className="border-none">
                    <h2 className="mb-4 text-xl font-bold text-center">Filter + Sort</h2>
                    <h3 className="font-bold">Sort by</h3>
                    <div className="flex font-semibold text-xs">
                    <button 
                            className={`rounded-md px-3 py-1 border border-slate-100 ${activeSortOrder === 'newest' ? 'bg-[#EFB01F] text-white' : 'bg-[#F9E29A]'}`}
                            onClick={() => { setSortOrder('newest'); setActiveSortOrder('newest'); }}>
                            Newest
                        </button>
                        <button 
                            className={`rounded-md px-3 py-1 border border-slate-100 ${activeSortOrder === 'popular' ? 'bg-[#EFB01F] text-white' : 'bg-[#F9E29A]'}`}
                            onClick={() => { setSortOrder('popular'); setActiveSortOrder('popular'); }}>
                            Popular
                        </button>
                        <button 
                            className={`rounded-md px-3 py-1 border border-slate-100 ${activeSortOrder === 'highToLow' ? 'bg-[#EFB01F] text-white' : 'bg-[#F9E29A]'}`}
                            onClick={() => { setSortOrder('highToLow'); setActiveSortOrder('highToLow'); }}>
                            High to low
                        </button>
                        <button 
                            className={`rounded-md px-3 py-1 border border-slate-100 ${activeSortOrder === 'lowToHigh' ? 'bg-[#EFB01F] text-white' : 'bg-[#F9E29A]'}`}
                            onClick={() => { setSortOrder('lowToHigh'); setActiveSortOrder('lowToHigh'); }}>
                            Low to high
                        </button>
                    </div>

                    <div className="mt-5 mb-3 flex justify-between items-center">
                        <h3 className="font-bold mr-2">Available Now</h3>
                        <label htmlFor="toggle" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input
                                    id="toggle"
                                    type="checkbox"
                                    className="sr-only"
                                    checked={availableNow}
                                    onChange={() => setAvailableNow(!availableNow)}
                                />
                                <div className={`w-10 h-6 bg-gray-400 rounded-full shadow-inner ${availableNow ? 'bg-green-500 ' : 'bg-white'}`}></div>
                                <div className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition-transform duration-500 ease-in-out ${availableNow ? 'transform translate-x-full bg-white' : 'bg-white'}`}></div>
                            </div>
                        </label>
                    </div>
                    <h4 className="leading-none">Toggle on the display name currently available to rent</h4>

                    <h3 className="font-bold mt-5 mb-2">Filter</h3>

                    <div className="mb-4">
                        <select
                            value={sizeFilter}
                            onChange={(e) => setSizeFilter(e.target.value)}
                            style={customStyles.select}
                        >
                            <option className='text-base' value="">Size</option>
                            {appliedFilters.size.map((option) => (
                                <option className='text-sm' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <select
                            value={colorFilter}
                            onChange={(e) => setColorFilter(e.target.value)}
                            style={customStyles.select}
                        >
                            <option className='text-base' value="">Color</option>
                            {appliedFilters.color.map((option) => (
                                <option className='text-sm' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <select
                            value={materialFilter}
                            onChange={(e) => setMaterialFilter(e.target.value)}
                            style={customStyles.select}
                        >
                            <option className='text-base' value="">Material</option>
                            {appliedFilters.material.map((option) => (
                                <option className='text-sm' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <select
                            value={brandFilter}
                            onChange={(e) => setBrandFilter(e.target.value)}
                            style={customStyles.select}
                        >
                            <option className='text-base' value="">Brand</option>
                            {appliedFilters.brand.map((option) => (
                                <option className='text-sm' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <select
                            value={styleFilter}
                            onChange={(e) => setStyleFilter(e.target.value)}
                            style={customStyles.select}
                        >
                            <option className='text-base' value="">Style</option>
                            {appliedFilters.style.map((option) => (
                                <option className='text-sm' key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex mt-8 font-bold ">
                        <button
                            className="m-5 w-1/2 rounded-lg bg-gradient-to-r from-[#D2B48C] to-[#EFB01F] text-white px-4 py-2"
                            onClick={handleClearFilters}
                        >
                            Clear
                        </button>
                        <button
                            className="m-5 w-1/2 rounded-lg bg-gradient-to-r from-[#D2B48C] to-[#EFB01F] text-white px-4 py-2"
                            onClick={handleApplyFilters}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Filter;
