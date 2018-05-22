<template>
    <div class="Officialactivities">
      <div class="Officialactivities-header">
        <div class="Officialactivities-header-left">
          <img src="../common/img/ic_gf.png"/>
          <span>{{Officialactivities.name}}</span>
        </div>
    </div>
      <div class="Officialactivities-content" ref="official">
      <ul>
        <li v-for="(item,index) in Officialactivities.adpositionlist" :key="index"><img :src="item.imageurl"/></li>
      </ul>
    </div>
    </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
        name: 'Officialactivities',
      data () {
        return {
          Officialactivities: {}
        }
      },
      created () {
        this.$axios.get('/api/Officialactivities')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.Officialactivities = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
        this.$nextTick(() => {
          if (!this.sellerScroll) {
            this.sellerScroll = new IScroll(this.$refs.official, {
              click: true,
              scrollX: true,
              scrollY: false
            })
          } else {
            this.sellerScroll.refresh()
          }
        })
      }
    }
</script>

<style lang="stylus" scoped>
  .Officialactivities
      width 100%
      height 135px
  .Officialactivities-header
    width 100%
    height 50px
    display flex
    .Officialactivities-header-left
      flex 0 0 250px
      position relative
    .Officialactivities-header-left > img
      width 20px
      height 20px
      position absolute
      top 25%
      left 15px
    .Officialactivities-header-left > span
      position absolute
      top 30%
      left 43px
      font-weight bold
      font-size 17px
  .Officialactivities-content
      width 100%
      overflow hidden
  .Officialactivities-content > ul
      width 500%
  .Officialactivities-content > ul > li
      float left
      height 80px
      padding-left 8px
  .Officialactivities-content > ul > li > img
      width 140px
      height 80px
</style>
