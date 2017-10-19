import axios from 'axios';

const initialState = {
    user: {},
    posts: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_POSTS = 'GET_POSTS';
const HIDE_POSTS = 'HIDE_POSTS';

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function catClick(postId) {
    const post_info = axios.get(`/main/category/${postId}`)
        .then(response => {
            // console.log(response.data)
            return response.data
        })
    return {
        type: GET_POSTS,
        payload: post_info
    }
}

export function catButt() {
    const hide_posts = []

    return {
        type: HIDE_POSTS,
        payload: hide_posts
    }
}


export default function reducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })

        case GET_POSTS + '_FULFILLED':
            // console.log(action.payload)
            return {
                posts: action.payload
            }

            case HIDE_POSTS:
            return {
                posts: action.payload
            }

        default:
            return state;
    }
}