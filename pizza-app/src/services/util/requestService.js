const request = async(method, url, data)=>{
    try {

        const user = localStorage.getItem('user');
        const userAuth = JSON.parse(user || '{}');//ako e samo prazen obekt, JSON.parse({}) gurmi, zatova go slagame v stringa

        let headers = {};

        if(userAuth.accessToken){
                headers['X-Authorization'] = userAuth.accessToken;
        }

        let newRequest;

        if(method === 'GET'){
            newRequest = fetch(url, {headers})
        }else{
            newRequest = fetch(url, {
                method,
                headers:{
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const response = await newRequest;

        const result = await response.json();

        return result;
        
    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');


//fetch by default is doing get request
//JSON.stringhifi==izpra6tame go pod formata na string, za da moje servura da go polu4i
//newRequest ne go await-vame, vutre v sebe si toi durji promisa
//i ve4e v responsa polu4avame awitnatiq request(newRequest)
//responsa si go obru6tam v json, za da polu4a resultata
//bind() smenq contexta na funkciqta, taka 4e suzdava nov wraper na funkciqta, taka 4e da mojem da i promenim kakto kontexta, taka i parametrite
//i po tozi na4in kazvame, napravi mi nov kontext na funkziqta, koeto e prazen obekt i
//slojimi kato pruv paramentar 'GET'

//za da suzdadem,dobavim pizza, nie trqbva da podadem accessTokena, za koeto idva na pomo6t custoHook

//kak raboti persistiraneto--componenta na praktika 6te zapazi ili 6te klonira accesstokena v localStorage i ot local storage
//moje da go podade avtomati4no v requestServisa
//6te persistirame authentication contexta, i togava 6te ni e po lesno da go napravim avtomati4no da si vzema accesstokena ot local-storage.
//Problemut e 4e pri refre6vane ,na6ata sesia iz4ezva. Pri4inata e 4e durjim authenticationdata v kontext, koito kato se refre6ne,iz4ezva.
//Ne e pravilno da izpolzvame direktno localStorage, za6toto toi nikoga nqma da promeni komponentite, ako promenim localStorage,tova nqma da nakara komponentite da se prerenderirat
//i 6te napravim taka 4e da izpolzvame localstorage no bez da gubim funkzionalnosta na reakt, i cioe , componentite da se prerenderirat 
//