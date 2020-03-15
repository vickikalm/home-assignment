import React from 'react';
import './search.css';

//import 'https://www.gettyimages.com/detail/photo/paint-explosion-royalty-free-image/170955250';
//value={this.props.search}
class Search extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search" onChange={(event) => {this.props.handleSearchChange(event.target.value)}}/>
            </div>
        )
    }
}

export default Search;
