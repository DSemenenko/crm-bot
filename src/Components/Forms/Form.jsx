import React, {useState} from "react";
import "./Form.css";
import Axios from 'axios';
import {useForm} from 'react-hook-form';
import param1 from "../API/PostService";

console.log('айди', param1);

// //Validation 
// const Input= ({label, register, required}) => (
//     <>
//         <textarea 
//             {...register("comment", { required: true })} 
//             className={`form-control is-invalid ${errors.comment && "is-invalid"}`} 
//             aria-describedby="validationServer03Feedback" 
//             id="validationServer03"
//         />
//         <label for="validationServer03" class="form-label">{label}</label>
//     </>
// );

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
      
    const[message, setMessage] = useState('');
    const [lang, setLang] = useState(null);

    //Post value 
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [dateplan, setdateplan] = useState('');
    //const [select, setSelect] = useState('');
 
 

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
    // const postData = (e) => {
    //     e.preventDefault();
    //     setComment('');
    //     setdateplan('');
    //     setTitle('');
    //     Axios.post('https://hook.integromat.com/5xa5g97w05id7jg7iyk61nrqvh9ahmwm', {
    //         statuslead,
    //         dateplan,
    //         comment,
    //     }).then(res => console.log('Posting data', res)).catch(err => console.log(err ));
    // }

   

    const onSubmit = (fields) => {
        console.log(JSON.stringify(fields));
         console.log('массив', fields.COMMENT);
        
        // const arraytest = [];
        // const test = arraytest.push('hhhhhhhhh', UF_CRM_1553506485)
        // console.log(test)

        // Axios.post('https://crmdev2.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.update', { 
        //     "id": 87443,
        //     fields, 
        //     "params": {
        //         "REGISTER_SONET_EVENT": "Y"
        //     },
            
        // }).then(fields => console.log('Posting data', fields)).catch(err => console.log(err ));
        // this.fields.concat('')
        
        
        Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.update/', { 
            "id": props.restid,
            fields,
            "params": {
                "REGISTER_SONET_EVENT": "Y"
            }
        }).then(fields => console.log('Posting data', fields)).catch(err => console.log(err ));
        
        
        Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.timeline.comment.add/', { 
            "fields":{
                "ENTITY_ID": props.restid,
                "ENTITY_TYPE": "lead",
                "COMMENT": fields.COMMENT
            }
        }).then(fields => console.log('Posting data', fields)).catch(err => console.log(err ));
        setMessage(`-- Lead has been update successful --`);
        reset();
      };


    const disablePastDate = () => {
        var today,dd,mm,yyyy;
        today = new Date();
        dd = String(today.getDate() + 1).padStart(2, "0");
        mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    
    
    function getLangDiv(){
        switch(lang){
            case "IN_PROCESS": 
                return <div className="form-floating">
                        <select 
                            className="form-label form-control form-select is-invalid"
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
                        <span class="invalid-feedback">This field is required</span>
                        <label for="floatingSelect">Update LEAD language</label>
                    </div>
                default: 
                return null;
        }
    }

    return(
        <div className="card">
            <div className="card-body">
                
                <form className="leadstatus" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <select  
                            onClick={(event) => {
                                setLang(event.target.value)
                            }}
                            className={`p-2 form-label form-control form-select ${errors.STATUS_ID && "is-invalid"}`} 
                            {...register("STATUS_ID", { required: 'Gender is required' })} 
                        >
                            <option value="">--Change LEAD status--</option>
                            <option value="IN_PROCESS">Contacted</option>
                            <option value="4">No Answer</option>
                        </select>
                        {errors.STATUS_ID && <span class="invalid-feedback">This field is required</span>}
                    </div>

                    {/* <div className="form-floating">
                        <select 
                            className="form-label form-control form-select"
                            {...register("UF_CRM_1553506485[0]", {required: false})}
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
                        <label for="floatingSelect">Update LEAD language</label>
                    </div> */}

                    {getLangDiv()}
                    

                    <div className="mb-3 ">
                        <label className="form-label text-white">Date/Time</label>
                        <input             
                            min={new Date().toISOString().slice(0, -8)}    
                            inputProps={{
                                // only needs the first 16 characters in the date string
                                min: new Date().toISOString().slice(0, 16),
                              }}         
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
                            {...register("COMMENT", {required: true})}
                        />
                        {errors.COMMENT && <span className="invalid-feedback">There should be a comment</span>}
                    </div>

                    
                    <div class="bg-success text-white">
                        <div class="text-center">
                            {message}
                        </div>
                    </div>

                    {/* <div className="form-floating">
                        <select className="form-label form-control form-select" value={select} onChange={(e) => setSelect(e.target.value)}>
                            <option selected value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Option sent">Option sent</option>
                            <option value="Option sent">Warm</option>
                            <option value="Option sent">HOT</option>
                            <option value="Option sent">Customer</option>
                            <option value="Option sent">Unsuccessful</option>
                        </select>
                        <label for="floatingSelect">Update LEAD status</label>
                    </div> */}
                    {/* <button className="btn planned" onClick={postData}>Planned</button> */}
                    <input className="btn btn-danger planned" type="submit"/>
                </form>    
            </div>            
        </div>
    )
}

export default Form;
