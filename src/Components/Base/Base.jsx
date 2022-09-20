import React, {useState, useEffect} from "react";
import CardInfo from "../Cards/CardInfo";
import Form from "../Forms/Form";
import PostService from "../API/PostService";

const Base = () =>{




    const[data, setData] = useState([])
     //Get data
    // useEffect(() => {
    //     Axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get?id=703935')
    //     .then(res => {
    //         console.log("Getting from :::::", res.data)
    //         setData(res.data)
    //     }).catch(err => console.log(err))
        
    // }, [])
    
    async function fetchPosts(){
        const posts = await PostService.getAll();
       // const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        //console.log(response.data)    
        //setData([response.data.result])  
        setData([posts.result]);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return(
        <div>
            {data.map(data =>
                <CardInfo data={data} />
                //<p>{data.TITLE}</p> 
            )}
            <Form/>
        </div>
    )
}

export default Base;