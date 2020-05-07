import React from 'react';
import SHOP_DATA from './shop.date'
import CategoryListingPage from '../../component/category-collection/category-collection.component'


class ShopPage extends React.Component{
    constructor() {
        super();

        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id, ...OtherProps}) => (
                        <CategoryListingPage key={id} {...OtherProps}/>
                    )) 
                }
            </div>
        )
    }
}

export default ShopPage;