import React from 'react';
import './reviews.css';
//import 'https://www.gettyimages.com/detail/photo/paint-explosion-royalty-free-image/170955250';

class Reviews extends React.Component {
    render() {
        return (
            <ul>
                {this.props.reviews.map(rev =>
                    <li key={rev.id}>
                        {rev.email} {rev.message}
                    </li>
                )}
            </ul>
        );
    }
}

export default Reviews;
// default export Reviews;
// class Reviews extends React.Component {
//
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {reviews: []};
//     // }
//
//     render() {
//         return(
//             <ul>
//                 {this.props.reviews.map(rev =>
//                     <li key={rev.id}>
//                         {rev.email} {rev.message}
//                     </li>
//                 )}
//             </ul>
//         )
//         //React.createElement(Reviews, { reviews: this.reviews });
//     /*return(
//             <div>
//                 <ul>
//                     {this.state.reviews.map(rev =>
//                         <li key={rev.id}>
//                             {rev.email} {rev.message}
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         );*/
//     }
//
//     //<picture>
//     //<img src={require('./img1.jpeg')} width="50" height="50" alt="img"/>
//     //</picture>
// }
//
// export default Reviews;