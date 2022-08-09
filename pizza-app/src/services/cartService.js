import * as request from "./util/requestService";
import uniqId from 'uniqid';

const baseUrl = 'http://localhost:3030/data/cart';

export const getAllOrders=()=>{
   return request.get(baseUrl)
}
export const addToTheCart=(itemId, userId, quantity, item)=>{
   return request.post(baseUrl, {_id: uniqId(), itemId, userId, quantity, item})
}

export const getItemById =(itemId)=>{

   const relations = encodeURIComponent(`user=_ownerId:user`);
   const search = encodeURIComponent(`itemId="${itemId}"`);
   return request.get(`${baseUrl}?${search}`);
}

export const delOrder= (itemId)=>{
    return request.del(`${baseUrl}/${itemId}`)
}