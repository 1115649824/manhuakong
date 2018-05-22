<template>
<div class="exclusivestart">
  <div class="exclusivestart-header">
    <div class="exclusivestart-header-left">
      <img src="../common/img/ic_yc.png"/>
      <span>{{Exclusivestart.name}}</span>
    </div>
    <div class="exclusivestart-header-right">
      <span class="more">更多</span>
    </div>
  </div>
  <div class="exclusivestart-content">
  <div class="exclusivestart-content-top">
    <img src="../common/img/vi15tlk83.webp-w750.jpg"/>
    <p>风起苍岚</p>
    <p class="small">菜鸟也能问鼎修真之巅!</p>
  </div>
    <div class="exclusivestart-content-bottom">
      <div class="bottom-content" v-for="(item,index) in Exclusivestart.comicslist" :key="index" @click="See(item.url)"><img :src="item.coverurl"/><p>{{item.bigbook_name}}</p><br/><span>{{item.key_name}}</span></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: 'Exclusivestart',
      data () {
          return {
            Exclusivestart: {}
          }
      },
      methods: {
        See (e) {
          window.location.href = e
        }
      },
      created () {
        this.$axios.get('/api/Exclusivestart')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.Exclusivestart = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
  .exclusivestart-header
    width 100%
    height 50px
    display flex
    .exclusivestart-header-left
      flex 0 0 250px
      position relative
    .exclusivestart-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .exclusivestart-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
    .exclusivestart-header-right
      flex 1
      position relative
      .more
        border solid 1px #878787
        color #878787
        text-align center
        font-size 12px
        border-radius 50px
        width 45px
        height 15px
        display inline-block
        line-height 15px
        position absolute
        top 25%
        left 10%
   .exclusivestart-content
     width 100%
     height 400px
     .exclusivestart-content-top
        width 100%
        height 200px
     .exclusivestart-content-top > img
        width 100%
        height 150px
     .exclusivestart-content-top > .small
        font-size 8px
        color #878787
     .exclusivestart-content-top > p
        padding 5px 10px
     .exclusivestart-content-bottom
        width 100%
        height 200px
        display flex
        .bottom-content
            flex 1
            height 200px
            position relative
        .bottom-content > img
            width 105px
            height 120px
            margin-top 25px
        .bottom-content > p
            width 90px
            height 16px
            padding-top 5px
            padding-left 5px
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
        .bottom-content > span
          padding-left 5px
          height 12px
          width 80px
          font-size 8px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          color #878787
          position absolute
          bottom 15px
</style>
