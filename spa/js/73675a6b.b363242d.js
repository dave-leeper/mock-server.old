(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["73675a6b"],{"246a":function(t,e,a){"use strict";var s=a("5d68"),r=a.n(s);r.a},"5d68":function(t,e,a){},a6f0:function(t,e,a){},a83d:function(t,e,a){"use strict";var s=a("a6f0"),r=a.n(s);r.a},e375:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("canvas",{staticClass:"reader-page",attrs:{id:"page-canvas",width:"1275",height:"1650"}}),t.navBarVisible?a("ReaderNavBar",{staticClass:"reader-nav-bar"}):t._e()],1)},r=[],i=a("967e"),n=a.n(i),o=(a("96cf"),a("fa84")),u=a.n(o),c=a("fc74"),h=a.n(c),d=a("59a1"),l=a.n(d),_=a("adb5"),E=function(){function t(e,a,s){h()(this,t),this.username=e,this.id=a,this.issue=s,this.issue.length&&(this.issue=parseInt(this.issue))}return l()(t,[{key:"postToServer",value:function(){var t=u()(n.a.mark((function t(e){var a;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,this.username&&a.set("username",this.username),this.id&&a.set("id",this.id),this.issue&&a.set("issue",this.issue),t.abrupt("return",_["a"].postToServer(e,a));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),v=E,A=function(){function t(e,a,s){h()(this,t),this.username=e,this.id=a,this.issue=s,this.issue.length&&(this.issue=parseInt(this.issue))}return l()(t,[{key:"postToServer",value:function(){var t=u()(n.a.mark((function t(e){var a;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,this.username&&a.set("username",this.username),this.id&&a.set("id",this.id),this.issue&&a.set("issue",this.issue),t.abrupt("return",_["a"].postToServer(e,a));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),m=A,R=a("a7ee"),B=a("d5eb"),f=a("8b82"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("div",{staticClass:"reader-nav-bar-control column justify-between items-center content-center"},[a("div",{staticClass:"reader-nav-bar"},[a("div",[a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":"black",icon:"first_page",disable:!t.firstEnabled},on:{click:t.firstPage}}),a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":"black",icon:"chevron_left",disable:!t.previousEnabled},on:{click:t.previousPage}})],1),a("div",[a("div",{staticClass:"row"},[a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":"black",icon:"arrow_upward"},on:{click:t.home}}),2==t.$store.state.main.readerState?a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":t.favoritesColor,icon:"favorite",disable:t.favoritesDisabled},on:{click:t.toggleFavorite}}):t._e(),2==t.$store.state.main.readerState?a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":t.cartColor,icon:"shopping_cart",disable:t.cartDisabled},on:{click:t.toggleCart}}):t._e()],1)]),a("div",[a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":"black",icon:"chevron_right",disable:!t.nextEnabled},on:{click:t.nextPage}}),a("q-btn",{staticClass:"nav-button",attrs:{rounded:"",color:"white","text-color":"black",icon:"last_page",disable:!t.lastEnabled},on:{click:t.lastPage}})],1)])])])},b=[],g=a("95b8"),N={name:"ReaderNavBar",data:function(){return{firstEnabled:!1,previousEnabled:!1,nextEnabled:!0,lastEnabled:!0,progress:50}},mounted:function(){B["a"].register(this,R["a"].READER_NAV_BAR_ENABLE_FIRST,this.enableFirst),B["a"].register(this,R["a"].READER_NAV_BAR_ENABLE_PREVIOUS,this.enablePrevious),B["a"].register(this,R["a"].READER_NAV_BAR_ENABLE_NEXT,this.enableNext),B["a"].register(this,R["a"].READER_NAV_BAR_ENABLE_LAST,this.enableLast),B["a"].register(this,R["a"].READER_NAV_BAR_PROGRESS,this.setProgress)},computed:{cartColor:function(){return this.inCart?"red":"black"},cartDisabled:function(){return!this.$store.state.main.account||!this.$store.state.main.account.username},favoritesColor:function(){return this.isFavorite?"red":"black"},favoritesDisabled:function(){return!this.$store.state.main.account||!this.$store.state.main.account.username},inCart:function(){var t=this.$store.state.main.currentBook;return g["a"].hasBook(this.$store.state.main.cart,t.id,t.issue)},isFavorite:function(){var t=this.$store.state.main.currentBook;return g["a"].hasBook(this.$store.state.main.favorites,t.id,t.issue)}},methods:{firstPage:function(t){B["a"].broadcast(R["a"].READER_NAV_BAR_FIRST_PAGE)},previousPage:function(t){B["a"].broadcast(R["a"].READER_NAV_BAR_PREVIOUS_PAGE)},home:function(t){B["a"].broadcast(R["a"].READER_NAV_BAR_HOME)},nextPage:function(t){B["a"].broadcast(R["a"].READER_NAV_BAR_NEXT_PAGE)},lastPage:function(t){B["a"].broadcast(R["a"].READER_NAV_BAR_LAST_PAGE)},enableFirst:function(t){this.firstEnabled=t},enablePrevious:function(t){this.previousEnabled=t},enableNext:function(t){this.nextEnabled=t},enableLast:function(t){this.lastEnabled=t},toggleCart:function(){g["a"].hasBook(this.$store.state.main.cart,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue)?B["a"].broadcast(R["a"].READER_NAV_BAR_REMOVE_FROM_CART):B["a"].broadcast(R["a"].READER_NAV_BAR_ADD_TO_CART)},toggleFavorite:function(){g["a"].hasBook(this.$store.state.main.favorites,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue)?B["a"].broadcast(R["a"].READER_NAV_BAR_REMOVE_FROM_FAVORITES):B["a"].broadcast(R["a"].READER_NAV_BAR_ADD_TO_FAVORITES)},setProgress:function(t){this.progress=t}}},P=N,T=(a("246a"),a("2877")),k=a("eebe"),$=a.n(k),D=a("9c40"),V=a("6b1d"),w=Object(T["a"])(P,p,b,!1,null,"eec9bda6",null),S=w.exports;$()(w,"components",{QBtn:D["a"],QLinearProgress:V["a"]});var x=a("22f8"),O=a("61b1"),C={name:"Reader",components:{ReaderNavBar:S},data:function(){return{currentPage:0,navBarTime:(new Date).getTime(),navBarVisible:!0,canvas:null,intervalId:null}},mounted:function(){var t=this;if(!this.$store.state.main.currentBook)return this.$store.commit("main/SIGN_OUT"),this.$store.commit("main/SET_USER_PANEL_STATE",O["a"].SIGN_IN),void("/index"!==this.$route.path&&this.$router.push({path:"/index"}).catch((function(){})));if(B["a"].broadcast(R["a"].HIDE_HEADER),B["a"].broadcast(R["a"].HIDE_DRAWER),B["a"].register(this,R["a"].READER_NAV_BAR_FIRST_PAGE,this.firstPage),B["a"].register(this,R["a"].READER_NAV_BAR_PREVIOUS_PAGE,this.previousPage),B["a"].register(this,R["a"].READER_NAV_BAR_HOME,this.home),B["a"].register(this,R["a"].READER_NAV_BAR_NEXT_PAGE,this.nextPage),B["a"].register(this,R["a"].READER_NAV_BAR_LAST_PAGE,this.lastPage),B["a"].register(this,R["a"].READER_NAV_BAR_REMOVE_FROM_CART,this.removeFromCart),B["a"].register(this,R["a"].READER_NAV_BAR_ADD_TO_CART,this.addToCart),B["a"].register(this,R["a"].READER_NAV_BAR_REMOVE_FROM_FAVORITES,this.removeFromFavorites),B["a"].register(this,R["a"].READER_NAV_BAR_ADD_TO_FAVORITES,this.addToFavorites),window.addEventListener("mousemove",this.updateNavBarTime),this.intervalId=setInterval((function(){t.updateNavBarVisible()}),300),this.updateNavBarButtons(),this.canvas=document.getElementById("page-canvas"),this.loadPage(),!this.$store.state.main.account){var e=x["a"].getMessage(x["a"].LANGUAGE.en_US,x["a"].SIGN_IN_TO_ADD_TO_FAVORITES_OR_CART),a=new f["a"](e,x["a"].NONE,0,!1);B["a"].broadcast(R["a"].USER_MESSAGE,a)}},methods:{firstPage:function(t){this.currentPage=0,this.updateNavBarTime(),this.updateNavBarButtons(),this.updateNavBaProgress(),this.loadPage()},previousPage:function(t){this.currentPage--,this.updateNavBarTime(),this.updateNavBarButtons(),this.updateNavBaProgress(),this.loadPage()},home:function(t){clearInterval(this.intervalId),"index"!==this.$route.path&&this.$router.push({path:"index"}).catch((function(){}))},addToCart:function(){var t=u()(n.a.mark((function t(){var e,a,s;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.main.urlBase+"user/cart/add/data",a=new v(this.$store.state.main.account.username,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue),t.next=4,a.postToServer(e);case 4:if(s=t.sent,!_["a"].hasErrors(s)){t.next=7;break}return t.abrupt("return");case 7:this.$store.commit("main/ADD_CART",this.$store.state.main.currentBook);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeFromCart:function(){var t=u()(n.a.mark((function t(){var e,a,s;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.main.urlBase+"user/cart/delete/data",a=new v(this.$store.state.main.account.username,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue),t.next=4,a.postToServer(e);case 4:if(s=t.sent,!_["a"].hasErrors(s)){t.next=7;break}return t.abrupt("return");case 7:this.$store.commit("main/REMOVE_CART",this.$store.state.main.currentBook);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addToFavorites:function(){var t=u()(n.a.mark((function t(){var e,a,s;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.main.urlBase+"user/favorites/add/data",a=new m(this.$store.state.main.account.username,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue),t.next=4,a.postToServer(e);case 4:if(s=t.sent,!_["a"].hasErrors(s)){t.next=7;break}return t.abrupt("return");case 7:this.$store.commit("main/ADD_FAVORITE",this.$store.state.main.currentBook);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeFromFavorites:function(){var t=u()(n.a.mark((function t(){var e,a,s;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.main.urlBase+"user/favorites/delete/data",a=new m(this.$store.state.main.account.username,this.$store.state.main.currentBook.id,this.$store.state.main.currentBook.issue),t.next=4,a.postToServer(e);case 4:if(s=t.sent,!_["a"].hasErrors(s)){t.next=7;break}return t.abrupt("return");case 7:this.$store.commit("main/REMOVE_FAVORITE",this.$store.state.main.currentBook);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),nextPage:function(t){this.currentPage++,this.updateNavBarTime(),this.updateNavBarButtons(),this.updateNavBaProgress(),this.loadPage()},lastPage:function(t){this.currentPage=this.$store.state.main.currentBook.pages.length-1,this.updateNavBarTime(),this.updateNavBarButtons(),this.updateNavBaProgress(),this.loadPage()},updateNavBarTime:function(){this.navBarTime=(new Date).getTime()},updateNavBarVisible:function(){this.navBarVisible=(new Date).getTime()-this.navBarTime<5e3,this.navBarVisible&&(this.updateNavBarButtons(),this.updateNavBaProgress())},updateNavBarButtons:function(){var t=this.$store.state.main.currentBook.pages.length;B["a"].broadcast(R["a"].READER_NAV_BAR_ENABLE_FIRST,0!==this.currentPage),B["a"].broadcast(R["a"].READER_NAV_BAR_ENABLE_PREVIOUS,0!==this.currentPage),B["a"].broadcast(R["a"].READER_NAV_BAR_ENABLE_NEXT,this.currentPage<t-1),B["a"].broadcast(R["a"].READER_NAV_BAR_ENABLE_LAST,this.currentPage<t-1)},updateNavBaProgress:function(){var t=(this.currentPage+1)/this.$store.state.main.currentBook.pages.length*100;B["a"].broadcast(R["a"].READER_NAV_BAR_PROGRESS,t)},url:function(){var t=this.$store.state.main.urlBase+"comics/"+this.$store.state.main.currentBook.id+"/"+this.$store.state.main.currentBook.issue+"/";return t+=this.$store.state.main.currentBook.pages[this.currentPage],t},loadPage:function(){var t=this.canvas.getContext("2d"),e=new Image;e.onload=function(){t.drawImage(e,0,0)},e.src=this.url()}}},I=C,F=(a("a83d"),a("9989")),L=Object(T["a"])(I,s,r,!1,null,"6dc4a807",null);e["default"]=L.exports;$()(L,"components",{QPage:F["a"]})}}]);