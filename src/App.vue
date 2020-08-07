<template>
  <div id="app">
    <router-view/>
    <main-toolbar></main-toolbar>
  </div>
</template>

<script>
import MainToolbar from "@/components/MainToolbar";

export default {
  components: {
    MainToolbar
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
</style>