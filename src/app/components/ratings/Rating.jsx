import React from "react";
import RatingWidget from 'react-rating-widget'
export default (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <RatingWidget
                        iconCount={5}   
                    />
                </div>
            </div>
        </div>

    )
}