import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    width:100%;
    border:1px solid #f0f0f0;
`
export const Logobox = styled.a`
    position:absolute;
    width:100px;
    height:56px;
    top:0;
    left:0;
`
export const LogoImg = styled.img`
   width:100%;
   height:100%;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:auto;
    padding-right:70px;
    box-sizing:border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    font-size:17px;
    &.left{
        float:left;
    }
    &.active{
        color:#ea6f5a;
    }
    &.right{
        float:right;
        color:#969696;
        .iconfont{
            font-size:24px;
        }
    }
`;
export const SearchBox = styled.div`
   position:relative;
   float:left;
   &.active{
    .iconfont{
        background:#969696;
        color:#fff;
    }
    .inputSrarch{
        width:240px;
    }
   }
   .iconfont{
       position:absolute;
       font-size:14px;
       color:#969696;
       top: 13px;
       right: 5px;
       text-align: center;
       line-height: 30px;
       width:30px;
       height:30px;
       border-radius:50%;
       background:none;
   }
`
export const NavSearch = styled.input`
    width:160px;
    height:38px;
    border:1px solid #eee;
    border-radius:19px;
    margin-top:9px;
    outline:none;
    background:#eee;
    font-size:14px;
    padding:0 40px 0 20px;
    box-sizing:border-box;
    transition:1s;
    &::placeholder{
        color:#999;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:100%;
`
export const Button =styled.div`
    float:left;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:15px;
    padding:0 20px;
    box-sizing:border-box;
    color:#ea6f5a;
    border:1px solid #ea6f5a;
    font-size:14px;
    &.sign-up{

    }
    &.write-btn{
        color:#fff;
        background:#ea6f5a;
        .iconfont{
            font-size:15px;
            color:#fff;
            margin-right:3px;
        }
    }
`
export const SearchInfo = styled.div`
    visibility: visible;
    opacity: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    margin-top: 9px;
    width: 250px;
    left: 0;
    top: 100%;
    border-radius: 4px;
    min-height:120px;
    &::after{
        content:"";
        position:absolute;
        top: -7px;
        left: 20px;
        width: 24px;
        height: 24px;
        transform:rotateZ(45deg);
        z-index:-1;
        background:#fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
    &::before{
        content:"";
        position:absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
    }
`
export const SrearchHot = styled.div`
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    div{
        overflow:hidden;
        margin-bottom: 10px;
    }
    .hotTitle{
        float: left;
        font-size: 14px;
        color: #969696;
    }
    .changeHotWord{
        float: right;
        font-size: 13px;
        color: #969696;
        background-color: transparent;
        border-width: 0;
        padding: 0;
        cursor:pointer;
        text-decoration:none;
        :hover{
            color: #333;
        }
    }
    ul{
        overflow:hidden;
    }
`
export const HotWord =styled.li`
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
    a{
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor:pointer;
        text-decoration:none;
    }
    a:hover{
        color: #333;
        border-color: #b4b4b4;
    }
`