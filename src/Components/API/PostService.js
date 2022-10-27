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
            const chatIdTelegram = tele.initDataUnsafe.user.id;
            console.log('chat ', chatIdTelegram)
            //получение айди узера Bitrix 
            
            //const urlChat = "https://crm.axcap.ae/local/webhooks/get_user_by_tid.php?api_key=eLag57bO84&tid=" + chatIdTelegram;
            const urlChat = "https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/user.get?filter[UF_SKYPE]=" + chatIdTelegram;
            const responseurlChat = await axios.get(urlChat);
            console.log('id crm', responseurlChat.data.result[0].ID)

            // if (ASSIGNED_BY_ID == responseurlChat.data) {
            //     console.log(true)
            // } else {
            //     console.log(false)
            // }

            const nolead = undefined;
            const combination ={
                "param1": param1, 
                "response": response.data,
                "CRM_ID": responseurlChat.data.result[0].ID
            }
            
            
            
            
            if (ASSIGNED_BY_ID == responseurlChat.data.result[0].ID){   
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

    