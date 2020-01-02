import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import store from '../store/store'
import { connect } from 'react-redux'
import {getGoldList} from '../store/index'
import {
  Layout, Icon,List, Input, Avatar, Button, Tooltip, Dropdown, Menu,
} from 'antd'
import { withRouter } from 'next/router'

const { Header, Content, Footer } = Layout
const Index = ({ count, add ,goldList}) => {
  console.log('14  goldList==>',goldList)
  return (
    <Layout>

        <div className='root'>
        <List
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
          <style jsx>
              {`
                .root {
                  background:#edeff1;
                }
              `}
            </style>
        </div>
    </Layout>
  )
}

Index.getInitialProps = async ({ reduxStore }) => {
   // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  //   const data = await res.json();
  console.log('state==>',reduxStore.getState())
  if (!reduxStore.getState().index.goldList.length) {
    const goldList = await reduxStore.dispatch(getGoldList())
    console.log('46==goldList',goldList)
    return {
      goldList
    }
  }
  }

// export default 

export default withRouter(
  connect(
  state => ({goldList: state.index.goldList}),
  {getGoldList}
)(Index))