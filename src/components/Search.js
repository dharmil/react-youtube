import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../grid.css';
import {searchYoutube} from '../actions/videos';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {'query': ''};
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    onChangeHandler = (e) => {
        this.setState({'query': e.target.value});
    }

    render() {
        return (<div className = "row center-xs">
            <div className="search-bar col-xs-10"><input type = "text" onChange={this.onChangeHandler} value={this.state.query} /></div>
            <input type = "submit" onClick={this.onClick} />
            </div>);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (query) => dispatch(searchYoutube(query))
    }
}

export default Search = connect(
    null,
    mapDispatchToProps
)(Search)