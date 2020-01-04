// import fetch from 'isomorphic-unfetch';
import axios from 'axios'
// import fetch from 'node-fetch';

// actionType
const GET_LIST = 'INDEX/GITHUB';



// actionCreator
const updatedGoldList = data => ({
    type: GET_LIST,
    data
})


export const getGithubList = server => { // https://extension-ms.juejin.im/resources/gold
    let postData = {
        category: "trending",
        period: "day",
        lang: "javascript",
        offset: 0,
        limit: 30
    }
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/github', postData)
        .then(res => {
            // console.log('res=>',res)
            const githubList = res.data.data;
            console.log(`Show data fetched. Count: ${githubList.length}`);
            dispatch(updatedGoldList(githubList))
            return githubList
        })
    }
}


const defaultState = {
    githubList: [],
}


export default (state = defaultState, action) => {
    switch(action.type){
        case GET_LIST:
            // console.log('action==>',action, state)
            const newState = {
                ...state,
                githubList: action.data
            }
            return newState
        default:
            return state
    }
}