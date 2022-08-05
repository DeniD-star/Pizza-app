import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030/data/likes';


export const addLike=(pizzaId, author)=>{
   return request.post(baseUrl, { pizzaId, author})
}

export const getLikesByPizzaId =(pizzaId)=>{
   
   const search = encodeURIComponent(`pizzaId="${pizzaId}"`);
   return request.get(`${baseUrl}?pizzaId=${pizzaId}`);
}

export const removeLike= (likeId)=>{
        return request.del(`${baseUrl}/${likeId}`)
}