import axios from "axios";
import Error from "../Error/Error";
import React from "react";
export default class PostService{
    static async getAll(){
        try{
            const myKeyValues = window.location.search;
            const urlParams = new URLSearchParams(myKeyValues);    
            const param1 = urlParams.get('id');
            
            
            // получение лида  ----------------
            const url = "https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get.json?id=" + param1; 
            const response = await axios.get(url);
            const ASSIGNED_BY_ID = response.data.result.ASSIGNED_BY_ID
            
            
            // получение тг чат ID 
            const tele = window.Telegram.WebApp;
            const chatIdTelegram = 5591115278 //tele.initDataUnsafe.user.id;

            //получение айди узера Bitrix 
            //const urlChat = "https://crm.axcap.ae/local/webhooks/get_user_by_tid.php?api_key=eLag57bO84&tid=" + chatIdTelegram;
            const urlChat = "https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/user.get?filter[UF_SKYPE]=" + chatIdTelegram;
            const responseurlChat = await axios.get(urlChat);

            // if (ASSIGNED_BY_ID == responseurlChat.data) {
            //     console.log(true)
            // } else {
            //     console.log(false)
            // }

            const nolead = undefined;
            const combination ={
                "param1": param1, 
                "response": response.data,
                "CRM_ID": responseurlChat.data.result[0].ID,
                "managment_id": {
                    "Tosin": 870811629, 
                    "Otabek": 154679895,
                    "Denis": 313203995,
                    "David": 5591115278
                },
                "chatIdTelegram": chatIdTelegram
            }
            
            
            
            if (responseurlChat.data.result[0].ID == ASSIGNED_BY_ID  || responseurlChat.data.result[0].ID == 1 || responseurlChat.data.result[0].ID == 82407 || responseurlChat.data.result[0].ID == 7 || responseurlChat.data.result[0].ID == 6){   
                return combination;
            }else{
                return undefined;
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

    