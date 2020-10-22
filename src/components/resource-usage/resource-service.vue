<template>
  <div class="container">
    <el-row style="margin-bottom: 20px;">
      <el-input
        style="height: 30px；width:50%"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="searchValue"
        @input="queryData"
      >
       <!-- v-model="input" -->
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="5"
        ><div class="mydiv">
          计算资源
          <hr />
          <div class="items" v-for="(item,index) in computeResource" :key="index">{{item}}</div>
        </div>
        <div class="mydiv">
          数据资源
          <hr />
          <div class="items" v-for="(item,index) in dataResource" :key="index">{{item}}</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          存储资源
          <hr />
          <div class="items" v-for="(item,index) in storeResource" :key="index">{{item}}</div>
        </div>
        <div class="mydiv">
          服务资源
          <hr />
           <div class="items" v-for="(item,index) in serviceResource" :key="index">{{item}}</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          人力资源
          <hr />
          <div class="items" v-for="(item,index) in manpowerResource" :key="index">{{item}}</div>
        </div>
        <div class="mydiv">
          物理设备资源
          <hr />
          <div class="items" v-for="(item,index) in deviceResource" :key="index">{{item}}</div>
        </div></el-col
      >
      <el-col :span="5"
        ><div class="mydiv">
          管理服务
          <hr/>
          <div class="items" v-for="(item,index) in manageResource" :key="index">{{item}}</div>
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
      searchValue: "",
      computeResource:['云服务器','容器服务','智能合约'],
      dataResource:['外卖订单数据','淘宝订单数据','豆瓣歌单数据','天气数据','地图数据','空气质量数据'],
      storeResource:['数据库','文件存储','分布式账本'],
      serviceResource:['打车服务','购票服务','订座服务'],
      manpowerResource:['快递服务','送餐服务','保洁服务','跑腿服务','代办服务'],
      deviceResource:['空气净化器','体重秤','热水壶','咖啡机'],
      manageResource:['发现服务','计费服务','竞价服务','监控服务','安全管理','访问控制'],
      computeResource1:['云服务器','容器服务','智能合约'],
      dataResource1:['外卖订单数据','淘宝订单数据','豆瓣歌单数据','天气数据','地图数据','空气质量数据'],
      storeResource1:['数据库','文件存储','分布式账本'],
      serviceResource1:['打车服务','购票服务','订座服务'],
      manpowerResource1:['快递服务','送餐服务','保洁服务','跑腿服务','代办服务'],
      deviceResource1:['空气净化器','体重秤','热水壶','咖啡机'],
      manageResource1:['发现服务','计费服务','竞价服务','监控服务','安全管理','访问控制'],
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    queryData(){
                    //并没有输入关键字时，就不要再搜索了
                    if(this.searchValue===''||this.searchValue==null){
                        this.computeResource=JSON.parse(JSON.stringify(this.computeResource1));
                        this.dataResource=JSON.parse(JSON.stringify(this.dataResource1));
                        this.storeResource=JSON.parse(JSON.stringify(this.storeResource1));
                        this.serviceResource=JSON.parse(JSON.stringify(this.serviceResource1));
                        this.manpowerResource=JSON.parse(JSON.stringify(this.manpowerResource1));
                        this.deviceResource=JSON.parse(JSON.stringify(this.deviceResource1));
                        this.manageResource=JSON.parse(JSON.stringify(this.manageResource1));
                        return;
                    }
                    //搜索
                    let list=this.computeResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.computeResource=list;

                    let list1=this.dataResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.dataResource=list1;

                    let list2=this.storeResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.storeResource=list2;

                    let list3=this.serviceResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.serviceResource=list3;

                    let list4=this.manpowerResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.manpowerResource=list4;

                    let list5=this.deviceResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.deviceResource=list5;

                    let list6=this.manageResource1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.manageResource=list6;
                    
  }
  }
};
</script>