import axios from "axios";

export default class PostService{
    static async getAll(){
        try{

        } catch (e){
            console.log(e); 
        }
        const response = await axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get.json?id=703935');
        
        // const params = new Proxy(new URLSearchParams(window.location.search), {
        //     get: (searchParams, prop) => searchParams.get(prop),
        //   });
        //   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        //   let value = params.some_key; // "some_value"

        console.log('Window location', window.location)

        const myKeyValues = window.location.search;
        console.log('Keys & Values', myKeyValues);

        const urlParams = new URLSearchParams(myKeyValues);

        const param1 = urlParams.get('name');

        console.log(param1)
        return response.data 
    }
}