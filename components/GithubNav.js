import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import  { getGithubList }  from '../store/github'
import './style/dropdown.scss'
import { periodList, githubCategoryList } from "../util/dropdown_config";




let categoryName = '热门'
let periodName = '今日'
const GithubNav = (store) => {

    const {requestPayload} = store

    const changePeriod = (item, store) => {
        periodName = item.name;
        let githubData = {
            category: requestPayload.category,
            period: item.period,
            lang: requestPayload.lang,
            offset: 0,
            limit: requestPayload.limit
        }
        store.dispatch(getGithubList(githubData))
    }

    const changeCategory = (item, store) => {
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
        if (showPeriodSelect) {
            setPeriodSelect(false)
        }
    }

    const [isShowHotSelect, setHotShow] = useState(false)
    const [showPeriodSelect, setPeriodSelect] = useState(false)
    
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
                            githubCategoryList.map((item) => <li 
                            onClick={e => changeCategory(item, store)}
                            key ={item.id} className="item">
                                <span className="title">{item.name}</span>
                        </li>)
                        }
                    </ul>
                </div>
                <div onClick={() => setPeriodSelect(true)} className="list-selector period-selector">
                    <div className="title">{periodName}</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                    <ul style={{display: !showPeriodSelect ? 'none': 'block'}} className="list">
                        {
                            periodList.map((item) => <li 
                            onClick={e => changePeriod(item, store)}
                            key ={item.id} className="item">
                                <span className="title">{item.name}</span>
                        </li>)
                        }
                    </ul>
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
