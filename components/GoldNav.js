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
            <div className="category-box">
                <div className="category-selector">
                    <div className="title">前端</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                </div>
            </div>
            <div className="order-selector">
                <div className="hottest active">热门</div>
                <div className="latest">最新</div>
            </div>
           
        <style jsx global>{`
        .hottest, .latest {
            display: inline-block;
            margin: 0 .1rem;
            width: 3.6rem;
            height: 3.5rem;
            font-size: 1.25rem;
            text-align: center;
            line-height: 3.5rem;
            color: #646c7b;
            opacity: .3;
            cursor: pointer;
        }
        .hottest, .latest {
            display: inline-block;
            margin: 0 .1rem;
            width: 3.6rem;
            height: 3.5rem;
            font-size: 1.25rem;
            text-align: center;
            line-height: 3.5rem;
            color: #646c7b;
            opacity: .3;
            cursor: pointer;
        }
        .hottest.active {
            opacity: .8;
        }
        .source-navbar .order-selector {
            margin-right: .8rem;
        }
        .curr .title {
            margin: 0 1rem 0 0;
            opacity: 1;
        }
        .category-selector .title{
            -ms-flex-positive: 1;
            flex-grow: 1;
            margin: 0 0 0 1rem;
            opacity: .8;
        }
        .category-selector {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            width: 8rem;
            height: 2.5rem;
            border-radius: 2px;
            color: #646c7b;
            background-color: #f8f9fb;
            cursor: pointer;
        }
        .category-box {
            -ms-flex-positive: 1;
            flex-grow: 1;
        }
        .icon {
            margin: 0 1rem 0 .4rem;
        }
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
            }
            .source-navbar {
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