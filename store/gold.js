import axios from 'axios'



const GET_LIST = 'INDEX/GOLD';



// actionCreator
const updatedGoldList = data => ({
    type: GET_LIST,
    data
})


export const getGoldList = postData => { // https://extension-ms.juejin.im/resources/gold
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/gold', postData)
        .then(res => {
            const old_data = getState().gold.goldList;
            const data = res.data.data;
            console.log(`Show data fetched. Count: ${data.length}`);
            const goldList = old_data.concat(data)
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
            const newState = {
                ...state,
                goldList: action.data
            }
            return newState
        default:
            return state
    }
}