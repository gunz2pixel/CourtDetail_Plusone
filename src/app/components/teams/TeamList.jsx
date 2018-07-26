import React, { Component } from "react";

class TeamList extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" style={{ overflow : 'hidden'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Team List</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Real Madrid Team</h5>
                                    <small>20.00 - 21.00</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Join us and kick-off</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Liverpool Team</h5>
                                    <small>20.00 - 21.00</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Join us and kick-off</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Chelsea Team</h5>
                                    <small>20.00 - 21.00</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Join us and kick-off</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Barcelona Team</h5>
                                    <small>20.00 - 21.00</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Join us and kick-off</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Brayen Munich Team</h5>
                                    <small>20.00 - 21.00</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Join us and kick-off</small>
                                </a>
                                </div>
                            </div>
                        </div>
                
                        <div className="row mt-4">
                            <div className="col">
                                <button type="button" class="btn btn-outline-dark btn-lg">Create my team.</button>&nbsp;&nbsp;&nbsp;
                                <button type="button" class="btn btn-outline-success btn-lg">Chat</button>
                            </div>
                       
                        </div>

           
                </div>
            </div>
        )
    }
}

export default TeamList;