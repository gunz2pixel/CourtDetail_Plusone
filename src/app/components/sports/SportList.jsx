import React, { Component } from "react";
import SportListItem from "./SportListItem";
import NotFound from "../util/NotFound";
import AlertTopic from "../util/AlertTopic";

export default class SportList extends Component {
    render() {
        return (
            <div className="col-12">
                <AlertTopic alertTitle="Choose Sport" />

                <div className="row">
                    {this.renderSportListItem()}
                </div>
            </div>
        )
    }

    renderSportListItem() {
        const { sportList } = this.props;

        if(!sportList) return <NotFound />;

        return sportList.map(sport => <SportListItem {...sport} key={sport.sportId} />);
    }
}
