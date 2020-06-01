import { updateCollection } from './shop.type';

export const updateCollectionAction = collectionArray => ({
    type: updateCollection.UPDATE_COLLECTIONS,
    payload : collectionArray
})