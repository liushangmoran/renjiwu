<template>
  <el-container>
  <el-header style="height:auto"><navheader :index="'/resource-service'"></navheader></el-header>
  <el-container style="background-color:#ededf0;height:100%">
    <el-aside style="width: 210px;margin-left: 14%;"><sidebar style="width: 180px;"></sidebar></el-aside>
    <el-main style="padding: 18px" ><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>
<script>
import navheader from "../header";
//import physicalDevice from "./resource-provider/physical-device";
//import resourceService from "./resource-service";
//import appService from "./resource-usage/application-service";
//import bestPractice from "./resource-usage/best-practice";
 //import sidebar from "./resource-provider/sidebar";
import sidebar from "./sidebar";
export default {
  components:{
    navheader,
    sidebar
  }
};
</script>

<style>
  body{
    margin: 0px;
  }

</style>

