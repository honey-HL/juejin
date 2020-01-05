import axios from 'axios'

export const getGithubList = postData => { // https://extension-ms.juejin.im/resources/gold
    return axios.post('http://localhost:3008/api/resources/github', postData)
        .then(res => {
            const githubList = res.data.data;
            console.log(`Show data fetched. Count: ${githubList.length}`);
            // dispatch(updatedGoldList(githubList))
            return githubList
        })
}