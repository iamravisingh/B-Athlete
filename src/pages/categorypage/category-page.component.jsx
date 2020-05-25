import React from 'react';
import './category-page.style.scss';
import { connect } from 'react-redux';
import {selectCategoryCollection} from '../../redux/shop/shop.selector.js'

const CategoryPage = ({ match,collection }) => {
    console.log('match in collection page>>>>>>>>>>>>>>>',match,collection)
    return (
        <div className='collection-page'>
            <h2>CategoryPage</h2>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collection : selectCategoryCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryPage);