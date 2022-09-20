import React from "react";


const CardInfo = (props) => {
    
    // console.log(props);
    //console.log("Дата::: ", props.data)

    const email = props.data.EMAIL[0];
    const phone = props.data.PHONE[0];

    return(
        <div>
            <div className="card mb-3 text-white bg-primary">
                <div className="card-body">
                    <h6 className="card-title"><span className="text-warning">Name:</span> {props.data.NAME}</h6>
                    <h6 className="card-title"><span className="text-warning">Last Name:</span> {props.data.LAST_NAME}</h6>
                    <h6 className="card-title"><span className="text-warning">Lead ID:</span> {props.data.ID}</h6>
                    <hr/>
                    <h6 className="card-subtitle mt-3"><span className="text-warning">Source Details:</span> {props.data.UF_CRM_1553506792}</h6>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>        

            <div className="card mb-3 text-white bg-dark">
                <div className="card-body">
                    <h6 className="card-title"><span className="text-warning">Phone:</span> <a href="tel:{phone.VALUE}" className="text-white">{phone.VALUE}</a></h6>
                    <h6 className="card-title"><span className="text-warning">E-mail:</span> <a href="mailto:{email.VALUE}" className="text-white">{email.VALUE}</a></h6>
                    <h6 className="card-title"><span className="text-warning">Messenger:</span>
                        <button className="btn btn-outline-danger">asdasd <i class="bi bi-telegram"></i></button>
                         {props.data.ID}
                    </h6>
                    <hr/>
                    <h6 className="card-subtitle mt-3"><span className="text-warning">Source Details:</span> {props.data.UF_CRM_1553506792}</h6>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div> 

        </div>
    )
}

export default CardInfo;
