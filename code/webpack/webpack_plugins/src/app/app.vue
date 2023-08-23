<template>
  <div class="page-index">
    <h2>{{ title }}</h2>
    <p class="des">{{ des }}</p>
  </div>
</template>

<script setup>
const title = 'h2标题'
const des = '内容'
</script>

<style>
.des {
  color: blue;
  font-size: 20px;
}
</style>
