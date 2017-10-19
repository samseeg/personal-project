import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVisibility: false
        }
    }

    userPost(user_id) {
        axios.get(`/user/${user_id}`)
            .then(response => {
                console.log(response)
                return response
            })
    }

    render() {
        return (
            <div className='posts_container'>
                {this.state.inputVisibility ?
                <div className='newPost'>
                    <input onChange={e => e.target.value}></input>
                </div>
                    : null}

                {this.props.posts.map((item, i) => {
                    // console.log(item)
                    return (
                        <div key={i}>
                            <div className='posts' key={i}>

                                <div className='user_info'>
                                    {item.user_name}
                                </div>

                                <div className='post'>
                                    {item.op}
                                </div>
                            </div>

                        </div>
                    )
                })}
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