import React from "react";
import { Link } from "react-router-dom";
import TempImg from "../util/TempImg";

export default (props) => {
    return (
        <div className="col-md-3 mb-3">
            <Link to={`/app/court/search/${props.sportId}`} className="text-decoration-none">
                <div className="card border border-danger">
                    <TempImg alt={props.sportName} width={80} height={80} bgColor="e74c3c" />
                    <div className="card-body">
                        <h6 className="card-text">{props.sportName}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}