<template>
    <div class="recommend-list" ref="recommend">
      <div>
        <div class="pic" ref="banner">
          <ul ref="box">
            <li v-for="(img,index) in images" :key="index"><img :src="img"></li>
          </ul>
          <ol>
            <li v-for="i in images.length-1" :key="i" :class="{active:i-1 === index1}"></li>
          </ol>
        </div>
        <div class="icon-navigation">
          <ul>
            <li v-for="(item,index) in adpositionlist" :key="index" ><img :src="item.imageurl"/><br>{{item.name}}</li>
          </ul>
        </div>
        <split></split>
        <Recommendedthisweek></Recommendedthisweek>
        <split></split>
        <Exclusivestart></Exclusivestart>
        <split></split>
        <vip></vip>
        <split></split>
        <Maidenlove></Maidenlove>
        <split></split>
        <Officialactivities></Officialactivities>
        <split></split>
        <Finebooklist></Finebooklist>
      </div>
    </div>
</template>
<script>
  import split from './split'
  import Recommendedthisweek from './Recommendedthisweek'
  import Exclusivestart from './Exclusivestart'
  import vip from './vip'
  import Maidenlove from './Maidenlove'
  import Officialactivities from './Officialactivities'
  import Finebooklist from './Finebooklist'
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'recommend',
        mounted () {
          this.$nextTick(function () {
            clearInterval(this.timer)
            let box = this.$refs.box
            let banner = this.$refs.banner
            this.timer = setInterval(() => {
              this.index++
              box.style.transition = 'all .5s'
              box.style.transform = `translateX(${banner.offsetWidth * -this.index}px)`
            }, 2000)
          })
        },
        data () {
          return {
            timer: 0,
            index: 0,
            images: [
              require('../common/img/lyzcwy-gxb.jpg'),
              require('../common/img/rgspgxbfm.jpg'),
              require('../common/img/wdhdny1.jpg'),
              require('../common/img/wssw1.jpg'),
              require('../common/img/xwsj.jpg'),
              require('../common/img/ydcsjb.jpg'),
              require('../common/img/zyj.jpg'),
              require('../common/img/lyzcwy-gxb.jpg')
            ],
            adpositionlist: []
          }
      },
      watch: {
          index (val) {
            if (val > this.images.length - 1) {
              this.$refs.box.style.transition = 'none'
              this.$refs.box.style.transform = `translateX(0)`
              this.index = 0
            }
          }
      },
      computed: {
        index1 () {
          let result = this.index
          if (result === this.images.length - 1) {
            result = 0
          }
          return result
        }
      },
      created () {
          this.$axios.get('/api/adpositionlist')
            .then((res) => {
              res = res.data
              if (res.errno === 0) {
                this.adpositionlist = res.data
              }
            })
            .catch((error) => {
              alert(error)
            })
        this.$nextTick(() => {
          this._initScroll()
        })
      },
      components: {
          split,
          Recommendedthisweek,
          Exclusivestart,
          vip,
          Maidenlove,
          Officialactivities,
          Finebooklist
      },
      methods: {
        _initScroll () {
          if (!this.sellerScroll) {
            this.sellerScroll = new IScroll(this.$refs.recommend, {
              click: true
            })
          } else {
            this.sellerScroll.refresh()
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .recommend-list
    position absolute
    top 40px
    bottom 40px
    overflow hidden
  .pic
    width 100%
    margin-top 3px
    overflow hidden
    position relative
   & > ul
    width 1000%
    height 166px
   & > ul > li
    width 10%
    height 100%
    float left
   & > img
    width 100%
    height 100%
   & > ol
    position absolute
    bottom 10px
    left 35%
   & > ol > li
    width 5px
    height 5px
    border-radius 50%
    background rgb(252,253,253)
    margin: 0 5px;
    display: inline-block;
   .active
     background rgb(242,72,11)
   .icon-navigation
     height 80px
     width 100%
   .icon-navigation > ul
     width 100%
     height 80px
     display flex
   .icon-navigation > ul > li
     flex 1
     text-align center
     font-size 12px
     margin 10px auto
  .icon-navigation > ul > li > img
     width 40px
     height 40px
</style>
