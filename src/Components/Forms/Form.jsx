import React, {useState, useEffect} from "react";
import "./Form.css";
import Axios from 'axios';
import {useForm} from 'react-hook-form';
import PostService from "../API/PostService";


const Form = (props) => {
    //Get value
    //const [data, setDate] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset 
      } = useForm();
    
    // register = JSON.stringify([data])

    const[userID, setuserID] = useState('');
    const[usedBy, setusedBy] = useState('');

    async function fetchPosts(){
        const posts = await PostService.getAll();
       // const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        //console.log(response.data)    
        //setData([response.data.result]) 
        setuserID(posts.CRM_ID)
        setusedBy(posts)
        // if(posts !== undefined){
        //     setData([posts.response.result]);
        //     setRestid(posts.param1);
        // }
    }
    
    
    
    async function appUsed(){
        const posts = await PostService.getAll(); 
        if (posts.CRM_ID == posts.ASSIGNED_BY_ID || posts.CRM_ID == 1 || posts.CRM_ID == 82407) {
            if(posts.response.result.STATUS_ID == "NEW"){
                Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.update/', {
                    "id": posts.param1,
                    "fields": {
                        "STATUS_ID": "4"
                    }
                }).then(fields => console.log('No answer default', fields)).catch(err => console.log(err ));
            }
            Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.timeline.comment.add/', {
                "fields": {
                    "ENTITY_ID": posts.param1, 
                    "AUTHOR_ID": posts.CRM_ID,
                    "ENTITY_TYPE": "LEAD",  
                    "COMMENT": "Lead has been viewed from Telegram Mobile APP"
                }
            }).then(fields => console.log('Post lead was viewed')).catch(err => console.log(err ));
        }
    }

    useEffect(() => {
        fetchPosts()
        appUsed()
    }, [])

    const[message, setMessage] = useState('');
    const [lang, setLang] = useState(null);
    const [showhide, setShowhide]=useState('');
  
   const handleshowhide=(event)=>{
     const getuser = event.target.value;    
     setShowhide(getuser);

   }

    //Post value 
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [dateplan, setdateplan] = useState('');
    //const [select, setSelect] = useState('');
      

    const onSubmit = (fields) => {
        //console.log(JSON.stringify(fields));
             
        Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.update/', { 
            "id": props.restid,
            fields,
            "params": {
                "REGISTER_SONET_EVENT": "Y"
            }
        }).then(fields => console.log('Posting data', fields)).catch(err => console.log(err ));
        
        
        Axios.post('https://hook.integromat.com/qno2ekhm7e2tooc7ku1f0dh1aqoi6glw', { 
            fields,
            "fields":{
                "ENTITY_ID": props.restid,
                "COMMENT": fields.COMMENT,
                "AUTHOR_ID": userID,
                "DATE": fields.UF_CRM_1553688545479
            }
        }).then(fields => console.log('Posting data', fields.UF_CRM_1553688545479)).catch(err => console.log(err ));
        setMessage(`-- Lead has been update successful --`);
        reset();
      };
    

    return(
        <div className="card">
            <div className="card-body">
                
                <form className="leadstatus" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                            <select 
                            className={`p-2 form-label form-control form-select ${errors.STATUS_ID && "is-invalid"}`} 
                            {...register("STATUS_ID", { required: true })}
                            onChange={(e)=>(handleshowhide(e))}>
                            <option value="">--Change LEAD status--</option>
                            <option value="IN_PROCESS">Contacted</option>
                            <option value="4">No Answer</option>
                        </select>
                        {errors.STATUS_ID && <span class="invalid-feedback">This field is required</span>}
                    </div>

                    {
                        showhide==='IN_PROCESS' && (
                            <div className="form-floating">
                                <select 
                                        className={`form-label form-control form-select ${errors.UF_CRM_1553506485 && "is-invalid"}`}
                                        {...register("UF_CRM_1553506485[0]", {required: true})}
                                    >
                                        <option value="">--Add  language--</option>
                                        <option value="2925">English</option>
                                        <option value="2927">Arabic</option>
                                        <option value="2926">Russian</option>
                                        <option value="2928">Urdu</option>
                                        <option value="2931">German</option>
                                        <option value="2932">French</option>
                                        <option value="4227">Hindi</option>
                                        <option value="5085">Farsi</option>
                                        <option value="5943">Italian</option>
                                        <option value="11420">Portuguese</option>
                                        <option value="6834">Spanish</option>
                                        <option value="6943">Kazakh</option>
                                        <option value="6944">Uzbek</option>
                                        <option value="8142">Romanian</option>
                                        <option value="10523">Ukranian</option>
                                        <option value="10524">Belorusian</option>
                                        <option value="11382">Azerbaijan</option>
                                        <option value="11383">Chechen</option>
                                        <option value="12058">Dutch</option>
                                        <option value="12082">Hebrew</option>
                                        <option value="12407">Czech</option>
                                        <option value="16871">Chinese</option>
                                        <option value="16915">Polish</option>
                                    </select>
                                    {errors.UF_CRM_1553506485 && <span class="invalid-feedback">This field is required</span>}
                                    <label for="floatingSelect">Update LEAD language</label>
                                </div>
                        )
                    }
                    
                    <div className="mb-3 ">
                        <label className="form-label text-white">Date/Time</label>
                        <input             
                            min={new Date().toISOString().slice(0, -8)}    
                            // inputProps={{
                            //     // only needs the first 16 characters in the date string
                            //     min: new Date().toISOString().slice(0, 16),
                            //   }}         
                            type="datetime-local"
                            className={`form-control ${errors.UF_CRM_1553688545479 && "is-invalid"}`}
                            {...register("UF_CRM_1553688545479", {required: 'Date is required'})}
                        />
                        {errors.UF_CRM_1553688545479 && <span className="invalid-feedback">The date should be choosed</span>}
                        <div id="emailHelp" class="form-text">The lead will show in planner</div>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label text-white">Comments</label>
                        <textarea 
                            className={`form-control ${errors.COMMENT && "is-invalid"}`} 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea"
                            {...register("COMMENT", {required: true, minLength: 30})} 
                        />
                        {/* {errors.COMMENT && <span class="invalid-feedback">This field is required</span>} */}
                        {errors.COMMENT && <span className="invalid-feedback">Minimum number of characters: 30</span>}
                    </div>

                    
                    <div class="bg-success text-white">
                        <div class="text-center">
                            {message}
                        </div>
                    </div>
                    <input className="btn btn-danger planned" type="submit"/>
                </form>    
            </div>            
        </div>
    )
}

export default Form;
