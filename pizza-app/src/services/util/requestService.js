const request = async(method, url, data)=>{
    try {

        let newRequest;

        if(method === 'GET'){
            newRequest = fetch(url)
        }else{
            newRequest = fetch(url, {
                method,
                headers:{
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