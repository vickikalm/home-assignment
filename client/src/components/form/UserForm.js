import React, {Component} from "react";
import { render } from 'react-dom';
//import './style.css';
import {Form, Field} from 'react-final-form';
//import reviews from "../reviews/reviews";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {reviews: []}
        this.state = {
            email: '',
            message: ''
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSubmit = () => {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("inside submit")
        fetch('/submit-review', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            if (response.status === 200) {
                alert("Message sent")
                //reviews.refreshPage();
            } else {
                alert("Message failed to send.")
            }
        });

    }

    render() {
        return (
            <Form
                onSubmit={this.onSubmit}
                render={({handleSubmit, submitting, reset}) => (
                    <form onSubmit={event => {
                        const promise = handleSubmit(event);
                        console.log('submitted', promise);
                        promise.then(() => {
                            reset();
                        })
                        return promise;
                    }}>
                        <div>
                            <input type="text" placeholder="Email" value={this.state.value}
                                   onChange={this.onEmailChange}/>
                        </div>
                        <div>
                            <textarea type="text" placeholder="Message" value={this.state.value}
                                      onChange={this.onMessageChange}/>
                        </div>
                        <input type="submit" disabled={submitting}
                               value={submitting ? 'Loading.....' : 'Valider'}/>
                    </form>
                )}
            />
        )
        /*onEmailChange(event) {
            this.setState({email: event.target.value})
        }

        onMessageChange(event) {
            this.setState({message: event.target.value})
        }*/

    }
}

render(<UserForm />, document.getElementById('root'));
export default Form;