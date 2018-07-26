import React, { Component } from "react";
import SportList from "./sports/SportList";
import EventList from "./events/EventList";
import ImageList from "./images/ImageList";
import AlertTopic from "./util/AlertTopic";


export default class App extends Component {
    render() {
        const sportList = [
            { sportId: 1, sportName: "Football" },
            { sportId: 2, sportName: "Basketball" },
            { sportId: 3, sportName: "Badminton" }
        ];

        const eventList = [
            { eventId: 1, eventName: "Tournament" },
            { eventId: 2, eventName: "Match" }
        ]

        const imageList = [
            { imageId: 1, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Ads 1", imageActive: "active" },
            { imageId: 2, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Ads 2" },
            { imageId: 3, imageUrl: "http://via.placeholder.com/800x200", imageDescription: "Ads 3" }
        ];

        return (
            <React.Fragment>
                <div className="row mb-3">
                    <div className="col-12">
                        <AlertTopic alertTitle="Advertising" />

                        <ImageList imageList={imageList} />
                    </div>
                </div>

                <div className="row">
                    <SportList sportList={sportList} />
                </div>

                <div className="row">
                    <EventList eventList={eventList} />
                </div>
            </React.Fragment>
        );
    }
}