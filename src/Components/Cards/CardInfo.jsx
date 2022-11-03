import React from "react";
import './CardInfo.css'
import Axios from 'axios';

const CardInfo = (props) => {
    

    let email = [];
    let phone = [];
    if (props.data !== undefined) {
        if(props.data.EMAIL !== undefined){
            email = props.data.EMAIL[0];
        }

        if(props.data.PHONE !== undefined){
            phone = props.data.PHONE[0];
        }
    } 

    let status = [];
    let elemstat;
    if (props.data.STATUS_ID == "NEW") {
        status = `NEW`
        elemstat = <div className="card-body p-2 text-center" style={{background: "#3ad0ff"}}>{status}</div>
    } else if (props.data.STATUS_ID == "4") {
        status = `No Answer`
        elemstat = <div className="card-body p-2 text-center" style={{background: "#fead99", color: "#000"}}>{status}</div>
    } else {
        status = "Contacted"
        elemstat = <div className="card-body p-2 text-center" style={{background: "#fff467", color: "#000"}}>{status}</div>
    }

    function trigWhatsapp() {
        Axios.post('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.timeline.comment.add/', {
            "fields": {
                "ENTITY_ID": props.data.ID, 
                "AUTHOR_ID": props.data.ASSIGNED_BY_ID,
                "ENTITY_TYPE": "LEAD",  
                "COMMENT": "Whatsapp button clicked."
            }
        }).then(fields => console.log('Post lead was viewed')).catch(err => console.log(err ));
    }

    
    return(
        <div>
            <div className="card mb-3 text-white">
                <div className="card-body">
                    <h6 className="card-title"><span className="text-warning">Name:</span> {props.data.NAME}</h6>
                    <p className="card-title"><span className="text-warning">Lead ID:</span> {props.data.ID}</p>
                    <hr/>
                    <p className="card-subtitle mt-3 lh-sm"><span className="text-warning">Source Details:</span> {props.data.UF_CRM_1553506792}</p>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>        

            <div className="card mb-3 text-white">
                <div className="card-body">
                    <div className="d-flex justify-content-between contact-btn align-items-center">
                        <p className="card-title"><span className="text-warning">IP Country:</span> <span>{props.data.UF_CRM_1585947183}</span></p>
                        
                    </div>
                    <div className="d-flex justify-content-between contact-btn align-items-center">
                        <p className="card-title"><span className="text-warning">Phone:</span> <a href={`https://hook.integromat.com/z086mv296aa5nsy41wwgehscz59ai57i?action=tel&value=${phone.VALUE}`} className="text-white">{phone.VALUE}</a></p>
                        {/* <button onClick={() =>  navigator.clipboard.writeText(`${phone.VALUE}`)} className="btn btn-primary">Copy</button> */}
                    </div>
                    <div className="d-flex justify-content-between contact-btn align-items-center">
                        <p className="card-title"><span className="text-warning">E-mail:</span> <a href={`https://hook.integromat.com/z086mv296aa5nsy41wwgehscz59ai57i?action=mail&value=${email.VALUE}`} className="text-white">{email.VALUE}</a></p>
                        {/* <button onClick={() =>  navigator.clipboard.writeText(`${email.VALUE}`)} className="btn btn-primary">Copy</button> */}
                        
                    </div>
                    <p className="card-title mt-3"><span className="text-warning">Messengers:</span></p>
                    <div className="d-flex justify-content-between call-buttons gap-3">
                        {/* <button className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg> Telegram</button> */}
                        <a onClick={trigWhatsapp} href={`https://wa.me/${phone.VALUE}?text=Dear%20Valued%20Client%2C%20%0AWe%20thank%20you%20for%20taking%20the%20time%20to%20submit%20your%20details%20in%20regards%20to%20further%20information%20on%20Dubai%20real%20estate%20investment%20opportunities.%20%0AI%20will%20guide%20you%20in%20your%20purchase%20through%20market%20insights%20and%20professional%20experience.%20%0APlease%20advise%20of%20a%20convenient%20time%20to%20contact%20you%0A%0ASincerely%0ASales%20Office`} class="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg> WhatsApp</a> 
                    </div>
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                    <div className="mt-3">
                        <p className="card-title"><span className="text-warning">Status:</span></p>
                        <div class="card border-0 mb-2">
                            {elemstat}
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default CardInfo;
