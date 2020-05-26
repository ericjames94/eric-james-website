//Most of this file was created using instructions/source code from Ashley Mosuro
//https://medium.com/@amosuro/sending-form-data-with-reactjs-nodejs-express-amazon-ses-1a2612e3f6d

import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

/*
    This helper function allows us to send a post request to a server. 
    It takes data as an argument, which is expecting a url property containing the end-point URL to send the request to. 
    Notice how after obtaining the url property we delete it, since we don't actually want to send this in the request payload, 
    it is simply a way for us to pass the endpoint URL and associated request payload as one argument.
*/
const post = async (data) => {
    const { url } = data;
    delete data.url;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.status < 200 && response.status >= 300){
            const res = await response.json();

            throw new Error(res);
        }

        return response.json();
    } catch (e) {
        throw e;
    }
};

class ContactForm extends Component {
    state = {
        error: null,
        submitted: false,
        fields: { name: '', email: '', message: ''}
    };

    showNotification = (type) => {
        switch(type) {
            case 'success':
                NotificationManager.success('Thank you for your message, and I will get back to you soon.', 'Message Sent!');
                break;
            case 'error':
                NotificationManager.error('Please try again, or refresh.', 'Something Went Wrong');
                break;
            default:
                NotificationManager.warning('Message', 'Title');
                break;
        }
    };

    submitForm = function (event) {
        event.preventDefault();
        const formElement = event.target;
        const {name, email, message} = formElement.elements;

        //URL is AWS Restful API URL
        const payload = {
            url: "https://2g6dka98da.execute-api.us-east-1.amazonaws.com/local",
            name: name.value,
            email: email.value,
            message: message.value
        };

        post(payload)
            .then(() => {
                this.setState({error: null, submitted: true});
                this.showNotification('success')
            })
            .catch(error => {
                this.setState({error: error.message, submitted: false});
                this.showNotification('error');
            });
    };

    render () {
        return (
            <div className="contact-form section-content color-text-04 no-text-shadow">
                <h2>Let's Get In Touch</h2>            
                <form ref={this.formElement} 
                      onSubmit={(event) => this.submitForm(event)}>
                    <span>
                        <input type="text"
                            name="name"
                            id="name"
                            placeholder="Name"/>
                    </span>
                    <br/>
                    <span>
                        <input type="text"
                            name="email"
                            id="email"
                            placeholder="Email"/>
                    </span>
                    <br/>
                    <span>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            rows="4"
                            columns="50"/> 
                    </span>
                    <br/>
                    <button type="submit" className="color-04 color-text-01">Submit</button>
                </form>
                <NotificationContainer />
            </div>

        );
    }
};

export default ContactForm;