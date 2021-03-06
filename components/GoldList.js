import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import  { getGoldList }  from '../store/gold'


var _container;
var num = 0;
const GoldList = (store) => {
  // let top = false;
  // const [offset, setOffset] = useState(!top? 30 : 0)
  console.log(store)
  const {requestPayload} = store
  if ((requestPayload.order === 'time' || requestPayload.order === 'heat') && requestPayload.offset === 0) {
    console.log(_container)
    _container && (_container.scrollTop = 0)
    num = 0;
    // top = true
    // setOffset(0)
  }

  const _onScrollEvent = (e, _container) => {
    const {requestPayload} = store
    console.log(_container.scrollHeight)
    console.log(_container.scrollTop + _container.clientHeight)
    console.log(_container.scrollTop)
    if (_container.scrollTop + _container.clientHeight  + 1 >= _container.scrollHeight) {
      console.log('come on')
      // if (!top) {
      //   setOffset(offset + 30)
      // }
      // console.log('offset==>',offset)
      num = num + 30;
      let goldData = {
        category: requestPayload.category,
        order: requestPayload.order,
        offset: num,
        // offset: top ? requestPayload.offset : offset,
        limit: 30
      }
      store.dispatch(getGoldList(goldData))
      // if (top) {
      //   top = false
      // }
    }
  }

    return (
  
        <div onScroll={(e) => _onScrollEvent(e, _container)} ref={c => _container = c} className="gold-scroll-container">
            <ul 
            className="list">
                {
                    store.goldList.map((item, index) => <li key={index} className="item">
                        <a href={item.url} className="item-content" target="_blank">
                            <div className="badge" title={`已有${item.collectionCount}人喜欢`}>
                            <svg className="icon triangle" aria-hidden="true">
                                    <use xlinkHref="#icon-top-s"></use>
                                  </svg>
                                <div className="text collection">{item.collectionCount}</div>
                            </div>
                            <div className="entry-info">
                                <div className="title" title={item.title}>{item.title}</div>
                                <div className="meta">
                                    <div className="list">
                                        <div className="meta-item">
                                            <span className="text" title={item.date.iso}>20小时前</span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="text" title={`访问 ${item.user.username} 的主页`}>{item.user.username}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>)
                }
            </ul>

          <style jsx>{`
          .triangle {
            font-size: 12px !important;
          }
          .item .badge .text {
            font-family: Helvetica Neue;
            font-size: 1rem;
            font-weight: 700;
        }
          .entry-info .meta .list .meta-item {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            margin-right: 1rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
          .entry-info .meta .list {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            display: -ms-flexbox;
            display: flex;
            padding: 0;
            min-width: 0;
            overflow: hidden;
        }
          .entry-info .meta {
            display: -ms-flexbox;
            display: flex;
            font-size: 1rem;
            line-height: 1;
            color: #c2c5cd;
            white-space: nowrap;
            opacity: .8;
        }
          .ion-arrow-up-b:before {
            content: "\f10d";
        }
          .item .badge .icon {
                margin-bottom: .1rem;
                font-size: 1.3rem;
            }
          .item .badge {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            width: 2.834rem;
            height: 3.667rem;
            border-radius: 2px;
            transition: all .2s ease;
            color: #e8f1ff;
            background-color: #007fff;
            overflow: hidden;
        }
        .entry-info .title {
            max-width: 100%;
            font-size: 1.25rem;
            line-height: 1.8;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .entry-info {
            -ms-flex-positive: 1;
            flex-grow: 1;
            position: relative;
            margin-left: 1.2rem;
            height: 3.667rem;
            min-width: 0;
            cursor: pointer;
        }
          .item .item-content {
            display: -ms-flexbox;
            display: flex;
            padding: .4rem 1.25rem .4rem .4rem;
            margin-bottom: .8rem;
            background-color: #fff;
            border-radius: 2px;
        }
          .gold-scroll-container .list .item {
              list-style:none;
            }
          }
            .gold-scroll-container .list{
                padding-bottom: 6rem;
                padding-left: 0;
            }
          .gold-scroll-container{
              height: calc(100% - 54px);
              position: absolute;
              top: 54px;
              bottom: 0;
              overflow: auto;
              width:inherit;
              padding-right: .8rem;
          }
          .list .item:hover .triangle {
            color:#007fff;
          }
          .list .item:hover .badge {
            background-color:#eaf1fe;
          }
          .list .item:hover .collection {
            color:#007fff;
          }
          `}</style>
        </div>
      )
}


export default
    connect(
    state => ({
      requestPayload: state.gold.requestPayload,
      goldList: state.gold.goldList,
    }),
  )(GoldList)

// export default GoldList
