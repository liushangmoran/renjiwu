<template>
  <!-- sidebar -->
  <div style="width: 100%; height: 720px;" class="side">
    <div class="title">
      资源联盟
    </div>
    <el-menu
      :default-active="index"
      class="el-menu-vertical-demo"
      background-color="#2e324c"
      text-color="#fff"
      active-text-color="#ffd04b"
      router=true
    >
      <el-menu-item style="padding-left:0%" index="/third" @mouseover.native="mouseOver1">
        <div>
          <span>数据视角</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
          <span>运维视角</span>
          <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <span>应用视觉</span>
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
      index:"/third"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    mouseOver1:function()
    {
      this.index = '/third';
      this.$router.push({path:'/third'});
    },
  },
};
</script>