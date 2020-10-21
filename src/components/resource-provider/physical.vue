<template>
  <div style="flat">
   <el-container>
  <el-header><navHead></navHead></el-header>
  <el-container>
    <el-aside width="200px"></el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container> 

  </div>
</template>
<script>
import navHead from "../header";
import sidebar from "./sidebar";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
    };
  },
  components: {
    navHead,
    sidebar
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-item{
  padding:0 40px !important
}
</style>
<style>
.el-input-group__append{
  background-color: #2e324c !important;
}
</style>

