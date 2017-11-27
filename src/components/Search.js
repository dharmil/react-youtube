import React, { Component } from 'react';
import './../grid.css';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {'query': ''};
    }

    onChangeHandler = (e) => {
        this.setState({'query': e.target.value});
    }

    render() {
        return (<div class = "row center-xs">
            <div class="search-bar col-xs-10"><input type = "text" onChange={this.onChangeHandler} value={this.state.query} /></div>
            <input type = "submit" onSubmit={this.props.onSubmit} />
            </div>);
    }
}