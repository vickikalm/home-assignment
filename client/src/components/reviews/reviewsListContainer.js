import React from "react";
import Reviews from "./reviews";
import Search from "../search/search";

class ReviewsListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            search: ''
        }
     }

    handleSearchChange = (childData) => {
        console.log(childData);
        this.setState({search: childData})
    }

    componentDidMount() {
        fetch("/reviews")
            .then(res => res.json())
            .then(reviews => this.setState({reviews}))
    }

    filterReviews(reviews, filterBy) {
        if (filterBy === '')
            return reviews;
        else
            return reviews.filter( (rev) => {return rev.email.startsWith(filterBy, 0);} );
    }

    render() {
        return (
            <div>
                <Search search = {this.state.search} handleSearchChange = {this.handleSearchChange}/>
                <Reviews reviews={this.filterReviews(this.state.reviews, this.state.search)}/>
            </div>
        )
    }
}
export default ReviewsListContainer;