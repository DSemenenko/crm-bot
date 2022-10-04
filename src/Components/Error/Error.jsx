import React from "react";
import classes from "./Error.css"
const Error = () => {

    
    return(
        <section class="page_404">
            <div class="container">
                <div class="row">	
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            {/* <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div> */}
                            <h3 class="h2 text-danger">
                            You don't have access to the lead any more!
                                </h3>
                            {/* <div class="contant_box_404">
                                
                                
                                <p>You don't have access to the lead any more!</p>
                                
                                <a href="" class="link_404">Go to Home</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;