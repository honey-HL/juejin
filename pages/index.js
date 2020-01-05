import { connect } from 'react-redux'
import {getGoldList} from '../store/gold'
import {getGithubList} from '../store/github'
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import { withRouter } from 'next/router'


const Index = (props) => { // {goldList, githubList, reduxStore}

  console.log(props)
  console.log(props.store.getState())

  return (
    <div className='root'>
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
          <script type="javascript/text">
             {
              //  console.log(window)
              //  console.log(document.getElementsByClassName('list-container')[0])
             }
          </script>
      <style jsx global>
        {`
        .source {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          cursor: default;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .big-header{
          position:absolute;
          top:0;
        }
        .list-container {
          overflow-y:scroll;
        }
        .ant-layout {
            display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          position: relative;
          width: 100%;
          // height: 100%;
          min-height: 100%;
          background-color: #eceff1;
        }
        html,body,#__next{
          margin: 0;
          padding: 0;
          height:100%;
          overflow: hidden;
          font-size:12px;
        }
          html {
            font-size: 12px;
            font-family: PingFang SC,-apple-system,Arial,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
          .root {
            display:flex;
            flex-direction:row;
            background:#edeff1;
            width: 100%;
          }

          .ant-layout-header {
            padding-left: 0;
            padding-right: 0;
          }
        `}
      </style>
    </div>
  )
}

Index.getInitialProps = async ({reduxStore}) => {
  // console.log('props===>',props)
  // const store = reduxStore
    let githubData = {
      category: "trending",
      period: "day",
      lang: "javascript",
      offset: 0,
      limit: 30
    }
    let goldData = {
      category: "frontend",
      order: "heat",
      offset: 0,
      limit: 30
  }
  if (!reduxStore.getState().gold.goldList.length && !reduxStore.getState().github.githubList.length) {
    const goldList = await reduxStore.dispatch(getGoldList(goldData))
    const githubList = await reduxStore.dispatch(getGithubList(githubData))
    console.log('index.js-----------')
    return {
      goldList: goldList,
      githubList: githubList
    }
  }
}

// export default withRouter(
//   connect(
//   state => ({
//     goldList: state.gold.goldList,
//     githubList: state.github.githubList
//   })
// )(Index))


// export default
//   connect(
//   state => ({
//     goldList: state.gold.goldList,
//     githubList: state.github.githubList
//   })
// )(Index)

export default Index