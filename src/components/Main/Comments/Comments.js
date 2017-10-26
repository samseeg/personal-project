import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Main from '../Main';

import { postClick, emptyPosts, commentsPull } from '../../../ducks/users';

import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: {},
            comment: ''
        }
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        var par_id = this.props.match.params.id;

        this.props.emptyPosts()
        this.props.postClick(par_id)
        this.props.commentsPull(par_id)

        // console.log(this.props.history)

    }

    submit(op_comment, op_id, user_id) {
        axios.post('/comment', {
            op_comment,
            op_id,
            user_id
        })
            .then(response => {

                this.props.commentsPull(this.props.match.params.id);
            })

        this.setState({
            comment: ''
        })
    }


    render() {

        return (
            <div className='com_wrapper'>
                <Main />

                <div>
                <Link to={`/categories`} className='cat_title link'><div className='cat_title' onClick={() => this.props.emptyPosts()}>
                        Categories
                </div>
                </Link>
                </div>
                
                <hr className='cat_sep'/>
                <div>
                    {this.props.posts.map((item, i) => {
                        return (
                            <div key={i} className='outer_post1'>
                                <div className='posts1' key={i}>
                                    <div className='user_info'>
                                        <img className='avatar' src={item.img} alt='avatar' />
                                        <div className='user_name'>
                                            {item.user_name}
                                        </div>
                                    </div>
                                    <div className='post1'>
                                        {item.op}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='newPost'>

                    {/* input for comments */}
                    <input type='text' value={this.state.comment} onChange={e => {
                        // console.log(this.state.comment)
                        this.setState({
                            comment: e.target.value
                        })
                    }} placeholder='Make a comment' />

                    {this.state.comment ?

                        < div className='subButt' onClick={() => {
                            this.submit(this.state.comment, this.props.match.params.id, this.props.currentUser.user_id)
                        }}>Submit</div>
                        : null}

                </div>

                <div>
                    <div>
                        Comments
                        </div>
                    {this.props.comments.map((item, i) => {
                        // console.log(item)
                        return (
                            <div key={i} className='outer_comments'>
                                <div key={i} className='comments'>
                                    <div className='user_info'>
                                        <img className='avatar' src={item.img} alt='avatar' />
                                        <div className='user_name'>
                                            {item.user_name}
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        {item.op_comment}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        )
    }


}




function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, {
    postClick: postClick,
    emptyPosts: emptyPosts,
    commentsPull: commentsPull
})(Comments);