<template>
  <div style="flat">
    <div>
    <el-image
      style="width: 100px; height: 100px; float: left; left: 10%"
      src="../../static/logo.png"
      fit="fill"
    ></el-image>
    </div>
    <div>
      <div>
        <h1><span style="font-weight:normal;font-family:FZKai-Z03S;color:#2E324C">人机物融合的云计算平台</span></h1>
      </div>
      <div style="width:20%">
         <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input"
    style="font-size:10px">
  </el-input>
  
      </div>
    </div>
    <div style="border-bottom: solid 1px #e6e6e6">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        style="border-bottom: none;"
      >
        <el-menu-item index="1">资源提供者</el-menu-item>

        <el-menu-item index="2">资源使用者/应用开发者</el-menu-item>
        <el-menu-item index="3">资源联盟</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  
};
</script>
