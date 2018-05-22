<template>
    <div class="Recommended-this-week">
      <div class="recommend-header">
        <div class="recommend-header-left">
          <img src="../common/img/ic_rq.png"/>
          <span>{{Recommended.name}}</span>
        </div>
        <div class="recommend-header-right">
          <span class="more">更多</span>
        </div>
      </div>
      <div class="recommend-content">
        <div class="content" v-for="(item,index) in Recommended.comicslist" :key="index"><img :src="item.extension" @click="See(item.url)"/><br>{{item.bigbook_name}}<br><span>{{item.key_name}}</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Recommendedthisweek',
        data () {
          return {
            Recommended: {}
          }
        },
      created () {
          this.$axios.get('/api/Recommended')
            .then((res) => {
              res = res.data
              if (res.errno === 0) {
                this.Recommended = res.data
              }
            })
            .catch((error) => {
              alert(error)
            })
      },
      methods: {
        See (e) {
          window.location.href = e
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .recommend-header
    width 100%
    height 50px
    display flex
    .recommend-header-left
      flex 0 0 250px
      position relative
    .recommend-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .recommend-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
    .recommend-header-right
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
  .recommend-content
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
