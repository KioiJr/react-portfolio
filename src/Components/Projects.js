import React from 'react';
import hides from "../Hm&S.png"
import hosp from "../Hospital.png"
import cal from "../Calculator.png"
import Login from "../Login.png"
import Registration from "../RegForm.jpg"


const Projects = () => {
  return (
    <div id="project" class="container mt-3 pb-5">
            <div class="post-heading text-center">
                <h3 class="display-5 font-weight-bold">Projects</h3>
                <hr class="w-50 mx-auto pb-5"/>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">
                            
                            <div class="card-body">
                                <h6 class="card-title">Hospital Management System</h6>
                            </div>
                            <img src= {hosp} class="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">                          
                            <div class="card-body">
                                <h6 class={cal}>Basic Calculator</h6>     
                            </div>
                            <img src="Images/Calculator.png" class="card-img-top" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">                           
                            <div class="card-body">
                                <h6 class="card-title">Login Form</h6>
                            </div>
                            <img src={Login} class="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">
                           
                            <div class="card-body">
                                <h6 class="card-title">Registration Form</h6>
                            </div>
                            <img src={Registration} class="card-img-top" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">
                            
                            <div class="card-body">
                                <h6 class="card-title">Hides and Skins Management System</h6>
                            </div>
                            <img src={hides} class="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div class="col-lg-4 col-md-6 col-12 pb-5">
                        <div class="card">
                            
                            <div class="card-body">
                                <h6 class="card-title">Login form</h6>
                            </div>
                            <img src={Login} class="card-img-top" alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Projects