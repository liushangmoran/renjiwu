<template>
  <el-container>
  <el-header style="height:auto"><navheader></navheader></el-header>
  <el-container style="background-color:#ededf0;height:100%">
    <el-aside style="width: 210px;margin-left: 14%;"><router-view style="width: 180px;"></router-view></el-aside>
    <el-main style="padding: 18px" ><router-view name="content"></router-view></el-main>
  </el-container>
</el-container>
</template>
<script>
import navheader from "./header";
export default {
  components:{
    navheader,
  }
};
</script>

<style>
  body{
    margin: 0px;
  }

</style>

