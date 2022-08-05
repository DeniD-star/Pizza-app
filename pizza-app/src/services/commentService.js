import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030/data/comments';

//return ad all pizzas json promise
// ``export const createComment=(pizzaId,  comment)=>{
//    return request.post(baseUrl, {pizzaId,   text: comment})
// }``
export const createComment=(pizzaId, comment, author)=>{
   return request.post(baseUrl, {_id: Math.random(), pizzaId, author,  text: comment})
}

export const getPizzaById =(pizzaId)=>{
   
//tova bi trqbvalo da vsi4ki comentari za edna igra

   const relations = encodeURIComponent(`user=_ownerId:user`);
   const search = encodeURIComponent(`pizzaId="${pizzaId}"`);
   return request.get(`${baseUrl}?${search}`);
}