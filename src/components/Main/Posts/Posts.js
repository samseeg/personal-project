import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Posts extends Component {
   
    render() {
        return (
            <div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);