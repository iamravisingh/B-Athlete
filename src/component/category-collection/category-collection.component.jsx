import React from 'react';
import './category-collection.style.scss';
import CollectionItem from '../../component/collection-item/collection-item.component'


const CategoryListingPage = ({ title, items }) => {
    return (
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item)=> (
                    <CollectionItem key={item.id} item = {item}/>
            ))}
        </div>
        </div>
    )
}

export default CategoryListingPage;