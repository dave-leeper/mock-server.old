(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7b9588ca"],{"5d72":function(e){e.exports=JSON.parse('{"characters":[{"name":"Gold Venus","image":"../statics/rive/gold-venus.png","icon":"../statics/rive/gold-venus-icon.png","width":683,"height":910,"position":"cf","appearances":[{"id":"gold_venus","issue":1},{"id":"gold_venus","issue":2},{"id":"gold_venus","issue":3},{"id":"gold_venus","issue":4},{"id":"legends_pacific","issue":1},{"id":"legends_pacific","issue":2},{"id":"legends_pacific","issue":3},{"id":"legends_pacific","issue":4}],"quote":"The Japs will never know what hit \'em!"},{"name":"Captain Æther","image":"../statics/rive/captain-aether.png","icon":"../statics/rive/captain-aether-icon.png","width":683,"height":910,"position":"lr","appearances":[{"id":"heroes_of_the_wild_frontier","issue":1},{"id":"heroes_of_the_wild_frontier","issue":2},{"id":"heroes_of_the_wild_frontier","issue":3},{"id":"heroes_of_the_wild_frontier","issue":4},{"id":"whisper_witch","issue":1},{"id":"whisper_witch","issue":2},{"id":"whisper_witch","issue":3},{"id":"whisper_witch","issue":4}],"quote":"The Luminiferous Æther is everywhere! I can see it!"},{"name":"Whisper Witch","image":"../statics/rive/whisper-witch.png","icon":"../statics/rive/whisper-witch-icon.png","width":683,"height":910,"position":"rr","appearances":[{"id":"whisper_witch","issue":1},{"id":"whisper_witch","issue":2},{"id":"whisper_witch","issue":3},{"id":"whisper_witch","issue":4},{"id":"legends_europe","issue":1},{"id":"legends_europe","issue":2},{"id":"legends_europe","issue":3},{"id":"legends_europe","issue":4}],"quote":"What if I say no? What if I don\'t want this power?"}]}')},"70d2":function(e,t,i){},8041:function(e,t,i){"use strict";var r=i("af78"),s=i.n(r);s.a},"8b24":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex flex-center page"},[i("Animation")],1)},s=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[e.characters[0]?i("img",{staticClass:"animation-character",style:{height:e.getHeight(0),"z-index":e.getZ(0),left:e.getLeft(0),opacity:e.getOpacity(0)},attrs:{src:e.characters[0].image}}):e._e(),e.characters[1]?i("img",{staticClass:"animation-character",style:{height:e.getHeight(1),"z-index":e.getZ(1),left:e.getLeft(1),opacity:e.getOpacity(1)},attrs:{src:e.characters[1].image}}):e._e(),e.characters[2]?i("img",{staticClass:"animation-character",style:{height:e.getHeight(2),"z-index":e.getZ(2),left:e.getLeft(2),opacity:e.getOpacity(2)},attrs:{src:e.characters[2].image}}):e._e()]),i("q-chat-message",{staticClass:"animation-quote",style:{opacity:e.getQuoteOpacity()},attrs:{text:[e.getQuote()],sent:""}}),i("CharacterStore",{staticClass:"row justify-center animation-character-panel",attrs:{character:e.frontCharacter}})],1)},n=[],c=(i("7f7f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"character-store"},[i("div",[i("div",{staticClass:"character-name"},[e._v(e._s(e.getName()))]),i("div",{staticClass:"row justify-center cover-gallery"},e._l(e.character.appearances,(function(t,r){return i("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:r,staticClass:"appearances row",attrs:{clickable:""},on:{click:function(i){return e.clicked(t)}}},[i("img",{staticClass:"thumbnail-image",attrs:{src:e.getURL(t)}}),i("div",{staticClass:"thumbnail-item-description"},[e._v(e._s(e.getTitle(t))+" #"+e._s(t.issue))])])})),0)])])])}),o=[],u=i("aedc"),E=i("95b8"),_=i("a7ee"),h=i("d5eb"),R={name:"CharacterStore",props:{character:null},methods:{clicked:function(e){var t=this.getBook(e);this.$store.commit("main/SET_READER_STATE",u["a"].PREVIEW),h["a"].broadcast(_["a"].STORE_BOOK_SELECTED,t)},getBook:function(e){if(this.$store.state.main.bookInfo)return E["a"].getBook(this.$store.state.main.bookInfo,e.id,e.issue)},getName:function(){return this.character.name},getTitle:function(e){var t=this.getBook(e);if(t)return this.getBook(e).title},getURL:function(e){var t=this.getBook(e);if(t)return this.$store.state.main.urlBase+"comics/"+e.id+"/"+e.issue+"/"+t.cover}}},l=R,A=(i("a0f5"),i("2877")),f=i("eebe"),p=i.n(f),d=i("714f"),g=Object(A["a"])(l,c,o,!1,null,"f196fb0a",null),v=g.exports;p()(g,"directives",{Ripple:d["a"]});var m=i("5d72"),O={name:"Animation",components:{CharacterStore:v},data:function(){return{characters:[],characterName:"",intervalId:0,quoteOpacity:0}},created:function(){var e=this;this.characters=m.characters,this.setName(),h["a"].register(this,_["a"].STORE_BOOK_SELECTED,this.doStoreBookSelected),this.intervalId=setInterval((function(){e.animate()}),5e3),setTimeout((function(){e.quoteOpacity=0}),1e3),setTimeout((function(){e.quoteOpacity=0}),4e3)},computed:{frontCharacter:function(){for(var e=0;e<this.characters.length;e++)if("cf"===this.characters[e].position)return this.characters[e];return null}},methods:{animate:function(){for(var e=this,t=0;t<this.characters.length;t++)"cf"===this.characters[t].position?this.characters[t].position="lr":"lr"===this.characters[t].position?this.characters[t].position="rr":"rr"===this.characters[t].position&&(this.characters[t].position="cf");setTimeout((function(){e.quoteOpacity=0}),2300),setTimeout((function(){e.quoteOpacity=0}),4800)},getHeight:function(e){var t=this.characters[e].position;if("cf"===t){if("mobile"===this.$mq)return"206px";if("tablet"===this.$mq)return"413px";if("laptop"===this.$mq)return"573px";if("desktop"===this.$mq)return"819px"}if("lr"===t||"rr"===t){if("mobile"===this.$mq)return"98px";if("tablet"===this.$mq)return"197px";if("laptop"===this.$mq)return"273px";if("desktop"===this.$mq)return"455px"}return 0},getLeft:function(e){var t=this.characters[e].position;return"cf"===t?"30%":"rr"===t?"80%":"lr"===t?"10px":0},getName:function(){return this.characterName},getOpacity:function(e){var t=this.characters[e].position;return"cf"===t?1:"lr"===t||"rr"===t?.5:0},getQuote:function(e){return this.frontCharacter.quote},getQuoteOpacity:function(e){return this.quoteOpacity},getZ:function(e){var t=this.characters[e].position;return"cf"===t?10:5},doStoreBookSelected:function(e){var t=[e.cover];t=t.concat(e.preview),t=t.concat("EndofPreview.jpg");var i={id:e.id,issue:e.issue,pages:t};clearInterval(this.intervalId),this.$store.commit("main/SET_CURRENT_BOOK",i),"/reader"!==this.$route.path&&this.$router.push({path:"/reader"}).catch((function(){}))},setName:function(){this.characterName=this.frontCharacter.name}}},D=O,S=(i("966c"),i("8169")),C=Object(A["a"])(D,a,n,!1,null,"136e7d5f",null),T=C.exports;p()(C,"components",{QChatMessage:S["a"]});var B={name:"PageIndex",components:{Animation:T},created:function(){h["a"].broadcast(_["a"].SHOW_HEADER)}},N=B,w=(i("8041"),i("9989")),k=Object(A["a"])(N,r,s,!1,null,null,null);t["default"]=k.exports;p()(k,"components",{QPage:w["a"]})},"95b8":function(e,t,i){"use strict";i("55dd"),i("ac6a"),i("cadf"),i("5df3"),i("551c"),i("06db");var r=i("967e"),s=i.n(r),a=(i("96cf"),i("fa84")),n=i.n(a),c=i("fc74"),o=i.n(c),u=i("59a1"),E=i.n(u),_=i("c47a"),h=i.n(_),R=function(){function e(t,i){o()(this,e),this.id=t,this.issue=i,this.issue.length&&(this.issue=parseInt(this.issue))}return E()(e,null,[{key:"getFromServer",value:function(){var e=n()(s.a.mark((function e(t){var i,r;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET"});case 3:return i=e.sent,e.next=6,i.text();case 6:return r=e.sent,e.abrupt("return",{status:i.status,statusText:i.statusText,body:r,headers:i.headers,cookies:i.cookies});case 10:return e.prev=10,e.t0=e["catch"](0),e.abrupt("return",{status:500,body:JSON.stringify(e.t0)});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBooksFromServer",value:function(){var t=n()(s.a.mark((function t(i,r){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){r||t([]);var c=function(){var t=n()(s.a.mark((function t(r){var a,n;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=i+r.id+"/"+r.issue,t.next=3,e.getFromServer(a);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Promise.all(r.map(c)).then((function(e){for(var i=[],r=0;r<e.length;r++){var s=e[r];200===s.status&&i.push(JSON.parse(s.body))}t(i)}))})));case 1:case"end":return t.stop()}}),t)})));function i(e,i){return t.apply(this,arguments)}return i}()},{key:"getBook",value:function(e,t,i){if(!e)return null;for(var r=0;r<e.length;r++){var s=e[r];if(s.id===t&&s.issue===i)return s}return null}},{key:"hasBook",value:function(t,i,r){return!!e.getBook(t,i,r)}},{key:"sortBooks",value:function(t,i){if(t)if(e.SORT_BY_DATE===i){for(var r=t.length,s=1;s<r;s++){for(var a=t[s],n=s-1;n>=0&&parseInt(t[n].transactionDate)>parseInt(a.transactionDate);n--)t[n+1]=t[n];t[n+1]=a}t.reverse()}else if(e.SORT_BY_NAME===i){var c=function(e,t){return e.id===t.id?e.issue-t.issue:(""+e.id).localeCompare(t.id)};t.sort(c)}}}]),E()(e,[{key:"makeKey",value:function(){return this.id+" "+this.issue}}]),e}();h()(R,"SORT_BY_NAME",1),h()(R,"SORT_BY_DATE",2),t["a"]=R},"966c":function(e,t,i){"use strict";var r=i("d377"),s=i.n(r);s.a},a0f5:function(e,t,i){"use strict";var r=i("70d2"),s=i.n(r);s.a},a7ee:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i("fc74"),s=i.n(r),a=i("c47a"),n=i.n(a),c=function e(){s()(this,e)};n()(c,"CACHE_PAGE_LOADED","CACHE_PAGE_LOADED"),n()(c,"CACHE_PAGE_ADDED","CACHE_PAGE_ADDED"),n()(c,"CACHE_PAGE_REMOVED","CACHE_PAGE_REMOVED"),n()(c,"CACHE_PAGE_REFRESHED","CACHE_PAGE_REFRESHED"),n()(c,"CACHE_EXPIRED_PAGES_REFRESHED","CACHE_EXPIRED_PAGES_REFRESHED"),n()(c,"CACHE_CLEARED","CACHE_CLEARED"),n()(c,"CACHE_PAGE_FAULT","CACHE_PAGE_FAULT"),n()(c,"USER_SIGNED_IN","USER_SIGNED_IN"),n()(c,"USER_SIGNED_OUT","USER_SIGNED_OUT"),n()(c,"READER_NAV_BAR_FIRST_PAGE","READER_NAV_BAR_FIRST_PAGE"),n()(c,"READER_NAV_BAR_PREVIOUS_PAGE","READER_NAV_BAR_PREVIOUS_PAGE"),n()(c,"READER_NAV_BAR_NEXT_PAGE","READER_NAV_BAR_NEXT_PAGE"),n()(c,"READER_NAV_BAR_LAST_PAGE","READER_NAV_BAR_LAST_PAGE"),n()(c,"READER_NAV_BAR_HOME","READER_NAV_BAR_HOME"),n()(c,"READER_NAV_BAR_ENABLE_FIRST","READER_NAV_BAR_ENABLE_FIRST"),n()(c,"READER_NAV_BAR_ENABLE_PREVIOUS","READER_NAV_BAR_ENABLE_PREVIOUS"),n()(c,"READER_NAV_BAR_ENABLE_NEXT","READER_NAV_BAR_ENABLE_NEXT"),n()(c,"READER_NAV_BAR_ENABLE_LAST","READER_NAV_BAR_ENABLE_LAST"),n()(c,"READER_NAV_BAR_PROGRESS","READER_NAV_BAR_PROGRESS"),n()(c,"READER_NAV_BAR_ADD_TO_CART","READER_NAV_BAR_ADD_TO_CART"),n()(c,"READER_NAV_BAR_REMOVE_FROM_CART","READER_NAV_BAR_REMOVE_FROM_CART"),n()(c,"READER_NAV_BAR_ADD_TO_FAVORITES","READER_NAV_BAR_ADD_TO_FAVORITES"),n()(c,"READER_NAV_BAR_REMOVE_FROM_FAVORITES","READER_NAV_BAR_REMOVE_FROM_FAVORITES"),n()(c,"PURCHASED_BOOK_SELECTED","PURCHASED_BOOK_SELECTED"),n()(c,"STORE_BOOK_SELECTED","STORE_BOOK_SELECTED"),n()(c,"FAVORITES_BOOK_SELECTED","STORE_BOOK_SELECTED"),n()(c,"CART_BOOK_REMOVED","CART_BOOK_REMOVED"),n()(c,"HIDE_HEADER","HIDE_HEADER"),n()(c,"SHOW_HEADER","SHOW_HEADER"),n()(c,"HIDE_DRAWER","HIDE_DRAWER"),n()(c,"SHOW_DRAWER","SHOW_DRAWER"),n()(c,"USER_MESSAGE","USER_MESSAGE"),n()(c,"USER_ERROR","USER_ERROR")},af78:function(e,t,i){},d377:function(e,t,i){},d5eb:function(e,t,i){"use strict";i.d(t,"a",(function(){return E}));i("551c"),i("ac6a"),i("cadf"),i("06db"),i("5df3");var r=i("fc74"),s=i.n(r),a=i("59a1"),n=i.n(a),c=i("c47a"),o=i.n(c),u=i("a7ee"),E=function(){function e(){s()(this,e)}return n()(e,null,[{key:"register",value:function(t,i,r){e.listeners.push({listener:t,message:i,callback:r})}},{key:"isRegistered",value:function(t,i){for(var r=0;r<e.listeners.length;r++){var s=e.listeners[r];if(s.listener===t&&s.message===i)return!0}return!1}},{key:"unregister",value:function(t,i){for(var r=[],s=0;s<e.listeners.length;s++){var a=e.listeners[s];a.listener===t&&a.message===i&&r.push(e.listeners.splice(s,1)[0])}return r}},{key:"unregisterAll",value:function(){e.listeners=[]}},{key:"broadcast",value:function(t,i){for(var r=[],s=0;s<e.listeners.length;s++){var a=e.listeners[s];a.message===t&&(a.callback(i),r.push(a))}return r}},{key:"broadcastError",value:function(t){return e.broadcast(u["a"].ERROR,{message:t})}},{key:"broadcastNotification",value:function(t){return e.broadcast(u["a"].NOTIFICATION,{message:t})}},{key:"call",value:function(t,i){for(var r=[],s=0;s<e.listeners.length;s++){var a=e.listeners[s];a.message===t&&r.push(a.callback(i))}return Promise.all(r)}}]),e}();o()(E,"listeners",[])}}]);