<template>
    <div class="Maidenlove">
      <div class="Maidenlove-header">
        <div class="Maidenlove-header-left">
          <img src="../common/img/ic_sn.png"/>
          <span>{{Maidenlove.name}}</span>
        </div>
        <div class="Maidenlove-header-right">
          <span class="more">更多</span>
        </div>
      </div>
      <div class="Maidenlove-content">
        <div class="content" v-for="(item,index) in Maidenlove.comicslist" :key="index" @click="See(item.url)"><img :src="item.extension"/><br>{{item.bigbook_name}}<br><span>{{item.key_name}}</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Maidenlove',
      data () {
        return {
          Maidenlove: {}
        }
      },
      methods: {
        See (e) {
          window.location.href = e
        }
      },
      created () {
        this.$axios.get('/api/Maidenlove')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.Maidenlove = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
</script>

<style lang="stylus" scoped>
  .Maidenlove-header
    width 100%
    height 50px
    display flex
    .Maidenlove-header-left
      flex 0 0 250px
      position relative
    .Maidenlove-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .Maidenlove-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
    .Maidenlove-header-right
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
  .Maidenlove-content
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
