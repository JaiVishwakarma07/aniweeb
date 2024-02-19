import React from 'react'
import './categories.scss'
import { categories } from '../../../data'
import CategoryItem from '../categoryItem/CategoryItem'

const Categories = () => {
    return (
        <div className="categories">
            <h1 className='catTitle'>Explore Different Categories</h1>
            <div className="catWrapper">
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Categories