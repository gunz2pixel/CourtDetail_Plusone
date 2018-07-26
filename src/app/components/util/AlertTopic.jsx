import React from "react";

export default (props) => {
    const { alertStyle = "alert-light", alertTitle = "Title" } = props;

    return (
        <div className={`alert alert-topic ${alertStyle} text-center text-uppercase border`}>
            <h1 className="topic">{alertTitle}</h1>
        </div>
    )
}