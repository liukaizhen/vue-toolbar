<template>
  <div class="toolbar-item" @click="clickItem">
    <div v-if="isSelect">
      <slot name="item-icon-select"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="isActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolbarItem",
  props: {
    link: {
      type: String
    },
    selectColor:{
      type: String,
      default: '#F8C509'
    }
  },
  computed: {
    isSelect(){
      return this.$route.path.includes(this.link)
    },
    isActive(){
      return this.isSelect ? {color: this.selectColor} : {}
    }
  },
  methods: {
    clickItem() {
      if (this.isSelect)return
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.toolbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 16px;
}

.toolbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
  margin-top: 2px;
}
</style>