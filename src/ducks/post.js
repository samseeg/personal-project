import axios from 'axios';

const initialState = {
    posts: []
}

const GET_POSTS = 'GET_POSTS';



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
}