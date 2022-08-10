// import { createContext } from "react";
// import { useContext } from 'react';
// import {UserContext} from './UserContext';
// import { useNavigate } from "react-router-dom";
// import { useReducer } from "react";
// import * as cartService from '../services/cartService'

// export const cartContext = createContext();

// const cartReducer = (state, action, user) => {
//     switch (action.type) {
//          case 'ADD_ITEM':
//             return action.payload.length > 0 ? action.payload.map(x => ({ ...x, comments: [] })) : [];
//         case 'REMOVE_ITEM':
//             return [...state, action.payload];
//         default:
//             return state;
//     }

// }

// export const cartProvider = ({children}) => {

//     const navigate = useNavigate();
//     const [carts, dispatcher] = useReducer(cartReducer, []);
//     const {user} = useContext(UserContext);


//     useEffect(() => {
        
//         cartService.getAllOrders()
//             .then(pizzas => {
//                 const action = {
//                     type: 'ADD_PIZZAS',
//                     payload: pizzas
//                 }
//                 dispatcher(action)
//             });
//     }, []);

  

//     const selectPizzaFromState = (pizzaId)=>{
//         console.log(pizzaId);
//             return pizzas.find(p=> p._id === pizzaId) || {} ;
//     }

//     const fetchPizzaDetails = (pizzaId, pizzaDetails) => {
//         console.log(pizzaDetails);
//         dispatcher({
//             type: 'FETCH_PIZZA_DETAILS',
//             payload: pizzaDetails,
//             pizzaId
//         })
//     }


//     const addComment = (pizzaId, comment, user) => {
//         dispatcher({
//             type: 'ADD_COMMENT',
//             payload: comment,
//             pizzaId,
//             user
//         })

//         // setPizzas(state => {
//         //     const pizza = state.find(x => x._id === pizzaId);                                                   
//         //     const comments = pizza.comments || [];                                                                 
//         //     comments.push(comment);                                                                                                                                          
//         //     return [
//         //         ...state.filter(x => x._id !== pizzaId),                            
//         //         { ...pizza, comments: comments }                                           
//         //     ]
//         // })

//     }

//     const addPizzaHandler = (pizzaData) => {                                                      
//         dispatcher({
//             type: 'ADD_PIZZA',
//             payload: pizzaData
//         })


//         navigate('/clientsPizzas');
//     }

//     const pizzaEditHandler = (pizzaId, pizzaData) => {
//         dispatcher({
//             type: 'EDIT_PIZZA',
//             payload: pizzaData,
//             pizzaId
//         })
//     }

//     const removePizza = (pizzaId)=> {
//         dispatcher({
//             type: 'REMOVE_PIZZA',
//             pizzaId

//         })
//     }



//     return (
//         <CartContext.Provider value={{ carts, addPizzaHandler, pizzaEditHandler, addComment, fetchPizzaDetails, selectPizzaFromState, removePizza }}>
//             {children}
//         </CartContext.Provider>
//     )

// }