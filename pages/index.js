import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import store from '../store/store'
import { connect } from 'react-redux'
import {getGoldList} from '../store/gold'
import {getGithubList} from '../store/github'
import {Layout,List,} from 'antd'
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import { withRouter } from 'next/router'

const { Header, Content, Footer } = Layout
const Index = ({ goldList, githubList }) => {
  return (
    <div className='root'>
      <LeftContainer goldList={goldList}></LeftContainer>
      {/* <div>dwqwd</div> */}
      <RightContainer githubList={githubList}></RightContainer>
    {/* <List
        itemLayout="horizontal"
        dataSource={goldList}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
            />
          </List.Item>
        )}
      /> */}
      {/* <div className="entry-list">
        <List 
          className="list-container"
            // style={{transform: 'translate(0px, -80px) translateZ(0px)'}}
            itemLayout="horizontal"
            dataSource={goldList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                />
              </List.Item>
            )}
          />
      </div> */}
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
        .entry-list {
          position: relative;
          padding-right: .8rem;
          flex: 1 1 auto;
      }
        html,body,#__next{
          margin: 0;
          padding: 0;
          height:100%;
          overflow: hidden;
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

Index.getInitialProps = async ({ reduxStore }) => {
  if (!reduxStore.getState().gold.goldList.length && !reduxStore.getState().github.githubList.length) {
    const goldList = await reduxStore.dispatch(getGoldList())
    const githubList = await reduxStore.dispatch(getGithubList())
    console.log('index.js-----------')
    return {
      goldList: goldList,
      githubList: githubList
    }
  }
}

export default Index

// export default withRouter(
//   connect(
//   state => ({goldList: state.index.goldList}),
//   {getGoldList}
// )(Index))