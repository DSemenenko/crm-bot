import axios from "axios";

export default class PostService{
    static async getAll(){
        try{
            const myKeyValues = window.location.search;
            const urlParams = new URLSearchParams(myKeyValues);    
            const param1 = urlParams.get('id');
            
            
            const url = "https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get.json?id=" + param1;       
            const response = await axios.get(url);
            
            return response.data 
            
        } catch (e){
            console.log('Ошиииииииииииииибка', e); 
        }

        
        
        // const params = new Proxy(new URLSearchParams(window.location.search), {
        //     get: (searchParams, prop) => searchParams.get(prop),
        //   });
        //   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        //   let value = params.some_key; // "some_value"
        

        // console.log('Window location', window.location);
        // console.log('Keys & Values', myKeyValues);
        
		// console.log('Новая ссылка:::::', url);
    }
}

    