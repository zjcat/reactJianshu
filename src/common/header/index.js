import React from 'react';
import {connect} from 'react-redux';
import {ACTION_INPUT} from '../../Store/actionType'
import {
    HeaderWrapper,
    Logobox,
    LogoImg,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchBox
} from './style';
import logoPath from '../../statics/logo.png'
const Header = (props)=>{
        const {actionSearch,inputFocus,inputBlur} =props;
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
                        <SearchBox className={actionSearch?'active search-box':'search-box'}>
                            <NavSearch onFocus={inputFocus} onBlur={inputBlur} className="inputSrarch" placeholder="搜索"></NavSearch>
                            <span className="iconfont">&#xe60d;</span>
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
const mapStateToProps= (state)=>{
    return {
        actionSearch:state.header.actionSearch
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        inputFocus(){
            const action = {
                type:ACTION_INPUT,
                value:true
            }
            dispatch(action)
        },
        inputBlur(){
            const action = {
                type:ACTION_INPUT,
                value:false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)