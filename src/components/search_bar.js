import React, { Component } from 'react';
// { Component } is means import React.js and pull out Component proeprty and assign it to Component variable.

class SearchBar extends Component {

    render() {
        return <input onChange={event => console.log(event.target.value)}/>;
    }

}

export default SearchBar;