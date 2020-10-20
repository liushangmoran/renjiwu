<template>
  <div style="flat">
    <el-row class="pic">
      <el-col :span="9">
        <el-row class="title">设备类型</el-row>
        <el-row
          id="chartOne"
          :style="{ width: '100%', height: '300px' }"
        ></el-row>
      </el-col>
      <el-col :span="9" :offset="1">
        <el-row class="title">设备品牌</el-row>
        <el-row
          id="chartTwo"
          :style="{ width: '100%', height: '300px' }"
        ></el-row>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-row class="title">设备数量</el-row>
        <el-row
          class="deviceAmount"
          :style="{ width: '100%', height: '120px' }"
        >
          <el-col
            ><el-image
              style="width: 50%; height: 40%; margin-top: 25%; margin-left: 10%"
              src="../../static/1.png"
              fit="fill"
            ></el-image
            >6
          </el-col>
        </el-row>
        <el-row class="title">设备位置</el-row>
        <el-row class="deviceArea" :style="{ width: '100%', height: '120px' }">
          <el-col
            ><el-image
              style="width: 50%; height: 40%; margin-top: 25%; margin-left: 10%"
              src="../../static/2.png"
              fit="fill"
            ></el-image
            >6
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="chart">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script >
export default {
 
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted() {
    this.drawLineOne();
    this.drawLineTwo();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    drawLineOne() {
      let myChart = this.$echarts.init(document.getElementById("chartOne"));
      var option = {
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "40%",
            data: [
              { value: 2, name: "视频广告" },
              { value: 2, name: "联盟广告" },
              { value: 3, name: "邮件营销" },
              { value: 3, name: "直接访问" },
              { value: 4, name: "搜索引擎" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : \n{c} ({d}%)",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
        legend: {
          top: "250px",
        },
        itemStyle: {
          normal: {
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawLineTwo() {
      let myChart = this.$echarts.init(document.getElementById("chartTwo"));
      var option = {
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "40%",
            data: [
              { value: 2, name: "视频广告" },
              { value: 2, name: "联盟广告" },
              { value: 3, name: "邮件营销" },
              { value: 3, name: "直接访问" },
              { value: 4, name: "搜索引擎" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : \n{c} ({d}%)",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
        legend: {
          top: "250px",
        },
        itemStyle: {
          normal: {
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.pic {
  font-family: cursive;
  font-size: 22px;
  
  width: 800px;
  height: 280px;
  
  font-family: cursive;
}
#chartOne {
  margin-top: -10%;
}
#chartTwo {
  margin-top: -10%;
}
.title {
  background-color: #2e324c !important;
  color: #fff !important;
}
.chart {
  font-family: cursive;
  font-size: 22px;
  margin-top: 7%;
  width: 800px;
  margin-top: 5%;
  height: 400px;
  top: 60%;
  
  font-family: cursive;
}
</style>

