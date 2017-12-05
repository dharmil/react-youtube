import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../grid.css';
import {searchYoutube} from '../actions/videos';
import {getSuggestions} from '../actions/suggestions';
import debounce from 'debounce';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {'query': ''};
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
    }

    getSuggestions = debounce((query) => {
        this.props.getSuggestions(query);
    }, 1000)

    onChangeHandler = (e) => {
        this.setState({'query': e.target.value});
        this.getSuggestions(e.target.value);
    }

    render() {

        return (<div className = "row center-xs">
            <div className="search-bar col-xs-10"><input type = "text" list = "suggestions" 
            onChange={this.onChangeHandler} value={this.state.query} /></div>
            <input type = "submit" onClick={this.onClick} />
            <datalist id = "suggestions">
                {this.props.suggestions.map(sug => <option value={sug} />)}
            </datalist>
            </div>);
    }
}

const matchStateToProps = state => {
    return {
        suggestions: state.ui.suggestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (query) => dispatch(searchYoutube(query)),
        getSuggestions: (query) => dispatch(getSuggestions(query))
    }
}

export default Search = connect(
    matchStateToProps,
    mapDispatchToProps
)(Search)