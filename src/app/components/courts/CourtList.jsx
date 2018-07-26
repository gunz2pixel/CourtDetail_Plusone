import React, { Component } from "react";
import NotFound from "../util/NotFound";
import CourtListItem from "./CourtListItem";
import { connect } from "react-redux";

class CourtList extends Component {
    render() {
        return (
            <div className="col-12 mt-3">

                <div className="row">
                    {this.renderCourtListItem()}
                </div>

            </div>
        )
    }

    renderCourtListItem() {
        const { courtList } = this.props;

        if (!courtList || courtList.length === 0) return <NotFound />

        return courtList.map(court => <CourtListItem {...court} key={court.courtId} />)
    }
}

function mapStateToProps({ courtList }) {
    return { courtList }
}


export default connect(mapStateToProps, null)(CourtList);