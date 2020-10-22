<template>
  <div class="container">
    <el-row style="margin-bottom: 20px;">
      <el-input
        style="height: 30px；width:50%"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="searchValue"
      >
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="5"
        >
        <div class="mydiv">开发服务<hr>
          <div class="items">集成开发环境</div>
          <div class="items">代码分析</div>
          <div class="items">项目管理</div>
          <div class="items">应用建模</div>
          <div class="items">项目协作服务</div>
          <div class="items">知识库服务</div>
        </div>
        
        </el-col
      >
      <el-col :span="5"
        >
        <div class="mydiv">运维服务<hr>
          <div class="items">日志服务</div>
          <div class="items">性能分析</div>
          <div class="items">监控服务</div>
          <div class="items">安全管理</div>
          <div class="items">访问控制</div>
        </div>
        </el-col
      >
    </el-row>
  </div>
</template>
<style>
hr{
  background-color:#eaeaea; 
  height:1.5px; 
  border:none;
  margin-bottom: 15px;
}
.items{
      margin-bottom: 20px;
      font-size: 13px;
}
.container{
  width: 73%;
    height: 607px;
    text-align: left;
    background-color: white;
    padding: 10px 20px 0 20px;
}
.el-col-5{
  width: 25%;
}
.mydiv {
  width: 70%;
  margin-bottom: 60px;
}
.el-input__inner {
  background-color: #f9f6f6;
  height: 30px;
}
.el-input__icon{
  line-height: 32px;
}
el-input {
  width: 95%;
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      searchValue: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
   
  },
};
</script>