// import fetch from 'isomorphic-unfetch';
import axios from 'axios'
// import fetch from 'node-fetch';

// actionType
const GET_LIST = 'INDEX/GOLD';



// actionCreator
const updatedGoldList = data => ({
    type: GET_LIST,
    data
})


export const getGoldList = server => { // https://extension-ms.juejin.im/resources/gold
    let postData = {
        category: "frontend",
        order: "heat",
        offset: 0,
        limit: 30
    }
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/gold', postData)
        .then(res => {
            // console.log('res=>',res)
            const goldList = res.data.data;
            console.log(`Show data fetched. Count: ${goldList.length}`);
            dispatch(updatedGoldList(goldList))
            return goldList
        })
    }
}


const defaultState = {
    goldList: [],
}
export default (state = defaultState, action) => {
    switch(action.type){
        case GET_LIST:
            // console.log('action==>',action, state)
            const newState = {
                ...state,
                goldList: action.data
            }
            return newState
        default:
            return state
    }
}