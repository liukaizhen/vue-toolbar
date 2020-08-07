<template>
  <toolbar>
    <toolbar-item link="/home">
      <img slot="item-icon-select" src="../assets/img/home_select.png" alt="">
      <img slot="item-icon" src="../assets/img/home_unselect.png" alt="">
      <p slot="item-text">首页</p>
    </toolbar-item>

    <toolbar-item link="/find">
      <img slot="item-icon-select" src="../assets/img/find_select.png" alt="">
      <img slot="item-icon" src="../assets/img/find_unselect.png" alt="">
      <p slot="item-text">发现</p>
    </toolbar-item>

    <toolbar-item link="/school">
      <img slot="item-icon-select" src="../assets/img/school_select.png" alt="">
      <img slot="item-icon" src="../assets/img/school_unselect.png" alt="">
      <p slot="item-text">家校</p>
    </toolbar-item>

    <toolbar-item link="/message">
      <img slot="item-icon-select" src="../assets/img/message_select.png" alt="">
      <img slot="item-icon" src="../assets/img/message_unselect.png" alt="">
      <p slot="item-text">消息</p>
    </toolbar-item>

    <toolbar-item link="/profile">
      <img slot="item-icon-select" src="../assets/img/profile_select.png" alt="">
      <img slot="item-icon" src="../assets/img/profile_unselect.png" alt="">
      <p slot="item-text">我的</p>
    </toolbar-item>
  </toolbar>
</template>

<script>
import Toolbar from "@/components/toolbar/Toolbar";
import ToolbarItem from "@/components/toolbar/ToolbarItem";

export default {
  name: "MainToolbar",
  components: {
    ToolbarItem,
    Toolbar
  }
}
</script>

<style scoped>

</style>