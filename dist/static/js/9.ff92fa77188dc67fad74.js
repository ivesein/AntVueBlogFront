webpackJsonp([9],{"2zgv":function(e,t){},"6Rjw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),r=a.n(i),n=a("exGp"),s=a.n(n),o=a("viA7"),c=a("6dj7"),g={data:function(){return{getArticlesByCategoryLoading:!1,articles:[],noData:!1,count:0,pageLimit:10,pageSize:1}},components:{Timeline:c.Timeline,TimelineItem:c.TimelineItem,TimelineTitle:c.TimelineTitle},beforeRouteUpdate:function(e,t,a){var i=e.query.pageSize?e.query.pageSize:1;this.getArticlesByCategory(e.params.id,i,this.pageLimit),a()},mounted:function(){var e=this.$route.query.pageSize?this.$route.query.pageSize:1;this.getArticlesByCategory(this.$route.params.id,e,this.pageLimit)},methods:{formatYearAndDate:function(e){var t,a,i,r,n=function(e){return e<10?"0"+e:e};return t=new Date(1e3*parseInt(e)),a=t.getFullYear(),i=t.getMonth()+1,r=t.getDate(),a+"-"+n(i)+"-"+n(r)},getArticlesByCategory:function(e,t,a){var i=this;return s()(r.a.mark(function n(){var s;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i.getArticlesByCategoryLoading=!0,r.prev=1,r.next=4,Object(o.e)(e,t,a);case 4:s=r.sent,i.getArticlesByCategoryLoading=!1,s.data.code?i.$message.error("获取列表失败"):(i.articles=s.data.data.article,i.noData=!(i.articles.length>0),i.count=s.data.data.count,i.pageSize=s.data.data.pageSize,i.pageLimit=s.data.data.pageLimit),r.next=14;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0),i.getArticlesByCategoryLoading=!1,i.$message.error("出错了");case 14:case"end":return r.stop()}},n,i,[[1,9]])}))()},handleCurrentChange:function(e){this.$router.push({path:"/categories/"+this.$route.params.id,query:{pageSize:e}})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-item"},[e.getArticlesByCategoryLoading?a("CustomSpin"):a("div",{staticClass:"category-item__list-container"},[e.noData?a("div",{staticClass:"category-item__no-data"},[e._v("\n      暂无数据\n    ")]):a("timeline",{attrs:{"timeline-theme":"rgba(0,0,0,0.3)"}},[a("timeline-title",{staticClass:"category-item__key",attrs:{"font-color":"#555"}},[e._v(e._s(e.$route.query.name)+" 分类")]),e._v(" "),e._l(e.articles,function(t,i){return a("timeline-item",{key:i},[a("a",{staticClass:"category-item__timeline-item-container",on:{click:function(a){e.$router.push({name:"Detail",params:{id:t._id}})}}},[a("span",{staticClass:"category-item__date"},[e._v(e._s(e.formatYearAndDate(Number(t.publishAt)/1e3)))]),e._v(" "),a("span",{staticClass:"category-item__title"},[e._v(e._s(t.title))])])])})],2),e._v(" "),e.count>e.pageLimit?a("el-pagination",{attrs:{"current-page":e.pageSize,"page-size":e.pageLimit,layout:"total, prev, pager, next",total:e.count},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageSize=t}}}):e._e()],1)],1)},staticRenderFns:[]};var l=a("VU/8")(g,u,!1,function(e){a("2zgv")},"data-v-635cfb60",null);t.default=l.exports}});
//# sourceMappingURL=9.ff92fa77188dc67fad74.js.map