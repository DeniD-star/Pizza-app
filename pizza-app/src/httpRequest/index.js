//tuttele funxioni per fare requeste al restservice


export const createUserData = (obj)=>{

    fetch('https://pizza-app-cff4c.firebaseio.com/users.json', {
    
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type': 'application/json'
        }
        

    })
    .then(res=> console.log(res))
    .catch(err=> console.log(err));

}

