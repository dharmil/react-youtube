import React, { Component } from 'react';
import {connect} from 'react-redux';
import './../grid.css';
import {searchYoutube} from '../actions/videos';
import {getSuggestions} from '../actions/suggestions';
import debounce from 'debounce';
import {withRouter} from 'react-router';


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {'query': ''};
    }

    onKeyUp = (e) => {
        if(e.keyCode === 13) {
            this.props.searchYoutube(this.state.query);
            this.props.history.push({pathname: "/"}); 
        }
    }

    getSuggestions = debounce((query) => {
        this.props.getSuggestions(query);
    }, 1000)

    onChangeHandler = (e) => {
        this.setState({'query': e.target.value});
        this.getSuggestions(e.target.value);
    }

    render() {

        return (<div style={{display: 'flex', flex: '7 1 0%'}}>
            <input type = "text" style = {{width: '100%'}} list = "suggestions" onChange={this.onChangeHandler} onKeyUp={this.onKeyUp} value={this.state.query} />
            <datalist id = "suggestions">
                {this.props.suggestions.map((sug, index) => <option key={index} value={sug} />)}
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
        searchYoutube: (query) => dispatch(searchYoutube(query)),
        getSuggestions: (query) => dispatch(getSuggestions(query))
    }
}

export default Search = withRouter(connect(
    matchStateToProps,
    mapDispatchToProps
)(Search))