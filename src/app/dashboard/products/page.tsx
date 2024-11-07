import { ProductCard } from '@/app/products'
import { products } from '@/app/products/data/products'
import React from 'react'

export default function page() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>

            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}



        </div>
    )
}
