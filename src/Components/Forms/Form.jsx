import React, {useState} from "react";
import "./Form.css"
import Axios from 'axios'

const Form = () => {


    //Get value
    //const [data, setDate] = useState([])

    //Post value 
    const [title, setTitle] = useState('')
    const [select, setSelect] = useState('')
    

    // const { register, handleSubmit, errors, reset } = useForm();
    

    // // Get data
    // useEffect(() => {
    //     Axios.get('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get?id=703935')
    //     .then(res => {
    //         console.log("Getting from :::::", res.data)
    //         setDate(res.data)
    //     }).catch(err => console.log(err))
    // }, [])


    // Post method
    const postData = (e) => {
        e.preventDefault();
        Axios.post('https://hook.integromat.com/5xa5g97w05id7jg7iyk61nrqvh9ahmwm', {
            title,
            select
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err ));
    }




    // const arr = data.result.map((data, index) => {
    //     return ( 
    //         <>
    //             <h3 className="card-title">{data.result.ID}</h3>
    //             {/* <p className="card-text">{data.body}</p> */}
    //         </>
    //     )
    // })


    return(
        <div className="card">
            <div className="card-body">
                {/* {arr} */}
                <form className="leadstatus">
                    <div className="mb-3 ">
                        <label className="form-label">Date/Time</label>
                        <input 
                            type="datetime-local"
                            className="form-control"
                        />
                        <div id="emailHelp" class="form-text">The lead will show in planner</div>
                    </div>
                    <div className="mb-3 form-floating">
                        {/* <label className="form-label">Comment</label>
                        <input 
                            placeholder="Leave a comment or instructions"
                            className="form-control" 
                            type="text" value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        /> */}
                        <textarea className="form-control" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"/>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div className="form-floating">
                        <select className="form-label form-control form-select" value={select} onChange={(e) => setSelect(e.target.value)}>
                            {/* <option >Open this select menu</option> */}
                            <option selected value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Option sent">Option sent</option>
                            <option value="Option sent">Warm</option>
                            <option value="Option sent">HOT</option>
                            <option value="Option sent">Customer</option>
                            <option value="Option sent">Unsuccessful</option>
                        </select>
                        <label for="floatingSelect">Update LEAD status</label>
                    </div>
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
