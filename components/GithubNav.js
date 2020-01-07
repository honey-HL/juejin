import React,{useState, useEffect} from 'react'
import store from '../store/store'
// import { getGithubList}  from '../lib/api'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import  { getGithubList }  from '../store/github'

const categoryList = [{
    id: 1,
    category: "trending",
    name: '热门'
}, {
    id:2,
    name: '新生',
    category: "upcome"
}]

let categoryName = '热门'
const GithubNav = (store) => {

    const {requestPayload} = store

    const changeCategory = (item, store) => {
        console.log(store)
        categoryName = item.name;
        let githubData = {
            category: item.category,
            period: requestPayload.period,
            lang: requestPayload.lang,
            offset: 0,
            limit: requestPayload.limit
        }
        store.dispatch(getGithubList(githubData))
    }

    const handleGlobal = (e) => {
        if (isShowHotSelect) {
            setHotShow(false)
        }
    }

    const [isShowHotSelect, setHotShow] = useState(false)
    
    return (
        <div onClick={e => handleGlobal(e)} className='source-navbar'>
            <div className="source-box">
                <div className="source-selector multiple">
                    <div className="curr">
                        <img className="icon source-icon" src="https://e-gold-cdn.xitu.io/static/github.png?9140c37"/>
                        <div className="title" style={{color: 'rgb(0, 0, 0)'}}>GitHub</div>
                        <div className="arrow-box">
                            <img src='arrow-down.png' className="arrow-down"/>
                        </div>
                    </div>
                </div>
                <div onClick={() => setHotShow(true)} className="list-selector category-selector">
                    <div className="title">{categoryName}</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                    <ul style={{display: !isShowHotSelect ? 'none': 'block'}} className="list">
                        {
                            categoryList.map((item) => <li 
                            onClick={e => changeCategory(item, store)}
                            key ={item.id} className="item">
                                <span className="title">{item.name}</span>
                        </li>)
                        }
                        
                    </ul>
                </div>
                <div className="list-selector period-selector">
                    <div className="title">今日</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                </div>
            </div>
           <div className="lang-selector">
                <div className="curr">
                    <div className="title">JavaScript</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                </div>
           </div>
        <style jsx>{`
        }
        .list-selector .title {
            -ms-flex-positive: 1;
            flex-grow: 1;
            margin: 0 0 0 1rem;
            opacity: .8;
        }
        .list-selector .list .item:hover {
            background:#3281f7;
            color:#fff;
            opacity: 1;
        }
        .list-selector .list .item .title {
            margin: 0 0 0 1rem;
        }
        .list-selector.active .title {
            opacity: 1;
        }
        .list-selector .list .item{
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            height: 2.5rem;
        }
        .list-selector.active .list{
            display: block;
        }
        .list-selector .list{
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #f8f9fb;
            box-shadow: 0 1px 2px 0 rgba(34,42,48,.1);
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            z-index: 750;
            overflow: hidden;
            padding-left:0;
            display: block;
        }
        .lang-selector{
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -ms-flex-align: center;
            align-items: center;
            position: relative;
            margin-left: .5rem;
            height: 3.5rem;
            font-size: 1.15rem;
            color: #646c7b;
        }
        .period-selector{
            margin-left: .8rem;
        }
        .list-selector .title {
            -ms-flex-positive: 1;
            flex-grow: 1;
            margin: 0 0 0 1rem;
            opacity: .8;
        }
        .list-selector {
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
        .icon {
            margin: 0 1rem 0 .4rem;
        }
        .source-icon {
            width: 2.833rem;
            height: 2.833rem;
            border-radius: 2px;
        }
        .multiple .arrow {
            display: block;
            opacity: .8;
        }
        
        .curr .arrow {
            width: 1.5rem;
            height: 1.5rem;
            opacity: .8;
            display: none;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
            // background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiI…AgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
        }
        .multiple .curr {
            padding-right: .5rem;
        }
        .curr {
            height: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
        }
        .multiple {
            cursor: pointer;
        }
        
        .source-selector {
            position: relative;
            height: 100%;
            font-size: 1.35rem;
            font-family: Verdana,Geneva,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;
            color: #646c7b;
        }
        .source-navbar .source-box {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            height: 3.5rem;
            -ms-flex-align: center;
        }
    
        .source-navbar, .source-navbar .source-box {
            display: -ms-flexbox;
            display: flex;
            align-items: center;
        }
        `}</style>
      </div>
    )    
}
// export default GithubNav


export default withRouter(connect(
    state => ({
        requestPayload: state.github.requestPayload,
      }),
)(GithubNav))
