<template>
  <transition name="show">
    <div class="search" v-show="showFlag" ref="search">
      <div class="search-top">
        <input type="text" placeholder="搜帖子,话题,大V"/>
        <span @click="hide">取消</span>
      </div>
      <div class="search-header">
        <p>漫画热门搜索</p><span><img src="../common/img/arrows64.png"/></span>
      </div>
      <div class="search-content">
        <ul>
          <li v-for="(item,index) in recommendone.list" :key="index">{{item.bookname}}</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'Search',
        data () {
          return {
            showFlag: false,
            recommendone: {}
          }
        },
        methods: {
          show () {
            this.showFlag = true
          },
          hide () {
            this.showFlag = false
          }
        },
      created () {
        this.$axios.get('/api/recommendone')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.recommendone = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  z-index 30
  background #fff
  position fixed
  transition all .2s linear
  &.show-enter, &.show-leave-to
    transform translateX(100%)
  input
    border-radius 4px
    border none
    height 25px
    width 250px
    position absolute
    left 5%
    top 25%
  .search-top
    width 100%
    height 50px
    background-color rgb(20,164,235)
    position relative
  .search-top > span
    color white
    position absolute
    right 5%
    top 35%
  .search-header
    position relative
    height 30px
  .search-header > p
    font-size 8px
    color #878787
    position absolute
    top 40%
    left 5%
  .search-header > span > img
    width 15px
    height 15px
  .search-header > span
    position absolute
    right 3%
    top 35%
  .search-content
    width 100%
    height 100%
  .search-content > ul
    width 100%
    height 100%
  .search-content > ul > li
    background-color #EBEBEB
    padding 5px 5px
    float left
    margin-left 13px
    font-size 10px
    margin-top 10px
</style>
