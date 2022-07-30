const baseUrl = 'http://localhost:3030';

//return ad all pizzas json promise
export const getAll=()=>{
   return fetch(`${baseUrl}/data/clientsPizzas`)
    .then(res=> res.json());
   
}