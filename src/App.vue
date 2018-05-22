<template>
  <div id="app">
    <search ref="select"></search>
    <div class="tab">
    <div class="tab-item"><router-link to="/recommend">推荐</router-link></div>
    <div class="tab-item"><router-link to="/list">榜单</router-link></div>
    <div class="tab-item"><router-link to="/classification">分类</router-link></div>
    <div class="tab-item"><router-link to="/novel">小说</router-link></div>
    <div class="icon-search" @click="search"></div>
    </div>
    <router-view></router-view>
    <div class="man-footer">
      <div class="footer-item"><router-link to="/recommend"><img src="./common/img/bookshelf.png"/><br/>书架</router-link></div>
      <div class="footer-item"><router-link to="/recommend"><img src="./common/img/g16.png"/><br/>书城</router-link></div>
      <div class="footer-item"><router-link to="/recommend"><img src="./common/img/compass90.png"/><br/>圈子</router-link></div>
      <div class="footer-item"><router-link to="/recommend"><img src="./common/img/young4.png"/><br/>我的</router-link></div>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search'
export default {
  name: 'App',
  methods: {
    search () {
      this.$refs.select.show()
    }
  },
  components: {
    Search
  }
}
</script>

<style lang="stylus" scoped>
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      position relative
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size 15px
          color rgb(47, 45, 48)
          &.active
            color rgb(46, 153, 235)
            border-bottom solid 3px rgb(20,164,235)
      .icon-search
        flex 0 0 80px
    .man-footer
      width 100%
      height 40px
      position absolute
      bottom 0
      display flex
    .footer-item
      flex 1
      text-align center
     img
      width 20px
      height 20px
    .footer-item > a
      color rgb(47, 45, 48)
      font-size 5px
</style>
