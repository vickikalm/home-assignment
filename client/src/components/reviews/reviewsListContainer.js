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

    render() {
        let filteredReviews = this.state.reviews.filter(
                (rev) => {
                    if (this.state.search === '')
                        return rev;
                    else
                        return rev.email.startsWith(this.state.search, 0);
                }
        );
        return (
            <div>
                <Search search = {this.state.search} handleSearchChange = {this.handleSearchChange}/>
                <Reviews reviews={filteredReviews}/>
            </div>
        )
    }
}
export default ReviewsListContainer;