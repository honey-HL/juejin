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
        `}</style>
      </div>
    )
}

export default LeftContainer