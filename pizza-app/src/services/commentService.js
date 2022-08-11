import * as request from "./util/requestService";


const baseUrl = 'http://localhost:3030/data/comments';

export const createComment=(pizzaId, comment, author)=>{
   return request.post(baseUrl, { pizzaId, author,  text: comment})
}

export const getPizzaById =(pizzaId)=>{

   const relations = encodeURIComponent(`user=_ownerId:user`);
   const search = encodeURIComponent(`pizzaId="${pizzaId}"`);
   return request.get(`${baseUrl}?${search}`);
}