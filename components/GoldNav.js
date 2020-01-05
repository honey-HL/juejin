import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'


const GoldNav = (props) => {
    console.log(props)
    return (
        <div className='source-navbar'>
            <div className="source-selector">
                <div className="curr">
                    <img className="icon source-icon" src="jj.svg"/>
                    <div className="title" style={{color: 'rgb(4, 74, 171)',}}>掘金</div>
                    <div className="arrow" ></div>
                </div>
                {/* <ul className="source-list" >
                    <li className="item active" >
                        <img className="icon source-icon" src=""/>
                        <span className="title" >掘金</span>
                    </li>
                </ul> */}
            </div>
           
        <style jsx global>{`
        .curr {
            height: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
        }
            .source-selector {
                position: relative;
                height: 100%;
                font-size: 1.35rem;
                font-family: Verdana,Geneva,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;
                color: #646c7b;
            }
            .source-navbar, .source-navbar .source-box {
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                min-height:42px;
                background-color: #fff;
                border-radius: 2px;
                z-index: 250;
                margin-right: .8rem!important;
            }
        `}</style>
      </div>
    )    
}
// export default GoldNav

export default withRouter(
    connect(
    // state => ({
    //     goldList: state.gold.goldList,
    //     githubList: state.github.githubList
    // })
  )(GoldNav))