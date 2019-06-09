<template>
   <div class="base">
      Testing
   </div>
</template>

<script>
export default {
  name: 'dev-splashscreen',
  data: function () {
    return {
      engageBlur: true
    }
  },
  created: function () {
    this.$emit('engage-blur', this.data.engageBlur)
  }
}
</script>

<style scoped>
   .base {
      position: absolute;
      top: 0;
      min-height: 1px;
      width: 100%;
      height: 100%;
      background-color: red;
      opacity: 0.5;
   }
</style>
