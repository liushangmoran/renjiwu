<template>
  <div style="flat">
    <el-row class="pic">
      <el-col :span="9">
        <el-row class="title">设备类型</el-row>
        <el-row
          id="chartOne"
          :style="{ width: '100%', height: '245px', background: 'white' }"
        ></el-row>
      </el-col>
      <el-col :span="9" :offset="1">
        <el-row class="title">设备品牌</el-row>
        <el-row
          id="chartTwo"
          :style="{ width: '100%', height: '245px', background: 'white' }"
        ></el-row>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-row class="title">设备数量</el-row>
        <el-row
          class="deviceAmount"
          :style="{ width: '100%', height: '98px', background: 'white' }"
        >
          <el-col :span="16"
            ><el-image
              style="width: 50%; height: 40%; margin-top: 10%; margin-left: 40%"
              src="../../static/1.png"
              fit="fill"
            ></el-image
            >
            </el-col>
            <el-col :span="8">
              <div style="margin-top: 45%;margin-right: 90%;">6</div>
            
          </el-col>
        </el-row>
        <el-row class="title">设备位置</el-row>
        <el-row 
          class="deviceArea"
          :style="{ width: '100%', height: '98px', background: 'white' }"
        >
          <el-col :span="16"
            ><el-image
              style="width: 50%; height: 40%; margin-top: 10%; margin-left: 40%"
              src="../../static/2.png"
              fit="fill"
            ></el-image
            >
            </el-col><el-col :span="8">
              <div style="margin-top: 45%;margin-right: 90%;">3</div>
            </el-col>
          
        </el-row>
      </el-col>
    </el-row>
    <el-row class="chart">
      <el-table :data="tableData" height="328" style="width: 100%">
        <el-table-column prop="name" label="设备名称" width="180">
        </el-table-column>
        <el-table-column prop="handle" label="DO Handle" width="180">
        </el-table-column>
        <el-table-column prop="type" label="设备类型"> </el-table-column>
        <el-table-column prop="address" label="设备位置"> </el-table-column>
        <el-table-column prop="brand" label="品牌"> </el-table-column>
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
          name: "Life-sense Weight",
          handle: "86.5000.470/do.hw2k2Lopxw",
          type: "体重秤",
          address: "燕园大夏813",
          brand: "乐心",
        },
        {
          name: "Haier Air Box",
          handle: "86.5000.470/do.f6gvjwg7lf",
          type: "空气质量检测仪",
          address: "燕园大夏813",
          brand: "海尔",
        },
        {
          name: "MI Air Purifier",
          handle: "86.5000.470/do.TQFnzOumvM",
          type: "空气净化器",
          address: "燕园大夏813",
          brand: "小米",
        },
        {
          name: "MI PM2.5 Detector",
          handle: "86.5000.470/do.jNqym6tnyW",
          type: "空气质量检测仪",
          address: "燕园大夏818",
          brand: "小米",
        },
        {
          name: "American Tank",
          handle: "86.5000.470/do.OHr9ZYl2ji",
          type: "扫地机器人",
          address: "燕园大夏818",
          brand: "iRobot",
        },
        {
          name: "Smal Kettle",
          handle: "86.5000.470/do.YfdaMFETRd",
          type: "热水壶",
          address: "燕园大夏820",
          brand: "西摩",
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
            radius: "30%",
            center: ["50%", "60%"],
            data: [
              { value: 2, name: "空气质量检测仪" },
              { value: 1, name: "体重秤" },
              { value: 1, name: "空气净化器" },
              { value: 1, name: "扫地机器人" },
              { value: 1, name: "热水壶" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "设备类型\n{b}:\n{c}({d}%)",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
        legend: {
          top: "1px",
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
            center: ["50%", "60%"],
            data: [
              { value: 2, name: "小米" },
              { value: 1, name: "乐心" },
              { value: 1, name: "海尔" },
              { value: 1, name: "iRobot" },
              { value: 1, name: "西摩" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "设备品牌\n{b} : \n{c} ({d}%)",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
        legend: {
          top: "1px",
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
.el-table {
  font-size: 11px;
  color: #2e324c !important;
}
.has-gutter {
  font-size: 11px !important;
  color: #2e324c !important;
}
.deviceAmount {
  margin-bottom: 16%;
  padding-top: 8%;
}
.deviceArea{
  padding-top: 8%;
}
.pic {
  font-family: cursive;
  font-size: 22px;
  width: 76%;
  height: 280px;
  font-family: cursive;
}
.title {
  background-color: #2e324c !important;
  color: #fff !important;
}
.chart {
  font-family: cursive;
  font-size: 22px;
  margin-top: 7%;
  width: 76%;
  margin-top: 1%;
  height: 327px;
  top: 60%;
  font-family: cursive;
  background-color: white;
  margin-bottom: 0px;
}
.col {
  font-size: 8px;
}
</style>

