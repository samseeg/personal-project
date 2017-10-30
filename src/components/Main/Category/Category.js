import React, { Component } from 'react';
import axios from 'axios';

import Main from '../Main';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentUser, emptyPosts } from '../../../ducks/users';

import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            newCat: ''
        }
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        axios.get('/categories')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    categories: response.data
                })
            })

        this.props.getCurrentUser()

        // setTimeout(() => { console.log(this.props.currentUser) }, 2000)
    }


    submit(newCat) {
        axios.post('/categorypost', {
            newCat
        })
            .then(response => {
                axios.get('/categories')
                .then(response => {
                    // console.log(response.data)
                    this.setState({
                        categories: response.data
                    })
                })
            })

        this.setState({
            newCat: ''
        })
    }



    render() {
        return (
            <div className='cat_wrapper'>
                <Main />

                <div>
                    <Link to='/categories' className='cat_title link'><div className='cat_title' onClick={() => this.props.emptyPosts()}>
                        Categories
                </div>
                    </Link>
                </div>

                <hr className='cat_sep' />
{/* 
                {this.props.currentUser.king ?
                    <div>

                        <textarea type='text' value={this.state.newCat} onChange={e => {
                            // console.log(this.state.newCat)
                            this.setState({
                                newCat: e.target.value
                            })
                        }} placeholder='Add new Category' />

                        <div className='subButt' onClick={() => {
                            this.submit(this.state.newCat)
                        }}>Submit</div>
                    </div>
                    : null
                } */}

                <div className='cat_container'>
                    {this.state.categories.map((item, i) => {
                        // console.log(item)
                        return (
                            <div key={i}>
                            <Link key={i} className='link' to={`/categories/${item.cat_id}`}><div className='cat' key={i} >{item.cat_name}</div>
                            </Link>
{/*                             
                            {this.props.currentUser.king ?
                            <div>
                                delete
                                </div>
                                : null
                            } */}

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {
    getCurrentUser: getCurrentUser,
    emptyPosts: emptyPosts
})(Category);