import React from "react";

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

    validateEmail(email) {
        var regexp =new RegExp("/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))/g$");
        var ans2 = email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        // var regexp =new RegExp("/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/");
        console.log(regexp.test(email));
        var ans =  regexp.test("vicki@vicki.com");
        return ans;
        //return regexp.test(email);
    }

    handleSubmit(event) {
        console.log("inside submit");
        let isValid = this.validateEmail(this.state.email)
        if (!isValid) {
            alert("wrong email");
            event.preventDefault();
        }
        else {
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
                } else {
                    alert("Message failed to send.")
                }
            })
        }
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
}

export default Form;