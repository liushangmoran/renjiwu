<template>
  <!-- sidebar -->
  <div style="width: 100%; height: 720px;" class="side">
    <div class="title">
      资源提供者
      <i class="el-icon-circle-plus-outline"></i>
    </div>
    <el-menu
      :default-active="index"
      class="el-menu-vertical-demo"
      background-color="#2e324c"
      text-color="#fff"
      active-text-color="#ffd04b"
      router=true
    >
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <div>
          <span>计算资源</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
          <span>存储资源</span>
          <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <span>网络资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <span>数据资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <span>服务资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%;pointer-events: none" index="">
        <span>人力资源</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <el-menu-item style="padding-left:0%" index="/first" >
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
      index:"/first"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>