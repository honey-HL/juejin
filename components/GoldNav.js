import React from 'react'
import Link from 'next/link'


const GoldNav = () => (
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
       
    <style jsx>{`
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
            height:42px;
            background-color: #fff;
            border-radius: 2px;
            z-index: 250;
            margin-right: .8rem!important;
            margin: 0 0 1.2rem;
            position: absolute;
            width: 100%;
            top: 0;
            // background:red;
        }
        .source .source-navbar {
            margin: 0 0 1.2rem;
      }
    `}</style>
  </div>
)

export default GoldNav
