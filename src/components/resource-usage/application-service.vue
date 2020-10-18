<template>
  <div class="container">
    <div class="content">
      <el-input
        style="height: 30px；width:50%"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="input"
      >
      </el-input>
      <div class="main">
        <div class="mydiv">开发服务<hr>
          <div class="items">集成开发环境</div>
          <div class="items">代码分析</div>
          <div class="items">项目管理</div>
          <div class="items">应用建模</div>
          <div class="items">项目协作服务</div>
          <div class="items">知识库服务</div>
        </div>
        <div class="mydiv">运维服务<hr>
          <div class="items">日志服务</div>
          <div class="items">性能分析</div>
          <div class="items">监控服务</div>
          <div class="items">安全管理</div>
          <div class="items">访问控制</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.items{
  height: 45px;
}
.main{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  margin: 15px auto;
  text-align: left;
}
.mydiv{
  width: 13%;
  margin-bottom: 60px;
}
.el-input__inner{
  background-color: #f9f6f6;
}
.container {
  width: 100%;
  height: 100%;
}
.content {
  height: 80%;
  padding: 10px;
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
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>