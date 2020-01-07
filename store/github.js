// import fetch from 'isomorphic-unfetch';
import axios from 'axios'
// import getGithubList from '../lib/api'
// import fetch from 'node-fetch';

// actionType
const GET_LIST = 'INDEX/GITHUB';



// actionCreator
export const updatedGithubList = obj => ({
    type: GET_LIST,
    ...obj
})

// export const updatedgithubList = data => {
//     dispatch({
//         type: GET_LIST,
//         data
//     })
// }

// export const updatedgithubList = 

export const getGithubList = postData => { // https://extension-ms.juejin.im/resources/gold
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/github', postData)
        .then(res => {
                const data = res.data.data;
                console.log(`Show data fetched. Count: ${data.length}`);
                let githubList;
                if ((postData.category === "upcome" || postData.category === "trending") && postData.offset === 0) { // 点 最新 热门
                    githubList = data
                } else {
                    const old_data = getState().github.githubList;
                    githubList = old_data.concat(data)
                }
                let obj = {
                    githubList: githubList,
                    requestPayload: postData
                }
                dispatch(updatedGithubList(obj))
            return githubList
        })
    }
}


const defaultState = {
    githubList: [],
    requestPayload: {}
}


export default (state = defaultState, action) => {
    console.log('action==>',action)
    switch(action.type){
        case GET_LIST:
            console.log('action==>',action, state)
            const newState = {
                ...state,
                githubList: action.githubList,
                requestPayload: action.requestPayload
            }
            return newState
        default:
            return state
    }
}