import React from 'react';
import './AboutMe.css';
import profileImg from './profile8.jpg'

const AboutMe = () => {

     return (

          <div className=" container aboutMeDiv">
               <div class="row">
                    <div class="col-sm-12 col-lg-4 card">
                         <img src={profileImg} alt={'img'} />
                    </div>
                    <div class="col-sm-12 col-lg-8 card">
                         <h4 className='nameTitle'> Iam Dina Eltolemy</h4>
                         <br></br>
                         <div className='meContent'>
                              I graduated from faculty of computer science and information systems.
                              I have a background and fully understanding of system analysis, system design, data structure.
                              Worked with C#, my SQL server for w while, then I took a break for family related reasons.
                              Recently I joined the university of Sydney full-stack Bootcamp to catch up with the latest technologies.
                              I learnt some of the latest technologies such as JavaScript, ES6, bootstrap, AJAX, React, MySQL and MongoDB.
                              and have been using it to create some great applications.
                     </div>
                    </div>
               </div>
          </div>
     );
}

export default AboutMe;