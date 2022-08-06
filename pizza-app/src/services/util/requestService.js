const request = async(method, url, data)=>{
    try {

        const user = localStorage.getItem('user');
        const userAuth = JSON.parse(user || '{}');
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


