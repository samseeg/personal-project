import React, { Component } from 'react';

import Main from '../Main';

import { connect } from 'react-redux';

class Posts extends Component {
    

    render() {
        return (
            <div className='posts_container'>
                <Main/>

                <div className='newPost'>
                    <input onChange={e => e.target.value}></input>
                </div>

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