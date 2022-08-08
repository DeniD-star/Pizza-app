// import * as request from "./util/requestService";

// const baseUrl = 'http://localhost:3030/data/orders';


// export const addOrder=(orderId, author)=>{
//    return request.post(baseUrl, { orderId, author})
// }

// export const getOrderById =(orderId)=>{
   
//    const search = encodeURIComponent(`orderId="${orderId}"`);
//    return request.get(`${baseUrl}?orderId=${orderId}`);
// }

// export const removeLike= (likeId)=>{
//         return request.del(`${baseUrl}/${likeId}`)
// }


import * as request from "./util/requestService";
import uniqId from 'uniqid';

const baseUrl = 'http://localhost:3030/data/orders';

export const getAllOrders=()=>{
   return request.get(baseUrl)
}
export const addOrder=(orderId, user, quantity, item)=>{
   return request.post(baseUrl, {_id: uniqId(), orderId, user, quantity, item})
}

export const getOrderById =(orderId)=>{

   const relations = encodeURIComponent(`user=_ownerId:user`);
   const search = encodeURIComponent(`orderId="${orderId}"`);
   return request.get(`${baseUrl}?${search}`);
}

export const delOrder= (orderId)=>{
    return request.del(`${baseUrl}/${orderId}`)
}