import axios from "axios";
import Error from "../Error/Error";
import React from "react";
export default class PostService{
    static async getAll(){
        try{
            const myKeyValues = window.location.search;
            const urlParams = new URLSearchParams(myKeyValues);    
            const param1 = urlParams.get('id');
            
            
            const url = "https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get.json?id=" + param1;
            //const url = "https://crmdev2.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get.json?id=87443";       
            const response = await axios.get(url);
            
            const nolead = undefined;
            const combination ={
                "param1": param1, 
                "response": response.data
            }
            
            const datalink = response.data.result.UF_CRM_1574625053;
            //console.log('Наш айди', datalink)
            
            const tele = window.Telegram.WebApp;
            const chatIdTelegram = tele.initDataUnsafe.user.id;
            // console.log('Tele.......', chatIdTelegram);
            
            
            
            
            if (datalink == chatIdTelegram){   
                return combination;
            }else{
                return nolead;
            }

        } catch (e){
            console.log('Ошииииииииииииибка', e); 
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

    