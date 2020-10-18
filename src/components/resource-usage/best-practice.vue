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
          <div class="items">智慧城市</div>
          <div class="items">数据检索</div>
          <div class="items">电子政务</div>
          <div class="items">智能家居</div>
          <div class="items">更多</div>
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