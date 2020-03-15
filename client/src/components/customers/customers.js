import React from 'react';

import './customers.css';

class Customers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {customers: []}
    }

    componentDidMount() {
        fetch("/api/customers")
            .then(res => res.json())
            .then(customers => this.setState({customers}));
    }

    render() {
        return(
            <div>
                <h2>customers</h2>
                <ul>
                    {this.state.customers.map(c =>
                        <li key={c.id}>{c.firstName}{c.lastName}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Customers;
