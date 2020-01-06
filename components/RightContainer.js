import React from 'react'
import GithubNav from '../components/GithubNav'
import GithubList from '../components/GithubList'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'


const RightContainer = (store) => {

  console.log(store)

  return(
    <div className='source other-source'>
        <GithubNav></GithubNav>
        <GithubList></GithubList>
      <style jsx>{`
      .other-source {
          margin-left: 1.2rem;
      }
      .other-source {
          -ms-flex: 1 1 auto;
          flex: 1 1 auto;
      }
      `}</style>
    </div>
  )
}

// export default RightContainer

export default withRouter(connect()(RightContainer))