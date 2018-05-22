<template>
    <div class="list">
          <div class="tab-left">
            <div class="tab-item" :class="{active:title==='人气'}" @click="clickFn('人气')"><span>人气榜</span></div>
            <div class="tab-item" :class="{active:title==='畅销'}" @click="clickFn('畅销')"><span>畅销榜</span></div>
            <div class="tab-item" :class="{active:title==='新书'}" @click="clickFn('新书')"><span>新书榜</span></div>
            <div class="tab-item" :class="{active:title==='完结'}" @click="clickFn('完结')"><span>完结榜</span></div>
            <div class="tab-item" :class="{active:title==='免费'}" @click="clickFn('免费')"><span>免费榜</span></div>
          </div>
          <div class="tab-right" ref="menuwrapper" v-show="this.showFlage">
            <Popularitylist></Popularitylist>
          </div>
      <div class="tab-right" ref="menuwrappertwo" v-show="this.showFlagetwo">
        <Bestsellinglist></Bestsellinglist>
      </div>
      <div class="tab-right" ref="menuwrapperthree" v-show="this.showFlagethree">
        <Newbooklist></Newbooklist>
      </div>
      <div class="tab-right" ref="menuwrapperfour" v-show="this.showFlagefour">
        <end></end>
      </div>
      <div class="tab-right" ref="menuwrapperfive" v-show="this.showFlagefive">
        <freebook></freebook>
      </div>
    </div>

</template>

<script>
  import Popularitylist from './Popularitylist'
  import Bestsellinglist from './Bestsellinglist'
  import freebook from './freebook'
  import end from './end'
  import Newbooklist from './Newbooklist'
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'list',
        data () {
          return {
            title: '人气',
            showFlage: true,
            showFlagetwo: false,
            showFlagethree: false,
            showFlagefour: false,
            showFlagefive: false
          }
        },
        methods: {
          clickFn (title) {
            this.title = title
          },
         initScroll () {
            if (!this.sellerScroll) {
              this.sellerScroll = new IScroll(this.$refs.menuwrapper, {
                click: true
              })
            } else {
              this.sellerScroll.refresh()
            }
          },
          initScrolltwo () {
            if (!this.Scroll) {
              this.Scroll = new IScroll(this.$refs.menuwrappertwo, {
                click: true
              })
            } else {
              this.Scroll.refresh()
            }
          },
          initScrollthree () {
            if (!this.three) {
              this.three = new IScroll(this.$refs.menuwrapperthree, {
                click: true
              })
            } else {
              this.three.refresh()
            }
          },
          initScrollfour () {
            if (!this.four) {
              this.four = new IScroll(this.$refs.menuwrapperfour, {
                click: true
              })
            } else {
              this.four.refresh()
            }
          },
          initScrollfive () {
            if (!this.five) {
              this.five = new IScroll(this.$refs.menuwrapperfive, {
                click: true
              })
            } else {
              this.five.refresh()
            }
          }
        },
      components: {
        Popularitylist,
        Bestsellinglist,
        freebook,
        end,
        Newbooklist
      },
      watch: {
        title (val) {
          if (val === '人气') {
            this.showFlage = true
          } else {
            this.showFlage = false
          }
          if (val === '畅销') {
            this.showFlagetwo = true
          } else {
            this.showFlagetwo = false
          }
          if (val === '新书') {
            this.showFlagethree = true
          } else {
            this.showFlagethree = false
          }
          if (val === '完结') {
            this.showFlagefour = true
          } else {
            this.showFlagefour = false
          }
          if (val === '免费') {
            this.showFlagefive = true
          } else {
            this.showFlagefive = false
          }
        }
      },
      beforeUpdate () {
        this.$nextTick(() => {
          this.initScroll()
          this.initScrolltwo()
          this.initScrollthree()
          this.initScrollfour()
          this.initScrollfive()
        })
      }
    }
</script>

<style lang="stylus" scoped>
  .list
    position absolute
    width 100%
    top 43px
    bottom 40px
    overflow hidden
    display flex
    border-top solid 1px #cccccc
  .tab-left
    flex  0 0 80px
    width 80px
    background-color #F7F5F8
    border-right solid 1px #cccccc
  .tab-item
    width 56px
    height 54px
    padding 0 12px
    line-height 14px
    font-size 8px
    color #727073
    position relative
  .tab-item > span
    position absolute
    top 30%
    left 25%
  .tab-right
    flex 1
  .active
    color #4695D0
    background-color white
    border-right solid 1px white
    border-bottom solid 1px #cccccc
    border-top solid 1px #cccccc
</style>
