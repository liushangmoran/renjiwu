<template>
  <el-container style="height:100%">
      <sidebar></sidebar>
      <el-container direction="vertical">
        <navheader></navheader>
        <el-main>
         <physicalDevice></physicalDevice>
        </el-main>
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

