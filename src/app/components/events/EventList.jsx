import React, { Component } from "react";
import EventListItem from "./EventListItem";
import NotFound from "../util/NotFound";
import AlertTopic from "../util/AlertTopic";

export default class EventList extends Component {
    render() {
        return (
            <div className="col-12">
                <AlertTopic alertTitle="Events" />

                <div className="row">
                    {this.renderEventListItem()}
                </div>
            </div>
        )
    }

    renderEventListItem() {
        const { eventList } = this.props;

        if(!eventList) return <NotFound />;

        return eventList.map(event => <EventListItem {...event} key={event.eventId} />)
    }
}
