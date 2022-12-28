import { React, useState, useEffect } from "react";
import "./Aboutus.css";
import Tony from "./Tony.jpg";
import Di from "./Di.jpg";
import Phuong from "./Phoung.jpg";
import Seungmin from "./Seungmin.jpg";
import Yen from "./Yen.jpg";

export default function AboutUs() {
  return (
    <div><hr/>
    <div class="masthead">
      <div class="container position-relative first-main">
        <div class="row justify-content-center">
          <div class="col-xl-6 aboutusbox">
            <div class="text-center aboutustext">
              <h1 class="mb-3 raiseyourvoice">About Us</h1>
              <h1 class="fs-5 mb-4 makeyourlife">
                We try to make the world better
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutus">
        <div class="about_contents">
          <div class="content">
            <h2 class="about_name">Kang Junsik</h2>
            <div class="profile_pic">
              <img src={Tony} /> 
            </div>
            <ul>
              <li class="eachinfo role">- Frontend Dev.</li>
              <li class="eachinfo details">Contact: S3916884@rmit.edu.vn</li>
              <li class="eachinfo details">
                Motto: As ones sows so shall he reap
              </li>
            </ul>
          </div>
        </div>
        <div class="about_contents">
          <div class="content">
            <h2 class="about_name">Han Yeeun</h2>
            <div class="profile_pic">
              <img src={Yen} />
            </div>
            <ul>
              <li class="eachinfo role">- Planner</li>
              <li class="eachinfo details">Contact: S3912055@rmit.edu.vn</li>
              <li class="eachinfo details">Motto: Live and let live</li>
            </ul>
          </div>
        </div>
        <div class="about_contents">
          <div class="content">
            <h2 class="about_name">Hoang Duc Phuong</h2>
            <div class="profile_pic">
              <img src={Phuong} />
            </div>
            <ul>
              <li class="eachinfo role">- Frontend Dev.</li>
              <li class="eachinfo details">Contact: S3885751@rmit.edu.vn</li>
              <li class="eachinfo details">
                Motto: I am because of my mind
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="aboutus">
        <div class="about_contents">
          <div class="content">
            <h2 class="about_name">Doan Thien Di</h2>
            <div class="profile_pic">
              <img src={Di} />
            </div>
            <ul>
              <li class="eachinfo role">- Backend Dev.</li>
              <li class="eachinfo details">Contact: S3926977@rmit.edu.vn</li>
              <li class="eachinfo details">
                Motto: The lazy often works effectively
              </li>
            </ul>
          </div>
        </div>
        <div class="about_contents">
          <div class="content">
            <h2 class="about_name">Lee Seungmin</h2>
            <div class="profile_pic">
              <img src={Seungmin} />
            </div>
            <ul>
              <li class="eachinfo role">- Manager</li>
              <li class="eachinfo details">Contact: S3864235@rmit.edu.vn</li>
              <li class="eachinfo details">Motto: Life is all about timing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
