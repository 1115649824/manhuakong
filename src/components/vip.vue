<template>
    <div class="vip">
      <div class="vip-header">
        <div class="vip-header-left">
          <img src="../common/img/ic_vip.png"/>
          <span>{{free.name}}</span>
        </div>
        <div class="vip-header-right">
          <span class="more">更多</span>
        </div>
      </div>
      <div class="vip-content">
        <div class="content" v-for="(item,index) in free.comicslist" :key="index" @click="See(item.url)"><img :src="item.extension"/><br>{{item.bigbook_name}}<br><span>{{item.key_name}}</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'vip',
        data () {
          return {
            free: {}
          }
        },
      methods: {
        See (e) {
          window.location.href = e
        }
      },
        created () {
         this.$axios.get('/api/free')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.free = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
  .vip-header
    width 100%
    height 50px
    display flex
    .vip-header-left
      flex 0 0 250px
      position relative
    .vip-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .vip-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
    .vip-header-right
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
  .vip-content
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
        font-size 8px
        color #878787
</style>
