import React, { Component } from "react";
import AlertTopic from "../util/AlertTopic";
import GoogleMap from "../maps/GoogleMap";
import SearchBar from "../courts/SearchBar";
import LocationList from "./LocationList";
import CourtList from "./CourtList";


class CourtSearch extends Component {

    render() {

        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-md-12">
                        <AlertTopic alertTitle="Court" alertStyle="alert-danger" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <LocationList />
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <strong>กรุงเทพ</strong>
                                >
                                <strong>เขตบางเขน</strong>
                            </div>

                            <div className="col-md-6">
                                <SearchBar />
                            </div>
                        </div>

                        <div className="row">
                            <CourtList />
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default CourtSearch