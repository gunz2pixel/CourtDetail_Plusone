import React, { Component } from "react";

class ImageList extends Component {

    componentDidMount() {
        $(this.refs.imageList).carousel();
    }

    render() {
        return (
            <div id="carouselImageList" ref="imageList" className="carousel slide">

                <ol className="carousel-indicators">
                    {this.renderIndicatorItem()}
                </ol>

                <div className="carousel-inner">
                    {this.renderImageListItem()}
                </div>

                <a className="carousel-control-prev pointer" data-target="#carouselImageList" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next pointer" data-target="#carouselImageList" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        )
    }

    renderImageListItem() {
        const { imageList } = this.props;

        return imageList.map(item => {
            return (
                <div className={`carousel-item ${item.imageActive}`} key={item.imageId}>
                    <img src={item.imageUrl} className="d-block w-100 rounded" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4>{item.imageDescription}</h4>                        
                    </div>
                </div>
            )
        });
    }

    renderIndicatorItem() {
        const { imageList } = this.props;

        return imageList.map((item, index) =>
            <li key={item.imageId} data-slide-to={index} className={item.imageActive} data-target="#carouselImageList" />
        );
    }
}

export default ImageList;