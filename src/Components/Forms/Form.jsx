import React, {useState} from "react";
import "./Form.css";
import Axios from 'axios';
import {useForm} from 'react-hook-form';

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

const Form = () => {

    //Get value
    //const [data, setDate] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset 
      } = useForm();
    

    

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

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        Axios.post('https://hook.integromat.com/5xa5g97w05id7jg7iyk61nrqvh9ahmwm', {
            data
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err ));
        reset()
      };

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return(
        <div className="card">
            <div className="card-body">
                
                <form className="leadstatus" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <select  
                            className={`p-2 form-label form-control form-select ${errors.leadsatus && "is-invalid"}`} 
                            {...register("leadsatus", { required: 'Gender is required' })} 
                        >
                            <option value="">LEAD status</option>
                            <option value="Contacted">Contacted</option>
                            <option value="No Answer">No Answer</option>
                        </select>
                        {errors.leadsatus && <span class="invalid-feedback">This field is required</span>}
                    </div>

                    <div className="form-floating">
                        <select 
                            className="form-label form-control form-select"
                            {...register("language", {required: false})}
                        >
                            {/* <option >Open this select menu</option> */}
                            <option selected value="English">English</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Russian">Russian</option>
                            <option value="Urdu">Urdu</option>
                            <option value="German">German</option>
                            <option value="French">French</option>
                            <option value="Flemish">Flemish</option>
                            <option value="Italian">Italian</option>
                            <option value="Kazakh">Kazakh</option>
                            <option value="Uzbek">Uzbek</option>
                            <option value="Spanish">Spanish</option>
                            <option value="SA">SA</option>
                            <option value="Romanian">Romanian</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Polish">Polish</option>
                            <option value="Farsi">Farsi</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Albanian">Albanian</option>
                            <option value="Hebrew">Hebrew</option>
                        </select>
                        <label for="floatingSelect">Update LEAD language</label>
                    </div>

                    <div className="mb-3 ">
                        <label className="form-label text-white">Date/Time</label>
                        <input 
                            //value={dateplan}
                            //onChange={(e) => setdateplan(e.target.value)}
                            type="date"
                            className={`form-control ${errors.dateplan && "is-invalid"}`}
                            {...register("dateplan", {required: 'Date is required'})}
                            min={disablePastDate()}
                        />
                        {errors.dateplan && <span className="invalid-feedback">The date should be choosed</span>}
                        <div id="emailHelp" class="form-text">The lead will show in planner</div>
                    </div>
                    <div className="mb-3 ">
                        {/* <label className="form-label">Comment</label>
                        <input 
                            placeholder="Leave a comment or instructions"
                            className="form-control" 
                            type="text" value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        /> */}
                        <label className="form-label text-white">Comments</label>
                        <textarea 
                            className={`form-control ${errors.comment && "is-invalid"}`} 
                            //value={comment}  
                            //onChange={(e) => setComment(e.target.value)} 
                            placeholder="Leave a comment here" 
                            id="floatingTextarea"
                            {...register("comment", {required: true})}
                        />
                        {errors.comment && <span className="invalid-feedback">There should be a comment</span>}

                        {/* <Input  label="Leave a comment here" register={register} required placeholder="Leave a comment here" />
                        {errors.comment && <span  id="validationServer03Feedback" class="invalid-feedback">This field is required</span>} */}
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
