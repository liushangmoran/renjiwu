<template>
  <el-container>
  <el-header style="height:auto"><navheader></navheader></el-header>
  <el-container style="background-color:#ededf0">
    <el-aside style="width: 210px;margin-left: 14%;"><sidebar style="width: 180px;"></sidebar></el-aside>
    <el-main style="padding: 18px" ><physicalDevice></physicalDevice></el-main>
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

</style>

