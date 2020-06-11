import {createSelector} from 'reselect';
//nomalize data by transfer array to object in to shop.data.js
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

//we can't use selectShopCollections for Preview anymor, we must convert object to array using object.keys()
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
//convert object to array
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key =>collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]

    //we use shop.data by object because it will improve performance, if there a thounsand collection id 
    //it will hard to find collection.id = 999;
    //collections => collections.find(collection => collection.id ===COLLECTION_ID_MAP[collectionUrlParam])
)



