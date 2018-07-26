import React, { Component } from "react";
import { connect } from "react-redux";
import { onCourtSearch } from "../../actions/Court";

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            value: null
        }

        this.onSubmitSearch = this.onSubmitSearch.bind(this);
    }

    render() {
        return (
            <form className="row" onSubmit={this.onSubmitSearch}>
                <div className="col-md-3 form-inline justify-content-end">
                    <label htmlFor="txtSearch">Football</label>
                </div>
                <div className="col-md-9">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">&#x1f50d;</span>
                        </div>
                        <input type="text" id="txtSearch" className="form-control" placeholder="Search" autoComplete="off"
                            onInput={(event) => this.setState({ value: event.target.value })}
                        />
                    </div>
                </div>
            </form>
        )
    }

    onSubmitSearch(event) {
        event.preventDefault();        
        this.props.onCourtSearch(this.state.value);
    }
}



export default connect(null, { onCourtSearch })(SearchBar);