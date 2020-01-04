import Link from 'next/link'
import CenterContainer from './CenterContainer'
import HeaderContainer from './HeaderContainer'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

export default ({ children }) => (
  <Layout>
    <header className="big-header">
      <HeaderContainer></HeaderContainer>
    </header>
    <Content>
      <CenterContainer>
        {children}
      </CenterContainer>
    </Content>
    <style jsx global>
      {`
      .ant-layout-content{
        // background: #FC0;
        width: 100%;
        overflow: auto;
        top:54px;
        position: absolute;
        z-index: 10;
        bottom: 0;
        // height: calc(100% - 54px);
        // background: pink;
      }
      .big-header  {
        height: 54px;
        line-height: 54px;
        width: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
        text-align: center;
      }
       html,body,#__next,.ant-layout{
        margin: 0;
        padding: 0;
        // height:100%;
      }
      `}
    </style>
  </Layout>
)