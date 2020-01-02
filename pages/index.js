import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import axios from 'axios'

const Index = ({ }) => (
  <>
    <span className="link">这是首页面</span>
    <style jsx>
      {`
        .link {
          color: red;
        }
      `}
    </style>
  </>
)

Index.getInitialProps = async ctx => {
  // console.log('ctx==>',ctx)
  let postData = {
    category: "frontend",
    order: "heat",
    offset: 0,
    limit: 30
  }
  axios.post("/api/resources/gold", postData)
  .then(res => {
      console.log('res', res)
      const {data} = res.data;
      console.log('24 list=>',data)
      // dispatch(changeList(data))
  })
}

export default Index