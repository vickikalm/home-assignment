import React from "react";
//import reviews from "../reviews/reviews";

class Form extends React.Component {
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

    handleSubmit(event) {

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
                alert("Message Sent."); // change to refresh feed with new entry
                this.resetForm()
            } else {
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="Email" value={this.state.value} onChange={this.onEmailChange} />
                </div>
                <div>
                    <textarea type="text" placeholder="Message" value={this.state.value} onChange={this.onMessageChange} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    resetForm(){
        this.setState({email: '', message: ''})
    }

}

export default Form;