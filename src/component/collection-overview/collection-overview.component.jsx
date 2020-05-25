import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector.js';
import { createStructuredSelector } from 'reselect';
import CategoryListingPage from '../category-collection/category-collection.component'

const CollectionOverview = ({ collection }) => {
    return (
        <div className='collection-overview'>
            {
                collection.map(({ id, ...OtherProps }) => (
                    <CategoryListingPage key={id} {...OtherProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection : selectCollection
})

export default connect(mapStateToProps)(CollectionOverview)