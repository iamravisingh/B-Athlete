import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers : 2,
    skipping : 3,
    womens : 4,
    mens : 5
    
}

const selectShopPage = (state) => state.shop;

export const selectCollection = createSelector(
    [selectShopPage],
    shop => shop.collection
)

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCategoryCollection = collectionUrlParam => (
    createSelector(
        [selectCollection],
        collection => collection ? collection.find(item => item.id === COLLECTION_ID_MAP[collectionUrlParam]) : null
    )
)