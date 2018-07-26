import React, { Component } from "react";
import ImageList from "../images/ImageList";
import Rating from "../ratings/Rating";
import FacilityList from "../facilities/FacilityList";
import TeamList from "../teams/TeamList";
import GoogleMap from "../maps/GoogleMap";
import ReviewList from "../reviews/ReviewList";
import AlertTopic from "../util/AlertTopic";
import "../../../../style/splash/component.css"


class CourtDetail extends Component {
    render() {
        const imageList = [
            { imageId: 1, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Picture 1", imageActive: "active" },
            { imageId: 2, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Picture 2" },
            { imageId: 3, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Picture 3" }
        ];

        return (
            <div className="">

                <AlertTopic alertStyle="alert-dark" alertTitle="Court Sena" />

                <div className="row">
                    <div className="col-12">
                        <ImageList imageList={imageList} />
                    </div>
                </div>

                <div className="row mt-4">
                    
                        <div className="col">
                            {this.renderCourtInformation()}
                        </div>
                    
                </div>

                <div className="row mt-4">
                    <div className="">
                        <TeamList />
                    </div>

                </div>

                <div className="row mt-4">

                    <div className="col-3">

                        <div className="row mt-1">
                            <div className="col">
                                <h2>Facility</h2>
                            </div>
                            <div className="">
                                <FacilityList />
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col">
                                <h2>Rating</h2>
                            </div>
                            <div className="">
                                <Rating />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="row my-4">
                    <div className="col-12">
                        <GoogleMap />
                    </div>
                </div>

                <ReviewList />
            </div>
        )
    }

    renderCourtInformation() {
        return (
            
            <div className="container">
                <div className="row">
                    <div class="card text-white bg-secondary text-center header-card">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CourtDetail;