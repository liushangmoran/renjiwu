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
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="5"
        >
        <div class="mydiv">开发服务<hr>
        <div class="items" v-for="(item,index) in developService" :key="index">{{item}}</div>
        </div>
        
        </el-col
      >
      <el-col :span="5"
        >
        <div class="mydiv">运维服务<hr>
        <div class="items" v-for="(item,index) in operateService" :key="index">{{item}}</div>
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
      searchValue: "",
      developService:['集成开发环境','代码分析','项目管理','应用建模','项目协作服务','知识库服务'],
      operateService:['日志服务','性能分析','监控服务','安全管理','访问控制'],

      developService1:['集成开发环境','代码分析','项目管理','应用建模','项目协作服务','知识库服务'],
      operateService1:['日志服务','性能分析','监控服务','安全管理','访问控制'],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
   queryData(){
                    //并没有输入关键字时，就不要再搜索了
                    if(this.searchValue===''||this.searchValue==null){
                        this.developService=JSON.parse(JSON.stringify(this.developService1));
                        this.operateService=JSON.parse(JSON.stringify(this.operateService1));
                        return;
                    }
                    //搜索
                    let list=this.developService1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.developService=list;

                    let list1=this.operateService1.filter(item=>item.indexOf(this.searchValue)>=0);
                    this.operateService=list1;

                    
  }
  },
};
</script>