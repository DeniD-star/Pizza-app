import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030';

//return ad all pizzas json promise
export const getAll=()=>{
   return request.get(`${baseUrl}/data/clientsPizzas`)
    
   
}