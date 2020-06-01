import React from 'react';
import CollectionOverview from '../../component/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CategoryPage from '../categorypage/category-page.component';
import { connect } from 'react-redux';
import {updateCollectionAction} from '../../redux/shop/shop.action'
import {firestore , convercollectionSnapshotToMap} from '../../firebase/firebase.utility'

class ShopPage extends React.Component {
    componentDidMount() {
        const { updateCollectionAction } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(snapshot => {
            const collectionMap = convercollectionSnapshotToMap(snapshot);
            updateCollectionAction(collectionMap);
        })
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
            </div>
        )
    }
}

const mapToDispatchProps = dispatch => ({
    updateCollectionAction : collectionMap => dispatch(updateCollectionAction(collectionMap))
});

export default connect(null,mapToDispatchProps)(ShopPage);