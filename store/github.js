// import fetch from 'isomorphic-unfetch';
import axios from 'axios'
// import getGithubList from '../lib/api'
// import fetch from 'node-fetch';

// actionType
const GET_LIST = 'INDEX/GITHUB';



// actionCreator
export const updatedGithubList = data => ({
    type: GET_LIST,
    data
})

// export const updatedGoldList = data => {
//     dispatch({
//         type: GET_LIST,
//         data
//     })
// }

// export const updatedGoldList = 

export const getGithubList = postData => { // https://extension-ms.juejin.im/resources/gold
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/github', postData)
        .then(res => {
            // console.log('res=>',res)
            const githubList = res.data.data;
            console.log(`Show data fetched. Count: ${githubList.length}`);
            dispatch(updatedGithubList(githubList))
            return githubList
        })
    }
}


const defaultState = {
    githubList: [],
}


export default (state = defaultState, action) => {
    console.log('action==>',action)
    switch(action.type){
        case GET_LIST:
            console.log('action==>',action, state)
            const newState = {
                ...state,
                githubList: action.data
            }
            return newState
        default:
            return state
    }
}