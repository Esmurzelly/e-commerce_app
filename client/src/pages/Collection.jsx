import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Common/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const Collection = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const handleClickOutside = e => {
        // If clicked outside - close sidebar
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSideBarOpen(false);
        }
    }

    useEffect(() => {
        // Add EventListener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 50,
                    images: [{ url: "https://picsum.photos/500/500?random=5" }]
                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 20,
                    images: [{ url: "https://picsum.photos/500/500?random=6" }]
                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 30,
                    images: [{ url: "https://picsum.photos/500/500?random=7" }]
                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 40,
                    images: [{ url: "https://picsum.photos/500/500?random=8" }]
                },
            ];

            setProducts(fetchProducts);
        }, 2000);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row'>
            {/* Mobile Filter Button */}
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' /> Filters
            </button>

            {/* Filter Sidebar */}
            <div ref={sidebarRef} className={`${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
            </div>

            <div className="flex-grow p-4">
                <h2 className='text-2xl uppercase mb-4'>All Collection</h2>

                {/* Sorting */}
                <SortOptions />

                {/* Product Grid */}
                <ProductGrid products={products} />
            </div>
        </div>
    )
}

export default Collection