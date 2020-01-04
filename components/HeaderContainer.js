import React from 'react'
import Link from 'next/link'

const HeaderContainer = () => (
  <nav className='nav'>
        <div className="logo" _v-f765267a=""></div>
        <div className='search-input'>
            <input type="search" className="input" placeholder="掘金搜索，如：Java，阿里巴巴，前端面试" />
            
        </div>
        <div className="book-banner">
            <img className='book' src='book.png' />
            <a href="https://juejin.im/books" target="_blank" className="title">掘金小册</a>
        </div>
        <div className="download-button">
            <img className='app-img' src='app.png' />
            <a className="title">下载掘金 App</a>
        </div>
        <div className="channel-seletor">
            <div className="curr">
                <img className="icon" src="https://e-gold-cdn.xitu.io/static/frontend.svg?cffd930"/>
                <div className="title">前端</div>
                <div className="arrow-box">
                    <img className='arrow-down' src='arrow-down.png' />
                </div>
            </div>
                    {/* <ul className="channel-list">
                        <li className="item">
                            <img className="icon" src="https://e-gold-cdn.xitu.io/static/android.svg?716a7b2"/>
                            <span className="title">Android</span>
                        </li>
                        <li className="item active">
                            <img className="icon" src="https://e-gold-cdn.xitu.io/static/frontend.svg?cffd930"/>
                            <span className="title">前端</span>
                        </li>
                        <li className="item">
                            <img className="icon"  src="https://e-gold-cdn.xitu.io/static/product.svg?3bb7a70"/>
                                <span className="title" >产品</span>
                        </li>
                        <li className="item">
                            <img className="icon"  src="https://e-gold-cdn.xitu.io/static/design.svg?5bd34d1"/>
                            <span className="title" >设计</span>
                        </li>
                        <li className="item">
                            <img className="icon"  src="https://e-gold-cdn.xitu.io/static/ios.svg?0ed9940"/>
                            <span className="title" >iOS</span>
                        </li>
                        <li className="item">
                            <img className="icon"  src="https://e-gold-cdn.xitu.io/static/backend.svg?0477da0"/>
                            <span className="title" >后端</span>
                        </li>
                    </ul> */}
                </div>

                <div className="app-menu">
                    <div className="icon"></div>
                </div>
        
        <style jsx>{`
        .download-button .title {
            position: relative;
            padding-left: 5px;
            opacity: .8;
            font-size: 1.25rem;
            color: #007fff;
            white-space: nowrap;
        }
        .channel-seletor .icon {
            margin-left: 1rem;
            width: 2.25rem;
            height: 2.25rem;
        }
        .arrow-box {
            width:18px;
            height:18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .app-menu .icon{
            width: 1.66667rem;
            height: 1.66667rem;
            opacity: .8;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(https://e-gold-cdn.xitu.io/static/more.svg?64fd172);
        }
        .app-menu {
            position: relative;
            // height: 100%;
            font-size: 1.25rem;
            color: #767e8d;
            cursor: pointer;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-direction: row;
            flex-direction: row;
        }
        .arrow-down {
            width:9px;
            height:7px;
        }
        .channel-seletor .title {
            margin: 0 1rem;
        }
        .channel-seletor .curr {
            height: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-pack: end;
            justify-content: flex-end;
        }
        .channel-seletor {
            position: relative;
            margin: 0 2rem 0 0;
            height: 100%;
            font-size: 1.25rem;
            color: #767e8d;
            cursor: pointer;
            opacity: .8;
        }
        .download-button {
            position: relative;
            flex: 0.235;
            margin: 0 2.2rem 0 0;
            height: 100%;
            cursor: pointer;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-direction: row;
            flex-direction: row;
        }
        .app-img{
            width:12px;
            height:21px;
        }
    .book{
        width: 16px;
        height: 22px;
    }
    .book-banner .title {
        position: relative;
        padding-left: 5px;
        opacity: .8;
        font-size: 1.25rem;
        color: #007fff;
        white-space: nowrap;
    }
    .book-banner{
        position: relative;
        -ms-flex: 0 0 1.66667rem;
        flex: 0 0 1.66667rem;
        margin: 0 2.2rem 0 0;
        height: 100%;
        cursor: pointer;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: row;
        flex-direction: row;
    }
        .search-input {
            display:flex;
            flex: 1.6 0 auto;
            margin: 0 2.2rem 0 1rem;
            padding: 0.8rem 0;
            border-radius: 2px;
        }
        .input {
            width: 52.8%;
            font-size: 1rem;
            line-height: 1.5;
            padding: .5rem;
            border: 1px solid #e6edf4;
            border-radius: 2px;
            background-color: #f1f5fa;
            outline: none;
            // outline: 1px solid #3281f7;
        }
        .logo{
            display: block;
            width: 5rem;
            height: 3rem;
            cursor: pointer;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
            background-image: url(https://e-gold-cdn.xitu.io/static/logo.svg?74bae3f);
        }
      .nav{
        position: relative;
        padding: 0 2.5rem 0 1.8rem;
        height: 4.5rem;
        background-color: #fff;
        z-index: 500;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `}</style>
  </nav>
)

export default HeaderContainer
