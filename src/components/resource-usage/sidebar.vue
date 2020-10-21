<template>
  <!-- sidebar -->
  <div style="width: 100%; height: 720px;" class="side">
    <div class="title">
      资源使用者/应用开发者
    </div>
    <el-menu
      default-active="/resource-service"
      class="el-menu-vertical-demo"
      background-color="#2e324c"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item style="padding-left:0%" index="/resource-service" @mouseover.native="mouseOver1">
        <div>
          <span>资源服务</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="/application-service" @mouseover.native="mouseOver2">
          <span>应用服务</span>
          <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="/best-practice" @mouseover.native="mouseOver3">
        <span>最佳实践</span>
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
.side
{
  margin-top: 8%;
  height: 280px;
  margin-left: 10%;
  font-family: cursive;
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
    mouseOver1:function()
    {
      this.$router.push({path:'/resource-service'});
    },
    mouseOver2:function()
    {
      this.$router.push({path:'/application-service'});
    },
    mouseOver3:function()
    {
      this.$router.push({path:'/best-practice'});
    },
  },
};
</script>