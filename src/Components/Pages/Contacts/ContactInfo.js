import React from 'react';
import './contacts.css';
import Wrapper from '../projects/wrapper/wrapper'

const ContactInfo = () => {
  return (
    <Wrapper>
      <div className="container myContactsDiv">
        <div className='row'>
          <div className="col-sm-12 w3-half w3-margin-bottom">
            <h2 className="contactTitle">Contact Info</h2>
            <ul className="ContactInfo">
              <li><strong>Phone: </strong>0451877237</li><br></br>
              <li><strong>Email: </strong>dina.a.tolemy@gmail.com</li><br></br>
              <li><strong>Address: </strong>7,1 Bowen Street, Chatswood 2067,Australia</li>
            </ul>

            <h2 class="linkTitle">Links</h2>
            <ul className="links">
              <a href="https://www.linkedin.com/in/dina-el-tolemy-b80873157/" >
                <i class={"fa fa-linkedin"} style={{ fontSize: 36 }}></i></a>{" "}{" "}<br></br>
              <a href="https://github.com/Dina-tolemy">
                <i className={"fa fa-github-alt"} style={{ fontSize: 36 }}></i></a>{" "}<br></br>
              <a href="https://drive.google.com/open?id=1vP6DEG39X9pJ3cgLJEy5mRzxEg7UiPEr">
                <i className={"fa fa-file-pdf-o"} style={{ fontSize: 36}}></i></a><br></br>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactInfo;