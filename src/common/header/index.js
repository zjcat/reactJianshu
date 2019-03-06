import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreate from './store/actionCreators';
import {
    HeaderWrapper,
    Logobox,
    LogoImg,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchBox,
    SearchInfo,
    SrearchHot,
    HotWord
} from './style';
import logoPath from '../../statics/logo.png';


class Header extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        const { actionSearch,
            inputFocus,
            inputBlur,
            hearderList,
            startHotCont,
            offHostCont,
            hotInerCont,
            hasHotList,
            changeHotPage,
            hotListIndex,
            hotListpage } = this.props;
        const returnHotElm = () => {
            if (actionSearch || hotInerCont) {
                return (<div >
                    <SearchInfo onMouseEnter={startHotCont} onMouseLeave={offHostCont}>
                        <SrearchHot>
                            <div>
                                <span className="hotTitle">热门搜索：</span>
                                <span onClick={()=>{changeHotPage(hotListIndex)}} className="changeHotWord">换一批</span>
                            </div>
                            <ul>
                                {
                                    hearderList.map((item, index) => {
                                        if (index < (hotListIndex * hotListpage)&&index>((hotListIndex-1) * hotListpage)) {
                                            return (
                                                <HotWord key={index}>
                                                    <a href="/">{item}</a>
                                                </HotWord>
                                            )
                                        }

                                    })
                                }
                            </ul>
                        </SrearchHot>
                    </SearchInfo>
                </div>)
            } else {
                return null
            }
        }

        return (
            <div>
                <HeaderWrapper>
                    <Logobox href="/">
                        <LogoImg src={logoPath}></LogoImg>
                    </Logobox>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                        <SearchBox className={actionSearch ? 'active search-box' : 'search-box'}>
                            <NavSearch onFocus={() => { inputFocus(hasHotList) }} onBlur={inputBlur} className="inputSrarch" placeholder="搜索"></NavSearch>
                            <span className="iconfont">&#xe60d;</span>
                            {returnHotElm()}
                        </SearchBox>

                    </Nav>
                    <Addition>
                        <Button className="sign-up">注册</Button>
                        <Button className="write-btn"><span className="iconfont">&#xe615;</span>写文章</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        actionSearch: state.getIn(['header', 'actionSearch']),
        hearderList: state.getIn(['header', 'hearderList']),
        hotInerCont: state.getIn(['header', 'hotInerCont']),
        hotOutCont: state.getIn(['header', 'hotOutCont']),
        hasHotList: state.getIn(['header', 'hasHotList']),
        hotListIndex: state.getIn(['header', 'hotListIndex']),
        hotListpage: state.getIn(['header', 'hotListpage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputFocus(option) {
            dispatch(actionCreate.searchFocus());
            if (!option) {
                dispatch(actionCreate.getHearderList());
            }
        },
        inputBlur() {
            dispatch(actionCreate.searchFocusoff());
        },
        startHotCont() {
            dispatch(actionCreate.searchHotStart())
        },
        offHostCont() {
            dispatch(actionCreate.searchHotOff())
        },
        changeHotPage(optionIndex) {
            //console.log(optionIndex)
            dispatch(actionCreate.changePageHotWord(optionIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)