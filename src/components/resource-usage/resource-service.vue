<template>
  <div class="container">
    <el-row style="margin-bottom: 20px;">
      <el-input
        style="height: 30px；width:50%"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
      >
       <!-- v-model="input" -->
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="5"
        ><div class="mydiv">
          计算资源
          <hr />
          <div class="items">云服务器</div>
          <div class="items">容器服务</div>
          <div class="items">智能合约</div>
        </div>
        <div class="mydiv">
          数据资源
          <hr />
          <div class="items">外卖订单数据</div>
          <div class="items">淘宝订单数据</div>
          <div class="items">豆瓣歌单数据</div>
          <div class="items">天气数据</div>
          <div class="items">地图数据</div>
          <div class="items">空气质量数据</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          存储资源
          <hr />
          <div class="items">数据库</div>
          <div class="items">文件存储</div>
          <div class="items">分布式账本</div>
        </div>
        <div class="mydiv">
          服务资源
          <hr />
          <div class="items">打车服务</div>
          <div class="items">购票服务</div>
          <div class="items">订座服务</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          人力资源
          <hr />
          <div class="items">快递服务</div>
          <div class="items">送餐服务</div>
          <div class="items">保洁服务</div>
          <div class="items">跑腿服务</div>
          <div class="items">代办服务</div>
        </div>
        <div class="mydiv">
          物理设备资源
          <hr />
          <div class="items">空气净化器</div>
          <div class="items">体重秤</div>
          <div class="items">热水壶</div>
          <div class="items">咖啡机</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          管理服务
          <hr/>
          <div class="items">发现服务</div>
          <div class="items">计费服务</div>
          <div class="items">竞价服务</div>
          <div class="items">监控服务</div>
          <div class="items">安全管理</div>
          <div class="items">访问控制</div>
        </div></el-col
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
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>