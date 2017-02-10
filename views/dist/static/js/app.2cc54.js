webpackJsonp([15,13],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=i(o),r=n(315),s=n(483),l=i(s),u=n(16),c=n(188),f=i(c),d=n(478),p=i(d);window.axios=p.default,(0,r.render)(a.default.createElement(u.Provider,{store:f.default},a.default.createElement(l.default,null)),document.getElementById("app"))},17:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(80),a=n(264),r=i(a),s={register:(0,o.createAction)(r.RESGISTER_EVENT,function(e,t,n){return{type:e,fn:t,data:n}}),execute:(0,o.createAction)(r.EXECUTE,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return{type:e,args:n}})};t.default=s},49:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(80),a=n(263),r=i(a),s={setStatus:(0,o.createAction)(r.SET_STATUS),setAccessToken:(0,o.createAction)(r.SET_ACCESSTOKEN),setUserInfo:(0,o.createAction)(r.SET_USERINFO),subscribeEvents:(0,o.createAction)(r.SUBSCRIBE_EVENTS,function(e,t){return{key:e,fn:t}}),unsubscribeEvents:(0,o.createAction)(r.UNSUBSCRIBE_EVENTS),refresh:(0,o.createAction)(r.REFRESH)};t.default=s},188:function(e,t,n){"use strict";var i,i=n(485);e.exports=i()},263:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SET_STATUS="SET_STATUS",t.SET_ACCESSTOKEN="SET_ACCESSTOKEN",t.SET_USERINFO="SET_USERINFO",t.SUBSCRIBE_EVENTS="SUBSCRIBE_EVENTS",t.UNSUBSCRIBE_EVENTS="UNSUBSCRIBE_EVENTS",t.REFRESH="REFRESH"},264:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RESGISTER_EVENT="RESGISTER_EVENT",t.EXECUTE="EXECUTE"},265:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.userRequired=t.autoLogin=t.createRoute=t.createChildRoutes=t.createIndexRoute=t.createComponent=void 0;var o=n(188),a=i(o),r=function(e,t,i){return{path:e,getComponent:function(e,i){n.e(0,function(e){i(null,n(197)("./"+t+"/index.jsx").default)})}}},s=function(e){return function(t,i){n.e(0,function(t){i(null,n(197)("./"+e+"/index.jsx").default)})}},l=function(e){return function(t,i){n.e(0,function(t){i(null,{component:n(197)("./"+e+"/index.jsx").default})})}},u=function(e){return function(t,i){!function(t){i(null,e)}(n)}},c=function(e,t,n){var i=a.default.getState().auth.isLogin;if(i)return void n();var o=window.localStorage.token;o?axios.post("/verify",{}).then(function(e){var t=e.data;window.localStorage.token=t.token,a.default.dispatch({type:"SET_STATUS",payload:t}),n()}).catch(function(e){window.localStorage.removeItem("token"),n()}):n()},f=function(e,t){var n=a.default.getState().auth.isLogin;if(!n)return void t("/Sign?message="+encodeURIComponent("请先登录")+"&link="+e.location.pathname)};t.createComponent=s,t.createIndexRoute=l,t.createChildRoutes=u,t.createRoute=r,t.autoLogin=c,t.userRequired=f},268:function(e,t,n){var i=n(290);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},269:function(e,t,n){var i=n(291);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},270:function(e,t,n){var i=n(292);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},271:function(e,t,n){var i=n(293);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},290:function(e,t,n){t=e.exports=n(11)(),t.push([e.id,".menu{position:fixed;right:0;top:0;height:100vh;width:240px;visibility:hidden;display:none;-webkit-transform:translate3d(240px,0,0);transform:translate3d(240px,0,0);-webkit-transition:all .5s;transition:all .5s;z-index:100}.menu.show{display:block}.menu.open{visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.menu .side-menu{height:100%;width:100%;position:relative;overflow:hidden;z-index:101;background:#243b55;background:-webkit-linear-gradient(160deg,#141e30,#243b55);background:linear-gradient(290deg,#141e30,#243b55)}.menu .menu-btn{visibility:visible;position:absolute;top:15px;left:0;border-radius:4px;cursor:pointer;padding:0 12px;height:34px;line-height:34px;-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0);-webkit-transition:all .5s;transition:all .5s;z-index:99}.menu .menu-btn .iconfont{margin-right:5px;font-size:15px;position:relative;vertical-align:middle;top:-1px}.menu .menu-btn-outside{visibility:visible;background-color:rgba(10,22,51,.36);font-size:15px;color:#fffffb;border:1px solid transparent}.menu .menu-btn-outside:hover{border-color:#fff}.menu.open .menu-btn-outside{visibility:hidden;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}.menu .menu-btn-inside{visibility:hidden;font-size:18px;color:#3498db;text-shadow:1px 1px 3px rgba(0,0,0,.86)}.menu.open .menu-btn-inside{visibility:visible;background-color:transparent;font-size:18px;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}@media (max-width:768px){.menu .menu-btn{top:10px;padding:0 6px;height:28px;line-height:28px;-webkit-transform:translate3d(-90px,0,0);transform:translate3d(-90px,0,0)}.menu .menu-btn-inside{color:#999}}.menu .link-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-shadow:1px 1px 3px rgba(0,0,0,.86);padding:65px 0 0}.menu .link-group .link{padding:10px 20px;font-size:15px;cursor:pointer;font-weight:700;position:relative;color:#5faee3;text-decoration:none;-webkit-transform:translate3d(50px,0,0);transform:translate3d(50px,0,0);opacity:0;-webkit-transition:all .3s;transition:all .3s}.menu .link-group .link .iconfont{margin-right:8px;width:20px;display:inline-block;font-size:18px}.menu .link-group .link.active{background-color:rgba(52,152,219,.8);color:#fffffb}.menu .link-group .link:not(.active):hover{background-color:rgba(0,0,0,.16)}@media (max-width:768px){.menu .link-group{padding-top:50px}}.menu.open .link-group .link:first-child{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .1s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .1s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .1s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .1s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .1s}.menu.open .link-group .link:nth-child(2){-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .2s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .2s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .2s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .2s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .2s}.menu.open .link-group .link:nth-child(3){-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .3s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .3s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .3s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .3s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .3s}.menu.open .link-group .link:nth-child(4){-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .4s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .4s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .4s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .4s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .4s}.menu.open .link-group .link:nth-child(5){-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .5s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .5s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .5s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .5s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .5s}.menu.open .link-group .link:nth-child(6){-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .6s;transition:opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .6s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .6s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s;transition:transform .6s cubic-bezier(.175,.885,.32,1.275) .6s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s,-webkit-transform .6s cubic-bezier(.175,.885,.32,1.275) .6s}.menu .user-group{position:absolute;left:0;bottom:30px;width:100%;padding:0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;opacity:0;-webkit-transform:translate3d(0,50px,0);transform:translate3d(0,50px,0)}.menu.open .user-group{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:opacity .8s .4s,-webkit-transform .8s .4s;transition:opacity .8s .4s,-webkit-transform .8s .4s;transition:transform .8s .4s,opacity .8s .4s;transition:transform .8s .4s,opacity .8s .4s,-webkit-transform .8s .4s}.menu .personal-information{width:100%;text-align:center;color:#3498db;padding:15px 5px}.menu .personal-information .avatar{width:80px;height:80px;border-radius:50%}.menu .personal-information .follow{display:none;padding:20px 0}.menu .personal-information .follow a{display:inline-block;margin:0 8px;text-decoration:none}.menu .personal-information .follow a:hover{opacity:.6}.menu .personal-information .follow .iconfont{color:#3498db;font-size:40px}.menu .personal-information .user-name{overflow:hidden;text-overflow:ellipsis}.menu .personal-information .user-profile{padding:0 10px;color:rgba(52,152,219,.6);text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.3em;max-height:2.6em}.menu .sign-btn-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.menu .sign-btn{color:#fffffb;width:150px;margin:15px auto 0;padding:5px 0;border:none;display:block;background-color:#95a5a6;border-radius:20px;text-align:center;text-decoration:none;box-shadow:1px 1px 3px rgba(0,0,0,.86);-webkit-transition:background-color .2s;transition:background-color .2s}.menu .sign-btn:hover{background-color:#a3b1b2}.menu .sign-btn:active{background-color:#87999a;box-shadow:inset 2px 2px 2px rgba(0,0,0,.36)}.menu .sign-btn.blue-btn{background-color:#3498db}.menu .sign-btn.blue-btn:hover{background-color:#4aa3df}.menu .sign-btn.blue-btn:active{background-color:#258cd1}.menu .sign-btn.green-btn{background-color:#2ecc71}.menu .sign-btn.green-btn:hover{background-color:#40d47e}.menu .sign-btn.green-btn:active{background-color:#29b765}@media (max-width:768px){.menu .user-group{bottom:15px}.menu .personal-information{font-size:16px}.menu .personal-information .avatar{width:80px;height:80px}.menu .sign-btn-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.menu .sign-btn{margin-top:5px;width:45%;font-size:13px;display:inline-block}}",""])},291:function(e,t,n){t=e.exports=n(11)(),t.push([e.id,".message{position:fixed;top:30px;left:50%;color:#345;padding:10px 15px;text-align:center;font-size:13px;background-color:#eee;border-radius:20px;max-width:80%;z-index:9999;opacity:0;visibility:hidden;-webkit-transform:translateX(-50%) scale(.8);transform:translateX(-50%) scale(.8);-webkit-transition:all .3s;transition:all .3s}.message.show{opacity:1;visibility:visible;-webkit-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1)}.message .iconfont{width:16px;height:16px;vertical-align:top}.message.loading .icon-loading{display:inline-block;-webkit-animation:rotate 1s infinite linear;animation:rotate 1s infinite linear}.message.primary{color:#fffffb;background-color:#3498db}.message.error{color:#fffffb;background-color:#d71345}.message.success{color:#fffffb;background-color:#27ae60}.message.warning{color:#fffffb;background-color:#ffd400}.message .iconfont{vertical-align:middle;margin-right:5px}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},292:function(e,t,n){t=e.exports=n(11)(),t.push([e.id,'@font-face{font-family:iconfont;src:url("//at.alicdn.com/t/font_a5hnyvn7wtvjkyb9.eot");src:url("//at.alicdn.com/t/font_a5hnyvn7wtvjkyb9.eot?#iefix") format("embedded-opentype"),url("//at.alicdn.com/t/font_a5hnyvn7wtvjkyb9.woff") format("woff"),url("//at.alicdn.com/t/font_a5hnyvn7wtvjkyb9.ttf") format("truetype"),url("//at.alicdn.com/t/font_a5hnyvn7wtvjkyb9.svg#iconfont") format("svg")}body{overflow-x:hidden}.container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;min-height:100vh;will-change:transform;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.container.offset{-webkit-transform:translate3d(-240px,0,0);transform:translate3d(-240px,0,0)}',""])},293:function(e,t,n){t=e.exports=n(11)(),t.push([e.id,"*,:after,:before{box-sizing:border-box}html{font-family:Montserrat,Segoe UI,Microsoft Yahei,Helvetica,Arial}blockquote,body,button,code,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,legend,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:500;line-height:1.426}article h1,article h2,article h3,article h4,article h5,article h6{margin:10px 0 15px}article h1,section h1{font-size:2em}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover,input,input:active,input:focus,input:hover,select,select:active,select:focus,select:hover,textarea,textarea:active,textarea:focus,textarea:hover{outline:none}ol,ul{list-style:none}body{color:#345}a{color:#3498db}blockquote{padding-left:20px;margin:.5em 0;position:relative;border-left:4px solid #3498db}code{padding:10px 20px;display:inline-block;background-color:#324057;color:#fffffb;font-family:Consolas,Monaco,Droid,Sans,Mono,Source,Code,Pro,Menlo,Lucida,Type,Writer,Ubuntu;border-radius:5px}button,input,textarea{font-family:Montserrat,Segoe UI,Microsoft Yahei,Helvetica,Arial}",""])},475:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(195),a=i(o),r=n(6),s=i(r),l=n(2),u=i(l),c=n(3),f=i(c),d=n(8),p=i(d),b=n(7),m=i(b),h=n(1),g=i(h),k=n(477),v=i(k),y=n(476),x=i(y),w=n(16),E=n(14),_=n(17),S=i(_);n(271),n(270);var C=function(e){function t(e){(0,u.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return n.state={notice:{show:!1},menu:{}},n.timer=null,n.offsetView=n.offsetView.bind(n),n}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.props.actions.register("notice",this.openNotice.bind(this)),this.props.actions.register("menu",this.setMenu.bind(this))}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.refs.container.style.display="block"})}},{key:"offsetView",value:function(){this.refs.view.classList.toggle("offset")}},{key:"setMenu",value:function(e,t){this.setState({menu:(0,a.default)({show:e},t)})}},{key:"openNotice",value:function(e,t,n){var i=this;this.setState({notice:(0,a.default)({show:!0,message:e},n)}),t&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){i.setState({notice:(0,a.default)({show:!1,message:e},n)})},t))}},{key:"render",value:function(){return g.default.createElement("div",{ref:"container",style:{display:"none"}},g.default.createElement("div",{ref:"view",className:"container"},this.props.children),g.default.createElement(x.default,(0,a.default)({ref:"menu"},this.state.menu,{callback:this.offsetView})),g.default.createElement(v.default,(0,a.default)({key:"Message"},this.state.notice)))}}]),t}(h.Component),T=function(e){return{store:e}},z=function(e){return{actions:(0,E.bindActionCreators)(S.default,e)}};t.default=(0,w.connect)(T,z)(C),C.propTypes={children:h.PropTypes.any,store:h.PropTypes.object,actions:h.PropTypes.any}},476:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=i(o),r=n(2),s=i(r),l=n(3),u=i(l),c=n(8),f=i(c),d=n(7),p=i(d),b=n(1),m=i(b),h=n(23),g=i(h),k=n(39);n(268);var v=n(16),y=n(14),x=n(17),w=i(x),E=n(49),_=i(E),S=function(e){function t(e){(0,s.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={sideShow:!1,isLogin:!1,userInfo:null},n.toggleMenu=n.toggleMenu.bind(n),n.signout=n.signout.bind(n),n.linkClick=n.linkClick.bind(n),n.windowClick=n.windowClick.bind(n),n}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.windowClick,!1),this.props.authConf.subscribeEvents("Menu",this.getUserInfo.bind(this)),this.getUserInfo()}},{key:"componentWillUnmount",value:function(){this.props.authConf.unsubscribeEvents("Menu"),document.body.removeEventListener("click",this.windowClick,!1)}},{key:"getUserInfo",value:function(){var e=this.props.auth,t=e.isLogin,n=e.userInfo;t&&n&&this.setState({isLogin:!0,userInfo:{name:n.name,profile:n.profile,avatar:n.avatar}})}},{key:"signout",value:function(){var e=this;axios.post("/signout",{}).then(function(t){t.success&&(e.props.actions.execute("notice","退出成功！",2e3,{status:"success"}),e.clearWebStorage(),e.setState({isLogin:!1,userInfo:null}))}).catch(function(t){return e.props.actions.execute("notice",t.message,2e3,{status:"error"})})}},{key:"clearWebStorage",value:function(e){window.localStorage.removeItem("token")}},{key:"windowClick",value:function(e){this.state.sideShow&&!this.refs.sideMenu.contains(e.target)&&this.toggleMenu()}},{key:"toggleMenu",value:function(){this.props.callback&&this.props.callback(),this.setState({sideShow:!this.state.sideShow})}},{key:"gotoSign",value:function(e,t,n){this.linkClick(e),this.context.router.push(t+("?link="+(this.context.router.location.pathname+(n?"&signup=1":""))))}},{key:"linkClick",value:function(e){e.currentTarget.classList.contains("active")||this.toggleMenu()}},{key:"render",value:function(){var e=(0,g.default)("menu",{show:this.props.show,open:this.state.sideShow});return m.default.createElement("div",{className:e},m.default.createElement("div",{className:"menu-btn menu-btn-outside",onClick:this.toggleMenu},m.default.createElement("i",{className:"iconfont icon-menu"}),m.default.createElement("span",null,"Menu")),m.default.createElement("div",{ref:"sideMenu",className:"side-menu"},m.default.createElement("div",{className:"menu-btn menu-btn-inside",onClick:this.toggleMenu},m.default.createElement("i",{className:"iconfont icon-menu"}),m.default.createElement("span",null,"Menu")),m.default.createElement("div",{className:"link-group"},m.default.createElement(k.IndexLink,{to:"/",activeClassName:"active",className:"link",onClick:this.linkClick},m.default.createElement("i",{className:"iconfont icon-home"}),m.default.createElement("span",null,"Home")),m.default.createElement(k.Link,{to:"/games",activeClassName:"active",className:"link",onClick:this.linkClick},m.default.createElement("i",{className:"iconfont icon-game"}),m.default.createElement("span",null,"Games")),m.default.createElement(k.Link,{to:"/my-friends",activeClassName:"active",className:"link",onClick:this.linkClick},m.default.createElement("i",{className:"iconfont icon-myFriends"}),m.default.createElement("span",null,"My Friends")),m.default.createElement(k.Link,{to:"/about",activeClassName:"active",className:"link",onClick:this.linkClick},m.default.createElement("i",{className:"iconfont icon-about"}),m.default.createElement("span",null,"About Me"))),this.props.showUserGroup&&(this.state.isLogin?m.default.createElement("div",{className:"user-group"},m.default.createElement("div",{className:"personal-information"},m.default.createElement("img",{className:"avatar",src:this.state.userInfo.avatar}),m.default.createElement("h2",{className:"user-name"},this.state.userInfo.name),m.default.createElement("small",{className:"user-profile"},this.state.userInfo.profile),m.default.createElement("div",{className:"follow"},m.default.createElement("a",{href:"https://github.com/NightCatSama",target:"_blank"},m.default.createElement("i",{className:"iconfont icon-github"})),m.default.createElement("a",{href:"https://twitter.com/NightCatSama",target:"_blank"},m.default.createElement("i",{className:"iconfont icon-twitter"})),m.default.createElement("a",{href:"http://weibo.com/p/1005053909739860",target:"_blank"},m.default.createElement("i",{className:"iconfont icon-sina"})))),m.default.createElement("div",{className:"sign-btn-group"},m.default.createElement(k.Link,{to:"/user",className:"sign-btn blue-btn",onClick:this.linkClick},"My info"),m.default.createElement("a",{href:"javascript:;",className:"sign-btn",onClick:this.signout},"Sign out"))):m.default.createElement("div",{className:"user-group"},m.default.createElement("div",{className:"sign-btn-group"},m.default.createElement(k.Link,{to:"/sign",className:"sign-btn blue-btn",onClick:this.linkClick},"Sign in"),m.default.createElement(k.Link,{to:"/sign?signup=1",className:"sign-btn green-btn",onClick:this.linkClick},"Sign up"))))))}}]),t}(b.Component),C=function(e){return{auth:e.auth}},T=function(e){return{actions:(0,y.bindActionCreators)(w.default,e),authConf:(0,y.bindActionCreators)(_.default,e)}};t.default=(0,v.connect)(C,T)(S),S.propTypes={show:b.PropTypes.bool,callback:b.PropTypes.func,showUserGroup:b.PropTypes.bool,store:b.PropTypes.object,auth:b.PropTypes.object,authConf:b.PropTypes.object,actions:b.PropTypes.object},S.defaultProps={show:!0,showUserGroup:!0},S.contextTypes={router:m.default.PropTypes.any.isRequired}},477:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=i(o),r=n(2),s=i(r),l=n(3),u=i(l),c=n(8),f=i(c),d=n(7),p=i(d),b=n(1),m=i(b),h=n(196),g=i(h),k=n(23),v=i(k);n(269);var y=function(e){function t(e){(0,s.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.shouldComponentUpdate=g.default.shouldComponentUpdate.bind(n),n}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e={loading:"loading",success:"success",error:"error",warning:"warning"},t=(0,v.default)("message",this.props.status,{show:this.props.show}),n=(0,v.default)("iconfont","icon-"+e[this.props.status||"warning"]);return m.default.createElement("div",{className:t,style:this.props.styles},m.default.createElement("i",{className:n}),m.default.createElement("span",null,this.props.message))}}]),t}(b.Component);t.default=y,y.propTypes={show:b.PropTypes.bool,styles:b.PropTypes.object,message:b.PropTypes.any,status:b.PropTypes.string},y.defaultProps={show:!1,styles:null,message:"",status:""}},478:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(194),a=i(o),r=n(272),s=i(r),l=n(188),u=i(l),c=s.default.create({baseURL:"",withCredentials:!1});c.interceptors.request.use(function(e){var t=u.default.getState().auth,n=t.isLogin,i=t.accessToken;return n&&i&&(e.headers.accessToken=i),e}),c.interceptors.response.use(function(e){return e.data},function(e){try{return a.default.reject(e.response.data)}catch(e){return a.default.reject({success:!1,message:"未知错误"})}}),t.default=c},479:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(63),s=o(r),l=n(19),u=o(l),c=n(80),f=n(263),d=i(f),p={isLogin:!1,accessToken:null,userInfo:null,events:{},signin_time:null},b=(0,c.handleActions)((a={},(0,s.default)(a,d.SET_STATUS,function(e,t){var n=t.payload;return window.localStorage.token=n.token,(0,u.default)({},e,{isLogin:!0,signin_time:new Date},n)}),(0,s.default)(a,d.SET_ACCESSTOKEN,function(e,t){var n=t.payload;return(0,u.default)({},e,{accessToken:n})}),(0,s.default)(a,d.SET_USERINFO,function(e,t){var n=t.payload;return(0,u.default)({},e,{userInfo:(0,u.default)(e.userInfo,n)})}),(0,s.default)(a,d.SUBSCRIBE_EVENTS,function(e,t){var n=t.payload,i=(0,u.default)({},e);return i.events[n.key]=n.fn,i}),(0,s.default)(a,d.UNSUBSCRIBE_EVENTS,function(e,t){var n=t.payload,i=(0,u.default)({},e);return delete i[n],i}),(0,s.default)(a,d.REFRESH,function(e,t){t.payload;for(var n in e.events)e.events[n]();return e}),a),p);t.default=b},480:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(63),s=o(r),l=n(19),u=o(l),c=n(80),f=n(264),d=i(f),p={},b=(0,c.handleActions)((a={},(0,s.default)(a,d.RESGISTER_EVENT,function(e,t){var n=t.payload,i={};return i[n.type]=n.fn,(0,u.default)({},e,i)}),(0,s.default)(a,d.EXECUTE,function(e,t){var n=t.payload,i=n.type,o=n.args;return"function"==typeof e[i]&&e[i].apply(null,o),(0,u.default)({},e)}),a),p);t.default=b},481:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),a=n(480),r=i(a),s=n(479),l=i(s),u=(0,o.combineReducers)({eventBus:r.default,auth:l.default});t.default=u},482:function(e,t,n){"use strict";var i=n(265);e.exports=[{path:"sign",getComponent:function(e,t){n.e(7,function(e){t(null,n(181).default)})}},{path:"active_account",getComponent:function(e,t){n.e(11,function(e){t(null,n(176).default)})}},{path:"games",getComponent:function(e,t){n.e(10,function(e){t(null,n(177).default)})}},{path:"about",getComponent:function(e,t){n.e(12,function(e){t(null,n(175).default)})}},{path:"my-friends",getComponent:function(e,t){n.e(8,function(e){t(null,n(180).default)})}},{path:"user",onEnter:i.userRequired,getComponent:function(e,t){n.e(1,function(e){t(null,n(100).default)})},getIndexRoute:function(e,t){n.e(2,function(e){t(null,{component:n(99).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"/user/game-data",getComponent:function(e,t){n.e(3,function(e){t(null,n(98).default)})}}])}(n)}},{path:"user/:account",onEnter:i.userRequired,getComponent:function(e,t){n.e(1,function(e){t(null,n(100).default)})},getIndexRoute:function(e,t){n.e(2,function(e){t(null,{component:n(99).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"/user/game-data/:account",getComponent:function(e,t){n.e(3,function(e){t(null,n(98).default)})}}])}(n)}},{path:"single-games",onEnter:i.userRequired,getComponent:function(e,t){n.e(4,function(e){t(null,n(97).default)})},getIndexRoute:function(e,t){n.e(4,function(e){t(null,{component:n(97).default})})},getChildRoutes:function(e,t){!function(e){t(null,[{path:"factory",getComponent:function(e,t){n.e(6,function(e){t(null,n(183).default)})}}])}(n)}},{path:"online-games",onEnter:i.userRequired,getComponent:function(e,t){n.e(5,function(e){t(null,n(96).default)})},getIndexRoute:function(e,t){n.e(5,function(e){t(null,{component:n(96).default})})},getChildRoutes:function(e,t){!function(e){t(null,[])}(n)}}]},483:function(e,t,n){"use strict";e.exports=n(484)},484:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=i(o),r=n(2),s=i(r),l=n(3),u=i(l),c=n(8),f=i(c),d=n(7),p=i(d),b=n(1),m=i(b),h=n(39),g=n(265),k=n(475),v=i(k),y=n(482),x=i(y),w={path:"/",component:v.default,getIndexRoute:function(e,t){n.e(9,function(e){t(null,{component:n(178).default})})},childRoutes:x.default,onEnter:g.autoLogin},E=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(h.Router,{history:h.browserHistory,routes:w}))}}]),t}(b.Component);t.default=E},485:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(14),a=n(481),r=i(a),s=function(e){var t=(0,o.createStore)(r.default,e,window.devToolsExtension?window.devToolsExtension():void 0);return t};e.exports=s}});