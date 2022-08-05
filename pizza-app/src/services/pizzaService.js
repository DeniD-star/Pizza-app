import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030/data/menu';

//return ad all pizzas json promise
export const getAll=()=>{
   return request.get(baseUrl)
}
export const create=(pizzaData)=>{
   return request.post(baseUrl, pizzaData);
}

export const getOne= (pizzaId)=>{
   return request.get(`${baseUrl}/${pizzaId}`)
}
export const edit = (pizzaId, pizzaData)=>{
   return request.put(`${baseUrl}/${pizzaId}`, pizzaData)
}
export const remove = (pizzaId)=>{
   return request.del(`${baseUrl}/${pizzaId}`)
}
export const like = (pizzaId)=>{
   return request.post(`${baseUrl}/${pizzaId}`)
}