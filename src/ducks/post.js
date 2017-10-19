import axios from 'axios';

const initialState = {
    posts: []
}

const GET_POSTS = 'GET_POSTS';

export function catClick(postId) {
    const post = axios.get(`/main/category/${postId}`)
        .then(response => {
            // console.log(response)
                return response.data
            })
            return {
                type: GET_POSTS,
                payload: post
            }
        }




export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: [action.payload]
            }
        default:
            return state;
    }
}