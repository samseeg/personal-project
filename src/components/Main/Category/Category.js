import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { catClick, catButt } from '../../../ducks/users';
import Posts from '../Posts/Posts';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            catVisibility: true
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

    catMap(item) {
        this.props.catClick(item.cat_id)
        this.setState({catVisibility: false})
    }

    catPush() {
        this.props.catButt()
        this.setState({catVisibility: true})
    }



    render() {
        return (
            <div className='cat_wrapper'>
                <div className='cat_title' onClick={() => this.catPush()}>
                    Categories
                </div>

                {this.state.catVisibility ?

                    <div className='cat_container'>
                        {this.state.categories.map((item, i) => {
                            // console.log(i)
                            return (
                                <div className='cat' key={i} onClick={() => this.catMap(item)}>{item.cat_name}</div>
                            )
                        })}
                    </div>

                    : null}

                <Posts />
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
    catClick: catClick,
    catButt: catButt
})(Category);