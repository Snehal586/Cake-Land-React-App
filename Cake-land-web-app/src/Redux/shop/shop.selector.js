import {createSelector} from 'reselect';



const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


//To get data in Shop page
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

// To get the data for every collection differently
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
)

