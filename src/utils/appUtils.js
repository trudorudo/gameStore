import gameStoreService from "../service/gameStoreService";

export const pushToWishList = (wishListData, newItem) => {
    const { item, objkey } = newItem;
    return [...wishListData, { ...item, key: objkey, isInWishList: true }]
};

export const removeFromWishList = (wishListData, newItemObj) => wishListData.filter(item => item.key !== newItemObj.key);
