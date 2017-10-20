import React, { Component } from 'react';
import axios from 'axios';

import Main from '../Main';

import { connect } from 'react-redux';
import { catClick } from '../../../ducks/users';
import {Link} from 'react-router-dom';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('/main/category')
            .then(response => {
                // console.log(response.data)
                this.setState({
                    categories: response.data
                })
            })
    }



    render() {
        return (
            <div className='cat_wrapper'>
                <Main/>

                    <div className='cat_container'>
                        {this.state.categories.map((item, i) => {
                            // console.log(item)
                            return (
                                <Link key={i} className='link' to='/category/posts'><div className='cat' key={i} onClick={() => this.props.catClick(item.cat_id)}>{item.cat_name}</div>
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
    catClick: catClick
})(Category);