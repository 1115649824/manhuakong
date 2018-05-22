<template>
    <div class="classification">
      <div class="tab-left">
        <div class="tab-item" :class="{active:title==='热血'}" @click="clickFn('热血')"><span>热血</span></div>
        <div class="tab-item" :class="{active:title==='恋爱'}" @click="clickFn('恋爱')"><span>恋爱</span></div>
        <div class="tab-item" :class="{active:title==='搞笑'}" @click="clickFn('搞笑')"><span>搞笑</span></div>
        <div class="tab-item" :class="{active:title==='科幻'}" @click="clickFn('科幻')"><span>科幻</span></div>
        <div class="tab-item" :class="{active:title==='悬疑'}" @click="clickFn('悬疑')"><span>悬疑</span></div>
      </div>
      <div class="tab-right" ref="menuwrapper" v-show="this.showFlage">
        <div>
          <div class="content" v-for="(item,index) in popularitytwo.list" :key="index" @click="See(item.url)">
            <div class="content-left">
              <img :src="item.imageurl"/>
            </div>
            <div class="content-middle">
              <h3>{{item.bookname}}</h3>
              <p>{{item.popularity}}</p>
              <p>{{item.type}}</p>
              <p>{{item.update}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-right" ref="menuwrappertwo" v-show="this.showFlagetwo">
        <div>
          <div class="content" v-for="(item,index) in recommendone.list" :key="index"  @click="See(item.url)">
            <div class="content-left">
              <img :src="item.imageurl"/>
            </div>
            <div class="content-middle">
              <h3>{{item.bookname}}</h3>
              <p>{{item.popularity}}</p>
              <p>{{item.type}}</p>
              <p>{{item.update}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-right" ref="menuwrapperthree" v-show="this.showFlagethree">
        <div>
          <div class="content" v-for="(item,index) in endone.list" :key="index">
            <div class="content-left">
              <img :src="item.imageurl"/>
            </div>
            <div class="content-middle">
              <h3>{{item.bookname}}</h3>
              <p>{{item.popularity}}</p>
              <p>{{item.type}}</p>
              <p>{{item.update}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-right" ref="menuwrapperfour" v-show="this.showFlagefour">
        <div>
          <div class="content" v-for="(item,index) in recommendtwo.list" :key="index">
            <div class="content-left">
              <img :src="item.imageurl"/>
            </div>
            <div class="content-middle">
              <h3>{{item.bookname}}</h3>
              <p>{{item.popularity}}</p>
              <p>{{item.type}}</p>
              <p>{{item.update}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-right" ref="menuwrapperfive" v-show="this.showFlagefive">
        <div>
          <div class="content" v-for="(item,index) in endtwo.list" :key="index">
            <div class="content-left">
              <img :src="item.imageurl"/>
            </div>
            <div class="content-middle">
              <h3>{{item.bookname}}</h3>
              <p>{{item.popularity}}</p>
              <p>{{item.type}}</p>
              <p>{{item.update}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
      name: 'classification',
      data () {
        return {
          title: '热血',
          showFlage: true,
          showFlagetwo: false,
          showFlagethree: false,
          showFlagefour: false,
          showFlagefive: false,
          popularitytwo: {},
          recommendone: {},
          endone: {},
          recommendtwo: {},
          endtwo: {}
        }
      },
      methods: {
        See (e) {
          window.location.href = e
        },
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
      created () {
        this.$axios.get('/api/popularitytwo')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.popularitytwo = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/recommendone')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.recommendone = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/endone')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.endone = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/recommendtwo')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.recommendtwo = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$axios.get('/api/endtwo')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.endtwo = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      },
      watch: {
        title (val) {
          if (val === '热血') {
            this.showFlage = true
          } else {
            this.showFlage = false
          }
          if (val === '恋爱') {
            this.showFlagetwo = true
          } else {
            this.showFlagetwo = false
          }
          if (val === '搞笑') {
            this.showFlagethree = true
          } else {
            this.showFlagethree = false
          }
          if (val === '科幻') {
            this.showFlagefour = true
          } else {
            this.showFlagefour = false
          }
          if (val === '悬疑') {
            this.showFlagefive = true
          } else {
            this.showFlagefive = false
          }
          this.$nextTick(() => {
            this.initScroll()
            this.initScrolltwo()
            this.initScrollthree()
            this.initScrollfour()
            this.initScrollfive()
          })
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .classification
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
  .content
    display flex
  .content-middle
    flex 2
  .content-left
    flex 1
    margin-top 20px
    margin-left 20px
  .content-left > img
    width 100px
    height 130px
  .content-middle
    margin-top 30px
    margin-left 10px
  .content-middle > p
    padding-top 18px
    color #ADADAD
    font-size 10px
</style>
