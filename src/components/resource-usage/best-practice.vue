<template>
  <div class="container">
    <el-row style="margin-bottom: 20px;">
      <el-input
        style="height: 30px；width:50%"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="input"
      >
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div class="myDiv">
          <div class="items">智慧城市</div>
          <div class="items">数据检索</div>
          <div class="items">电子政务</div>
          <div class="items">智能家居</div>
          <div class="items">更多</div>
        </div>
        </el-col>
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
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>