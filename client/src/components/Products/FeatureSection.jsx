import React from 'react'
import { HiShoppingBag } from "react-icons/hi";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi";

const FeatureSection = () => {
    return (
        <section className='py-16 px-4 bg-white'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiShoppingBag className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2 uppercase'>Free International Shipping</h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>On all orders over $100.00</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiMiniArrowPathRoundedSquare className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2 uppercase'>45 days return</h4>
                    <p className='text-gray-600 text-sm tracking-tighter justify-end'>Money back guarantee</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full mb-4">
                        <HiOutlineCreditCard className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2 uppercase'>Secure checkpoint</h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>100% secured checkout</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection