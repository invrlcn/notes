<template>
<div>
  <h2>Hello, Vue</h2>
  <p>{{title}}</p>
  <hello-world></hello-world>
</div>
  
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: '我是vue标题 ssss'
    }
  }
}
</script>
<style scoped>
  p {
    color: red
  }
</style>
