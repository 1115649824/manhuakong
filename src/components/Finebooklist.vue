<template>
    <div class="Finebooklist">
      <div class="Finebooklist-header">
        <div class="Finebooklist-header-left">
          <img src="../common/img/ic_ph.png"/>
          <span>{{Finebooklist.name}}</span>
        </div>
        <div class="Finebooklist-header-right">
          <span class="more">更多</span>
        </div>
      </div>
      <div class="Finebooklist-content">
        <div class="content" v-for="(item,index) in Finebooklist.speciallist" :key="index"><img :src="item.coverurl2"/><br><span>{{item.name}}</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Finebooklist',
      data () {
        return {
          Finebooklist: {}
        }
      },
      created () {
        this.$axios.get('/api/Finebooklist')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.Finebooklist = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
  .Finebooklist-header
    width 100%
    height 50px
    display flex
    .Finebooklist-header-left
      flex 0 0 250px
      position relative
    .Finebooklist-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .Finebooklist-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
    .Finebooklist-header-right
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
  .Finebooklist-content
      display flex
      width 100%
      height 260px
      flex-wrap wrap
      .content
        flex 1
        height 130px
        padding 0px  15px
      .content > img
        width 130px
        height 80px
      .content > span
        font-size 15px
</style>
