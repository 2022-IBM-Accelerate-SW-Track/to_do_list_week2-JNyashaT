import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/jahzara.jpg"

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic" 
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jahzara Taylor</div>
            <div className="brief_description">
              I am a rising junior at the University of Pittsburgh studying Information Science. I am a My Singing Monsters Enthusiast and self-proclaimed monster-handler!
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}