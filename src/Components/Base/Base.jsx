import React, {useState, useEffect} from "react";
import CardInfo from "../Cards/CardInfo";
import Form from "../Forms/Form";
import PostService from "../API/PostService";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/Error";

const Base = () =>{




    const[data, setData] = useState([]);
    const[restid, setRestid] = useState([]);
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
        if(posts !== undefined){
            setData([posts.response.result]);
            setRestid(posts.param1);
        }
    }
    
    

    useEffect(() => {
        fetchPosts()
    }, [])

    if (data[0] !== undefined) {
        return(
            <div className="base-template">
                <Navbar/>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {data.map(data =>
                                    <CardInfo data={data} />
                                    
                                    //<p>{data.TITLE}</p> 
                                )}
                                <Form restid={restid}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    } else {
        return(
            <div className="base-template"> 
                <Error/>
            </div>
        )
    }
    
}

export default Base;