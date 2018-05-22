<template>
  <div>
      <div class="content" v-for="(item,index) in end.list" :key="index" @click="See(item.url)">
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
</template>

<script>
    export default {
        name: 'end',
      data () {
        return {
          end: {}
        }
      },
      created () {
        this.$axios.get('/api/end')
          .then(res => {
            res = res.data
            if (res.errno === 0) {
              this.end = res.data
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
