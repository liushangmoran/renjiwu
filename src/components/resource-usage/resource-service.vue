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
      <el-row>

      </el-row>
      <el-row>
        
      </el-row>
    </div>
  </div>
</template>
<style>
.el-input__inner {
  height: 30px;
  line-height: 30px;
  width: 95%;
  margin-top: 10px;
}
.el-input__icon {
  line-height: 30px;
  margin-top: 10px;
  margin-left: 35px;
}
.container {
  width: 100%;
  height: 100%;
}
.content {
  height: 80%;
  background-color: gray;
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