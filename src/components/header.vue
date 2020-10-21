<template>
<el-header>
  <div style="flat">
    <el-row>
      <el-col :span="3" :offset="3">
        <el-image
          style="width: 75%;"
          src="../../static/logo.png"
          fit="fill"
        ></el-image>
      </el-col>
      <el-col :span="12">
        <h1>
          <span
            style="font-weight: normal; font-family:cursive; color: #2e324c;font-size: 2em;"
            >人机物融合的云计算平台</span
          >
        </h1>
      </el-col>
    </el-row>
        
    <el-row style="border-bottom:1px solid rgb(230, 230, 230)">
      <el-col :span="12" :offset="4">
    
          <el-menu
          :default-active="index"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            style="border-bottom: none"
            router >
            <el-menu-item index="1" style="color:#2E324C;" @mouseover.native="mouseOver1">资源提供者</el-menu-item>
            <el-menu-item index="2" style="color:#2e324c;" @mouseenter.native="mouseOver2">资源使用者/应用开发者</el-menu-item>
            <el-menu-item index="3" style="color:#2e324c;" @mouseover.native="mouseOver3">资源联盟</el-menu-item>
          </el-menu>
          <!-- <div class="line"></div> -->
     
      </el-col>
      <el-col :span="4" style="padding-top: 1%">
    
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input"
            style="font-size: 10px;"
            size="small"
          
          >
            <el-button slot="append" style="color:white">搜索</el-button>
          </el-input>
       
      </el-col>
    </el-row>
  </div>
</el-header>
</template>
<script>
export default {
  props:['index'],
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
      index:"1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    mouseOver1:function(){
      this.index=1;
      this.$router.push({path:'/first'});
    },
    mouseOver2(){
      this.index=2;
      this.$router.push({path:'/second'});
    },
    mouseOver3:function(){
      this.index=3;
      this.$router.push({path:'/third'});
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
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 2px solid #2e324c;
}
.el-input-group__append{
  background-color: #2e324c !important;
}

</style>
