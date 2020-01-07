import axios from 'axios'



const GET_LIST = 'INDEX/GOLD';



// actionCreator
const updatedGoldList = obj => ({
    type: GET_LIST,
    ...obj
})


export const getGoldList = postData => { // https://extension-ms.juejin.im/resources/gold
    return (dispatch, getState, $axios) => { // https://api.tvmaze.com/search/shows?q=batman
        return axios.post('http://localhost:3008/api/resources/gold', postData)
        .then(res => {
                const data = res.data.data;
                console.log(`Show data fetched. Count: ${data.length}`);
                let goldList;
                if ((postData.order === 'time' || postData.order === "heat") && postData.offset === 0) { // 点 最新 热门
                    goldList = data
                } else {
                    const old_data = getState().gold.goldList;
                    goldList = old_data.concat(data)
                }
                let obj = {
                    goldList: goldList,
                    requestPayload: postData
                }
                dispatch(updatedGoldList(obj))
            return goldList
        })
    }
}


const defaultState = {
    goldList: [],
    requestPayload: {}
}


export default (state = defaultState, action) => {
    switch(action.type){
        case GET_LIST:
            const newState = {
                ...state,
                requestPayload: action.requestPayload,
                goldList: action.goldList
            }
            return newState
        default:
            return state
    }
}