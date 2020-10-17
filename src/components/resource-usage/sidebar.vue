<template>
  <!-- sidebar -->
  <div style="width: 10%; height: 600px">
    <div class="title">资源使用者/应用开发者</div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2e324c"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <span>资源服务</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>

      <el-menu-item index="2">
        <span>应用服务</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item index="3">
        <span>最佳实践</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  height: 35px;
  background-color: #2e324c;
  color: white;
  border: 1px solid gray;
  line-height: 35px;
  font-size: 13px;
}
ul {
  border: 1px solid gray;
  width: 100%;
  height: 80%;
  text-align: left;
}
i {
    margin-left: 45%;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>