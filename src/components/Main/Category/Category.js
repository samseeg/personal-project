import React, { Component } from 'react';
import axios from 'axios';

import Main from '../Main';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {getCurrentUser} from '../../../ducks/users';

import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
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
    }



    render() {
        return (
            <div className='cat_wrapper'>
                <Main/>

                    <div className='cat_container'>
                        {this.state.categories.map((item, i) => {
                            // console.log(item)
                            return (
                                <Link key={i} className='link' to={`/categories/${item.cat_id}`}><div className='cat' key={i} >{item.cat_name}</div>
                                </Link>
                            )
                        })}
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
    getCurrentUser: getCurrentUser
})(Category);