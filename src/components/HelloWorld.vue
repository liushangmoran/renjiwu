<template>
<div>
   <el-image
      style="width: 100px; height: 100px"
      src="../../static/1.png"
      fit='fill'></el-image>
      <h1>人机物融合的云计算平台</h1>
<div>
</div>
<div style="border-bottom: solid 1px #e6e6e6;">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="border-bottom: none;left: 40%;">
  <el-menu-item index="1">处理中心</el-menu-item>
  
  <el-menu-item index="2" >消息中心</el-menu-item>
  <el-menu-item index="3">订单管理</el-menu-item>
</el-menu>
<div class="line"></div>


</div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>