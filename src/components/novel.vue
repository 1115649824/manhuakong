<template>
    <div class="novel" ref="novelwrapper">
      <div>
        <div class="novel-header">
          <ul>
            <li><img src="../common/img/catalog256.png"/><br/><span>小说分类</span></li>
            <li><img src="../common/img/app-spotlight.png"/><br/><span>小说搜索</span></li>
            <li><img src="../common/img/awards.png"/><br/><span>人气排行</span></li>
            <li><img src="../common/img/book.png"/><br/><span>精品书单</span></li>
          </ul>
        </div>
        <split></split>
        <div class="novel-list">
          <div class="novel-top">
            {{retui.name}}
          </div>
          <div class="novel-content" v-for="(item,index) in retui.list" :key="index">
            <div class="novel-content-left">
              <img :src="item.imageurl">
            </div>
            <div class="novel-content-right">
              <p>{{item.bookname}}</p><br>
              <span>{{item.author}}</span>
            </div>
          </div>
        </div>
        <split></split>
        <div class="novel-list">
          <div class="novel-top">
            {{jinpin.name}}
          </div>
          <div class="novel-content" v-for="(item,index) in jinpin.list" :key="index">
            <div class="novel-content-left">
              <img :src="item.imageurl">
            </div>
            <div class="novel-content-right">
              <p>{{item.bookname}}</p><br>
              <span>{{item.author}}</span>
            </div>
          </div>
        </div>
        <split></split>
        <div class="novel-list">
          <div class="novel-top">
            {{xinshu.name}}
          </div>
          <div class="novel-content" v-for="(item,index) in xinshu.list" :key="index">
            <div class="novel-content-left">
              <img :src="item.imageurl">
            </div>
            <div class="novel-content-right">
              <p>{{item.bookname}}</p><br>
              <span>{{item.author}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import split from './split'
    import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'novel',
      components: {split},
      data () {
          return {
            retui: {},
            jinpin: {},
            xinshu: {}
          }
      },
      created () {
        this.$axios.get('/api/retui')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.retui = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/jinpin')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.jinpin = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/xinshu')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.xinshu = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      },
      beforeUpdate () {
        this.$nextTick(() => {
          this.novelScroll()
        })
      },
      methods: {
        novelScroll () {
          if (!this.sellerScroll) {
            this.sellerScroll = new IScroll(this.$refs.novelwrapper, {
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
.novel
  position absolute
  top 43px
  bottom 40px
  overflow hidden
  width 100%
.novel-header
  width 100%
  border-top solid 1px #cccccc
.novel-header > ul
  display flex
.novel-header > ul > li
  flex 1
  padding 15px 0
.novel-header > ul > li > img
  width 50px
  height 50px
  padding 0px 15px
.novel-header > ul > li > span
  font-size 10px
  text-align center
  padding-left 15px
.novel-top
  padding-left 10px
  padding-top 10px
.novel-content
  display flex
.novel-content > novel-content-left
  flex 1
.novel-content-right
  flex 1
.novel-content-left > img
    width 80px
    height 100px
    padding-left 10px
    padding-top 15px
.novel-content-right > span
    font-size 8px
    color #cccccc
    padding-left 20px
    padding-top 15px
.novel-content-right > p
    padding-left 20px
    padding-top 15px
</style>
