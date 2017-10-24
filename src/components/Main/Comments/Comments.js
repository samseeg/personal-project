import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Main from '../Main';

import { postClick } from '../../../ducks/users';

import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            comment: ''
        }
    }

    componentDidMount() {
        axios.get('currentuser')
            .then(response => {
                this.setState({
                    userId: response.data[0].user_id
                })
            })

        this.props.postClick(this.props.match.params.id)

        // setTimeout(() => { console.log(this.props.posts[0].op) }, 500)

    }



    render() {

        return (
            <div className='com_wrapper'>
                <Main />

                {this.props.posts.map((item, i) => {
                    return (
                        <div className='posts' key={i}>
                        <div className='post'>
                                {item.op}
                            </div>
                            </div>
                    )
                })}

                <div className='comment'>

                </div>
            </div>
        )
    }


}




function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {
    postClick: postClick
})(Comments);