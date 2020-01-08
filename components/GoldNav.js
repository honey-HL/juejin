import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import  { getGoldList }  from '../store/gold'
import { goldCategoryList, orderList } from "../util/dropdown_config";
import './style/dropdown.scss'


let categoryName = '前端'
const GoldNav = (store) => {

    const {requestPayload} = store
    console.log(store)

    const changeCategory = (item, store) => {
        categoryName = item.name
        let goldData = {
            category: item.category,
            order: requestPayload.order,
            offset: 0,
            limit: 30
        }
        store.dispatch(getGoldList(goldData))
    }

    const orderByTime = (item) => {
        orderList.map(ord => {
            ord.active = false
            if ( item.order === ord.order) {
                ord.active = true
            }
        })
        let goldData = {
            category: requestPayload.category,
            order: item.order,
            offset: 0,
            limit: 30
          }
        store.dispatch(getGoldList(goldData))
    }

    const [showCategorySelect, setCategorySelect] = useState(false)

    const handleGlobal = (e) => {
        if (showCategorySelect) {
            setCategorySelect(false)
        }
    }

    return (
        <div onClick={e => handleGlobal(e)} className='source-navbar'>
            <div className="source-selector">
                <div className="curr">
                    <img className="source-icon" src="jj.svg"/>
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
            <div onClick={() => setCategorySelect(true)} className="category-box">
                <div className="category-selector">
                    <div className="title">{categoryName}</div>
                    <div className="arrow-box">
                        <img src='arrow-down.png' className="arrow-down"/>
                    </div>
                    <ul style={{display: !showCategorySelect ? 'none': 'block'}} className="list">
                        {
                            goldCategoryList.map((item, id) => <li 
                            onClick={e => changeCategory(item, store)}
                            key ={id} className="item">
                                <span className="title">{item.name}</span>
                        </li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="order-selector">
                {
                    orderList.map((item, idx) => 
                        <div key={idx} onClick={e => orderByTime(item)} className={`${item.active?'active':''} ${item.class}`}>{item.title}</div>
                    )
                }
                {/* <div className="hottest active">热门</div>
                <div onClick={e => orderByTime()} className="latest">最新</div> */}
            </div>
           
        <style jsx global>{`
        .source-icon{
            margin: 0 1rem 0 .4rem;
        }
        .latest.active:hover, .latest:hover {
            opacity: 1;
        }
        .hottest.active:hover, .hottest:hover, .latest.active:hover, .latest:hover {
            opacity: 1;
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
        .hottest.active, .latest.active {
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
        .icontu {
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

export default withRouter(connect(
    state => ({
        requestPayload: state.gold.requestPayload,
      }),
)(GoldNav))