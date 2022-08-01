import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030/data/comments';

//return ad all pizzas json promise
export const createComment=(pizzaId, comment)=>{
   return request.post(baseUrl, {pizzaId, text: comment})
    
   
}