<template>
  <div class="tool-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Toolbar"
}
</script>

<style scoped>
.tool-bar {
  height: 49px;
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>