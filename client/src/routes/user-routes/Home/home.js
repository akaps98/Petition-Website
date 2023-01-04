import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './home.css';
import Card from "../../../components/Card/card";
import Slider from "../../../components/Slider/slider";
import HomeData from "../../../data/HomeData";
import Spinner from 'react-bootstrap/Spinner';

// This is the home page of the web application
const Home = () => {

    return (
        <div><hr/>
        <header class="masthead">
        <div class="container position-relative first-main">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="text-center">
                        <h1 class="mb-3 raiseyourvoice">Raise your voice</h1>
                        <h1 class="fs-5 mb-4 makeyourlife">Make your life relaxed, make other's life beautiful</h1>
                        <Link to="/list">
                            <button type="button" class="btn btn-outline-primary letspetition">Let's petition!</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="second-main">
            <div class="justify-content-center">
                <div class="text-center howtopetition">
                    <h1 class="mb-3 raiseyourvoice">How to petition?</h1>
                    <h1 class="fs-5 mb-4 makeyourlife">Don't hesitate! It's super easy!</h1>
                </div>
                <div class="instruction text-center">
                    <div class="steps">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                    </svg>
                    <h1 class="fs-4 mb-4 first-inst">Sign In</h1>
                    <h1 class="fs-6 mb-4 makeyourlife">Register your account, and sign in!</h1>
                    </div>
                    <div class="steps">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                        </svg>
                        <h1 class="fs-4 mb-4 first-inst">Make Petition</h1>
                        <h1 class="fs-6 mb-4 makeyourlife">What changes do you want to create?</h1>
                    </div>
                    <div class="steps">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16">
                            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                          </svg>
                        <h1 class="fs-4 mb-4 first-inst">Done!</h1>
                        <h1 class="fs-6 mb-4 makeyourlife">Wait others sign your petition</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
    );
};

export default Home;