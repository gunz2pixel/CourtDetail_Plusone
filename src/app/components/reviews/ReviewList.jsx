import React, { Component } from "react";
import ReviewListItem from "./ReviewListItem";

class ReviewList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h3>Reviews</h3>
                    {this.renderReviewListItem()}
                </div>
            </div>
        )
    }

    renderReviewListItem() {
        return <ReviewListItem />
    }
}

export default ReviewList;