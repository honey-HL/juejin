import React from 'react'
// import Link from 'next/link'
import {getGoldList} from '../store/gold'
import store from '../store/store'
const {reduxStore} = store;

const GithubList = ({ githubList }) => {
    return (
  
        <div className="github-scroll-container">
            <ul className="list github-filled">
                {
                    githubList.map((item, index) => <li key={index} className="item-row">

                       <div className="item-box">
                           <div className="item">
                               <div className="repo-content">
                                   <div className="repo-header">
                                       <h2 className="title">
                                           <a href={`${item.url}`} className="title-text" target="_blank">
                                                <span className="author">{item.username}</span>
                                                <span className="divider">/</span>
                                                <span className="name">{item.reponame}</span>
                                           </a>
                                       </h2>
                                       
                                   </div>
                                   <div className="repo-desc">
                                        <div className="desc" title={item.description}>{item.description}</div>
                                   </div>
                                   <div className="repo-meta">
                                        <span className="star">
                                            <i className="icon ion-android-star"></i>{item.starCount}
                                        </span>
                                        <span className="fork">
                                            <i className="icon ion-fork-repo"></i> {item.forkCount}
                                        </span>
                                        <span className="lang">
                                            <i className="icon lang-color" style={{backgroundColor: 'rgb(241, 224, 90)'}}></i>
                                            <span>{item.lang}</span>
                                        </span>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </li>)
                }
            </ul>

          <style jsx>{`
          
          .repo-meta .lang .lang-color{
            display: -ms-inline-flexbox;
            display: inline-flex;
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
          .repo-meta>span:not(:last-child) {
                margin-right: 25px;
            }
          .repo-meta {
            margin-top: 15px;
            font-size: 1.167rem;
            font-weight: 700;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
          @media (max-width: 1380px) {
            .repo-desc {
                margin-right: 10px;
            }
          }
          
          .repo-desc {
              color: #2e3135;
              font-size: 14px;
              line-height: 20px;
              height: 60px;
              margin-right: 20px;
              color: #333;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              overflow: hidden;
          }
          li {
              list-style:none;
          }
          .repo-content .repo-header .title .title-text {
            color: inherit;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
          .repo-content .repo-header .title {
            display: -ms-flexbox;
            display: flex;
            margin: 0;
            padding: 0;
            font-size: 1.334rem;
            font-weight: 600;
            line-height: 1.2;
            color: #0366d6;
            overflow: hidden;
            margin-right: 20px;
        }
          .repo-content .repo-header {
            margin-bottom: 8px;
        }
          .repo-content{
            -ms-flex-positive: 1;
            flex-grow: 1;
            width: 0;
            overflow: hidden;
        }
          .item {
            display: -ms-flexbox;
            display: flex;
            position: relative;
            padding: 24px 30px;
            font-family: PingFang SC,-apple-system,Arial,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;
            box-sizing: border-box;
            cursor: pointer;
        }
          .list .item-row .item-box {
            position: relative;
            border-radius: 2px;
            background-color: #fff;
        }
          @media (min-width: 1300px) {
            .list .item-row {
                width: calc((100% - 1.6rem * 1) / 2);
            }
          }
         
          .list .item-row {
              position: relative;
              margin: 0 .8rem .8rem 0;
          }
          .list{
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
          }
             .github-scroll-container .list.failed, .github-scroll-container .list.github-filled, .github-scroll-container .list.syncing {
                position: relative;
                padding-bottom: 6rem;
            }
            .github-filled {
                padding-left:0;
            }
            .github-scroll-container{
                height: calc(100% - 54px);
                position: absolute;
                top: 54px;
                bottom: 0;
                overflow: auto;
                width:inherit;
            }
          `}</style>
        </div>
      )
}


export default GithubList
