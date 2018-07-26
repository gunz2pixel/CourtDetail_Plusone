import React from "react";
import { Link } from "react-router-dom";
import TempImg from "../util/TempImg";

const CourtListItem = (props) => {
    return (
        <div className="col-md-3 mb-3">
            <Link to={`/app/court/detail/${props.courtId}`} className="text-decoration-none">
                <div className="card border border-secondary shadow">
                    <TempImg height={200} alt={props.courtName} className="card-img-top" />
                    <div className="card-body">
                        <h6 className="card-text">{props.courtName}</h6>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CourtListItem