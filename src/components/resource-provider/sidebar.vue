<template>
  <!-- sidebar -->
  <div style="width: 10%; height: 800px;marg">
    <div class="title">
      资源提供者
      <i class="el-icon-circle-plus-outline"></i>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2e324c"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item style="padding-left:0%" index="1">
        <div>
          <span>计算资源</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="2">
          <span>存储资源</span>
          <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="3">
        <span>网络资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="4">
        <span>数据资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="5">
        <span>服务资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="6">
        <span>人力资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="7">
        <span>物理设备资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      
    </el-menu>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  height: 40px;
  background-color: #2e324c;
  color: white;
  border: 1px solid gray;
  line-height: 45px;
  font-size: 15px;
}
ul {
  border: 1px solid gray;
  width: 100%;
  height: 80%;
  text-align: center;
}
.el-icon-arrow-right {
    margin-left: 15%;
    line-height: 56px;
    position:absolute;
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