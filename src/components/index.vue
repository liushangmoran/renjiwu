<template>
  <el-container>
  <el-header style="height:auto"><navheader></navheader></el-header>
  <el-container>
    <el-aside ><sidebar style="width: 180px;"></sidebar></el-aside>
    <el-main class="elMain"><physicalDevice></physicalDevice></el-main>
  </el-container>
</el-container>
</template>
<script>
import navheader from "./header";
import physicalDevice from "./resource-provider/physical-device";
import sidebar from "./resource-provider/sidebar";
export default {
  components:{
    navheader,
    physicalDevice,
    sidebar
  }
};
</script>

<style>
  body{
    margin: 0px;
  }
  .elMain{
  width: 800px;
  height: 800px;
  left: 11%;
  }
</style>

