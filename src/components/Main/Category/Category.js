import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            posts: []
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

    catClick(postId) {
        axios.get(`/main/category/${postId}`)
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
    }



    render() {
        return (
            <div className='cat_wrapper'>
                <div className='cat_title'>
                    Categories
                </div>
                <div className='cat_container'>
                    {this.state.categories.map((item, i) => {
                        // console.log(i)
                        return (
                            <div className='cat' key={i} onClick={() => this.catClick(item.cat_id)}>{item.cat_name}</div>
                        )
                    })}
                </div>
                <div className='posts_container'>
                    {this.state.posts.map((item, i) => {
                        console.log(item)
                        return (
                            <div className='posts' key ={i}>{item.op}</div>
                        )
                    })}
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return 
}

export default Category;