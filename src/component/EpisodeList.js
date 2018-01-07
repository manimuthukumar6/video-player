import React, { Component } from 'react';
import PropTypes from 'prop-types'

class EpisodeList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.body}</h1>
            </div>
        );
    }
}

EpisodeList.propTypes = {
    body: PropTypes.node
};

export default EpisodeList;