import { createContext } from "react";
import {  useEffect } from 'react';
import * as pizzaService from "../services/pizzaService";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

export const PizzaContext = createContext();


const pizzaReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_PIZZAS':
            return action.payload.map(p=> ({...p, comments: []}));
        case 'ADD_PIZZA' :
            return [...state, action.payload];
        case 'EDIT_PIZZA' :
            return state.map(p=>p._id === action.pizzaId ? action.payload : p);
        case 'ADD_COMMENT' :
            return state.map(c=>c._id === action.pizzaId ? {...c, comments: [...c.comments, action.payload]} : c);
            default:
                return state;
    }
    
}


export const PizzaProvider = ({
    children,//vsi4ko, koeto stoi pod UserProvider v App.js, toest vsi4ki komponenti  pod nego
}) => {
  
    const navigate = useNavigate();
    const [pizzas, dispatcher] = useReducer(pizzaReducer, []);
   

    useEffect(() => {
        // taka imam zapazeni igrite vutre v state na ClientsCatalog
        pizzaService.getAll()
            .then(pizzas => {
                const action = {
                    type: 'ADD_PIZZAS',
                    payload: pizzas
                }
                dispatcher(action)
            });
    }, []);

    //zapazvame stata v localstorage


    const addComment = (pizzaId, comment) => {
            dispatcher({
                type: 'ADD_COMMENT',
                payload: comment,
                pizzaId
            })

        // setPizzas(state => {
        //     const pizza = state.find(x => x._id === pizzaId);                                                   //vzimam pizzata ot stata s pizzi
        //     const comments = pizza.comments || [];                                                                  // suzdavamm si masiv ot comentari kato se baziram na sega6nite komentari ili nov masiv ot prazni komentari
        //     comments.push(comment);                                                                             //kum koito dobavqm noviq                                                                       //trqbva po nemotira6t na4in da obnovim stata
        //     return [
        //         ...state.filter(x => x._id !== pizzaId),                                  //sled tova iskam da vurna 4isto nov state, dai mi samo pizzata koqto mi trqbva
        //         { ...pizza, comments: comments }                                            //dobavi nov obekt , toest pizzata, koqto izrqzvan ot gore, na koqto i dobavqm komentarite, podmenqm komentarite da sa aktualnite komentari
        //     ]
        // })

    }

    const addPizzaHandler = (pizzaData) => {                                                        //--tova,tova go pravim za da zapazim stata na pizzite, kogato se suzdava nov apizza(toest obnovqva se stata)(lektor)
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

  

    return (
        <PizzaContext.Provider value={{pizzas, addPizzaHandler, pizzaEditHandler}}>
                {children}
        </PizzaContext.Provider>
    )

}


//useReducer e funkziq koqto opredelq kak da se promenq daden state, toi funkziq, koqto 6te 
//vzeme star state i 6te vurne nov state, koito nov state e nova referenciq
//action e' object, s koito opisvame kakvo se o4akva da se slu4i, kakuv action
//patern and convenciq e actiona da ima type and payload, no ne e zaduljitelno