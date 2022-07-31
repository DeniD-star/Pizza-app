import * as request from "./util/requestService";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });


//tova uni6tojava sesiqta samo v survura, ne na klienta
export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })


        return response;
    } catch (error) {
            console.log(error);
    }
};



//pravilniqt na4in e klienta da izprati zaqvka do servura za logout, za da moje servura da uni6toji sesiqta, da uni6toji tokena
//i pove4e s nego nqma da moje da se autoriziarame, za6toto tozi token ima nqkkauv lifecicle, za da se logautnem kakto na
//survura, taka i na klienta(za po-golqma sigurnost)
