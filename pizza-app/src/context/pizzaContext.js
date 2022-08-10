import { createContext } from "react";
import { useEffect, useContext } from 'react';
import * as pizzaService from "../services/pizzaService";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import {UserContext} from './UserContext';


export const PizzaContext = createContext();


const pizzaReducer = (state, action, user) => {
    switch (action.type) {
         case 'ADD_PIZZAS':
            return action.payload.length > 0 ? action.payload.map(x => ({ ...x, comments: [] })) : [];
        case 'ADD_PIZZA':
            return [...state, action.payload];
        case 'FETCH_PIZZADETAILS':
        case 'EDIT_PIZZA':
            return state.map(x => x._id === action.pizzaId ? action.payload : x);
        case 'ADD_COMMENT':
            //return state.map(x => x._id === action.pizzaId ? { ...x, comments: [...x.comments, action.payload] } : x);
            return state.map(c=>c._id === action.pizzaId ? {...c, comments: [...c.comments, {newComment:action.payload, author: user}]} : c);
        case 'REMOVE_PIZZA':
            return state.filter(x=> x._id !== action.pizzaId)
        default:
            return state;
    }

}


export const PizzaProvider = ({children}) => {

    const navigate = useNavigate();
    const [pizzas, dispatcher] = useReducer(pizzaReducer, []);
    const {user} = useContext(UserContext);


    useEffect(() => {
        
        pizzaService.getAll()
            .then(pizzas => {
                const action = {
                    type: 'ADD_PIZZAS',
                    payload: pizzas
                }
                dispatcher(action)
            });
    }, []);

  

    const selectPizzaFromState = (pizzaId)=>{
        console.log(pizzaId);
            return pizzas.find(p=> p._id === pizzaId) || {} ;
    }

    const fetchPizzaDetails = (pizzaId, pizzaDetails) => {
        console.log(pizzaDetails);
        dispatcher({
            type: 'FETCH_PIZZA_DETAILS',
            payload: pizzaDetails,
            pizzaId
        })
    }


    const addComment = (pizzaId, comment, user) => {
        dispatcher({
            type: 'ADD_COMMENT',
            payload: comment,
            pizzaId,
            user
        })

        // setPizzas(state => {
        //     const pizza = state.find(x => x._id === pizzaId);                                                   
        //     const comments = pizza.comments || [];                                                                 
        //     comments.push(comment);                                                                                                                                          
        //     return [
        //         ...state.filter(x => x._id !== pizzaId),                            
        //         { ...pizza, comments: comments }                                           
        //     ]
        // })

    }

    const addPizzaHandler = (pizzaData) => {                                                      
        dispatcher({
            type: 'ADD_PIZZA',
            payload: pizzaData
        })


        navigate('/clientsPizzas');
    }

    const pizzaEditHandler = (pizzaId, pizzaData) => {
        dispatcher({
            type: 'EDIT_PIZZA',
            payload: pizzaData,
            pizzaId
        })
    }

    const removePizza = (pizzaId)=> {
        dispatcher({
            type: 'REMOVE_PIZZA',
            pizzaId

        })
    }



    return (
        <PizzaContext.Provider value={{ pizzas, addPizzaHandler, pizzaEditHandler, addComment, fetchPizzaDetails, selectPizzaFromState, removePizza }}>
            {children}
        </PizzaContext.Provider>
    )

}

