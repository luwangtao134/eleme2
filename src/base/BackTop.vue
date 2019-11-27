<template>
  <div class="back" v-show='isShow' @click="go">
      UP
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {isShow: false}
  },
  created () {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop
      const height = document.documentElement.clientHeight
      if (top >= height) {
        this.isShow = true
      } else if (top === 0) { this.isShow = false }
    })
  },
  methods: {
    go () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.back
 width: 1.066667rem /* 80/75 */;
 height: 1.066667rem /* 80/75 */;
 line-height: 1.066667rem /* 80/75 */;
 position: fixed;
 right: .266667rem /* 20/75 */;
 bottom: 2rem /* 150/75 */;
 border: 2px solid #ccc;
 background: #fff;
 text-align: center;
 z-index: 99;
</style>
