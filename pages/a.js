import styled from 'styled-components'
import moment from 'moment'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`
const A = ({ name }) => {
  const time = moment(Date.now() - 60 * 1000).fromNow()
  return (
    <>
      <Title>这是A页面, 时间差是{time}</Title>
    </>
  )
}

A.getInitialProps = async ctx => {
    const moment = await import('moment')
    const timeDiff = moment.default(Date.now() - 60 * 1000).fromNow()
    return { timeDiff }
  }

export default A