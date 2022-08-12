import * as request from "./util/requestService";


const baseUrl = 'http://localhost:3030/data/comments';

export const createComment=(pizzaId, comment, author)=>{
   return request.post(baseUrl, { pizzaId, text: comment, author})
}

// export const getCommentByPizzaId =(pizzaId)=>{

//    const relations = encodeURIComponent(`user=_ownerId:user`);
//    const search = encodeURIComponent(`pizzaId="${pizzaId}"`);
//    return request.get(`${baseUrl}?where=${search}`);
// }

   

 export const getCommentByPizzaId = (pizzaId)=>{
   const relations = encodeURIComponent(`user=_ownerId:users`)
   const search = encodeURIComponent(`pizzaId="${pizzaId}"`)

   return request.get(`${baseUrl}?where=${search}&load=${relations}`)

 }
 