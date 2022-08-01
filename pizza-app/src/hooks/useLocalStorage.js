import { useState } from "react"

//useLocalStorage 6te imitira povedenieto na useState
export const useLocalStorage = (key, defaultValue) => { //wrapper na useState, koito e moi si hook, koito se durji po su6tiq na4in kato useState
    const [value, setValue] = useState(()=>{
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : defaultValue;
    });//koito 6te izpolzvame za authentication. Vmesto da izpolzvame useState, za state na usera, 6te izpolzvame useLocalStorage

    //6te napravim ednovremenno userlocalstorage da updatva i localstorage i state

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));//poneje v localstorage pazim stringove. I taka tuk setvame localstorage

        setValue(newValue); //a tuk setvame local-stata
    }
    return [
        value,
        setLocalStorageValue
    ]

}

//nie nedependvame na localstorage, nie prosto go izpolzvame po pravilniq na4in , i tova e 4e sluji za suhranenie,
//koeto ni dava vuzmojnost da si q vurnem tazi informaciq ot localstorage, i za da imame persistirane
//useState poddurja dva overLoada, ediniq e initial stoinost ili default value, a drugata e da podadem funkciq, koqto da se izpulni
//za da se populni defaultValue-to

//Iskam kogato za purvi put se izpulnqva localStorage, toest funkziqta na useStata, koqto celta i e da evaluetne defaulnata stoinost
//da q setne v stata. Za celta vlizame v localstorage i 6te proverim ima li zapazen item, ako ima takuv, parsni mi go i  mi vurni
//nego kato defaultAVlue ili ako nqma6 takuv zapazen, prosto mi vurni default value, koeto si polu4il prez useLocalStorage
//purviqt put, predi da refre6nem , 6te ni se vurne defaulValue, podadeno prez uselocalstorage, a ve4e pri refre6, 6te se setne
//JSON.parse(storedData)