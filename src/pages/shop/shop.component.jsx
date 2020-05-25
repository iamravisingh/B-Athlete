import React from 'react';
import CollectionOverview from '../../component/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CategoryPage from '../categorypage/category-page.component';

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
)

export default ShopPage;