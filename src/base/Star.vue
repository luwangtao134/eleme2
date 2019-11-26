<template>
  <el-rate v-model="value" show-score :disabled='readOnly' :allow-half='true'>
</el-rate>
</template>
<script>
export default {
  props: {
    readOnly: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      value: 2
    }
  }
}
</script>
<style scoped lang='stylus'>

</style>
