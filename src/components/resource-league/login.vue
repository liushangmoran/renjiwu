<template>
  <el-container>
  <el-header style="height:auto"><navheader></navheader></el-header>
  <el-container style="background-color:#ededf0">
    <el-aside style="width: 210px;margin-left: 14%;"><sidebar style="width: 180px;"></sidebar></el-aside>

    <el-main style="padding: 18px" ><dataview></dataview></el-main>
  </el-container>
</el-container>
</template>
<script>
import navheader from "../header";
//import physicalDevice from "./resource-provider/physical-device";
//import resourceService from "./resource-usage/resource-service";
//import appService from "./resource-usage/application-service";
//import bestPractice from "./resource-usage/best-practice";
 import sidebar from "./sidebar";
//import sidebar from "./resource-usage/sidebar";
import dataview from "./data-view"
export default {
  components:{
    navheader,
    dataview,
    sidebar
  }
};
</script>

<style>
  body{
    margin: 0px;
  }

</style>

