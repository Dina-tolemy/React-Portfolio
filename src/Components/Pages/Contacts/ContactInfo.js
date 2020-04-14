import React from 'react';
import './contacts.css';

const ContactInfo = () => {
  return (
    <div className="container aboutMeDiv">
      <div className='row'>
        <div class="col-sm-12 w3-half w3-margin-bottom">
          <h2 class="w3-text-black ">Contact Info</h2>
          <ul className="w3-text-black ContactInfo">
            <li><strong>Phone: </strong>0451877237</li><br></br>
            <li><strong>Email: </strong>dina.a.tolemy@gmail.com</li><br></br>
            <li><strong>Address: </strong>7,1 Bowen Street, Chatswood 2067,Australia</li>
          </ul>

          <h2 class="w3-text-black">Links</h2>
          <ul className="links">
            <a href="https://www.linkedin.com/in/dina-el-tolemy-b80873157/" >
              <i class={"fa fa-linkedin"} style={{ fontSize: 36, color: 'black' }}></i></a><br></br>
            <a href="https://github.com/Dina-tolemy">
              <i class={"fa fa-github-alt"} style={{ fontSize: 36, color: 'black' }}></i></a><br></br>
            <a href="https://drive.google.com/open?id=1vP6DEG39X9pJ3cgLJEy5mRzxEg7UiPEr">
              <i class={"fa fa-file-pdf-o"} style={{ fontSize: 36, color: 'black' }}></i></a><br></br>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;