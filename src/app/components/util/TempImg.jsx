import React from "react";

const TempImg = (props) => {
    const
        { width = 200, height = 120, bgColor =  "9e9e9e", textColor = "ffffff"} = props,
        url = `http://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}`;

    return (
        <img className={props.className} src={url} alt={props.alt} />
    );
}

export default TempImg