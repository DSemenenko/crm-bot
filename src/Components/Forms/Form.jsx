import React, {useState, useEffect, useForm} from "react";
import "./Form.css"
import Axios from 'axios'

const Form = () => {


    //Get value
    const [data, setDate] = useState([])

    //Post value 
    const [title, setTitle] = useState('')
    const [select, setSelect] = useState('')
    

    // const { register, handleSubmit, errors, reset } = useForm();
    

    // Get data
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/comments?id=1')
        .then(res => {
            console.log("Getting from :::::", res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    }, [])


    // Post method
    const postData = (e) => {
        e.preventDefault();
        Axios.post('https://hook.integromat.com/5xa5g97w05id7jg7iyk61nrqvh9ahmwm', {
            title,
            select
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err ));
    }




    const arr = data.map((data, index) => {
        return ( 
            <>
                <h3 className="card-title">{data.name}</h3>
                <p className="card-text">{data.body}</p>
            </>
        )
    })


    return(
        <div className="card">
            <div className="card-body">
                {arr}
                <form className="leadstatus">
                    <input 
                        className="form-label" 
                        type="text" value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select className="form-label" value={select} onChange={(e) => setSelect(e.target.value)}>
                        <option value="New">New</option>
                        <option value="No answer">No answer</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Option sent">Option sent</option>
                    </select>
                    <button className="btn btn-secondary" onClick={postData}>POST</button>
                </form>    
            </div>            
        </div>
    )
}

// function Form() {
//     return <h1>Hi</h1>
   
// }

export default Form;
