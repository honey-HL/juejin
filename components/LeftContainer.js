import React from 'react'
import GoldNav from '../components/GoldNav'
import GoldList from '../components/GoldList'


const LeftContainer = ({ goldList }) => {
    return(
      <div className='source gold-source'>
    
        <GoldNav></GoldNav>
        <GoldList goldList={goldList}></GoldList>
        <style jsx>{`
        .gold-source {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: 33.97rem;
            back
        }
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
        `}</style>
      </div>
    )
}

export default LeftContainer