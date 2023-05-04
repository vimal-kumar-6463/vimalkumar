import React from "react";
import ContactMe from "./ContactMe.jsx";
import "./ContactPage.css";


function ContactPage (props) {

    return (
        <div className="ultiAllContacts">
            <ContactMe email={props.email} phoneNo={props.phoneNo} />
        </div>
    )
}


export default ContactPage;