<template class="a">
  <div class="panel">
    <el-row class="title-bar">北大数瑞数字对象体系可信平台（BDOA）</el-row>
    <el-row id="content">
      <el-row id="user-login">
        <el-row style="font-family: cursive">用户登录 </el-row>
        <el-row class="user">
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user"
            v-model="ruleForm.userName"
          ></el-input>
        </el-row>
        <el-row class="password">
          <el-input
            placeholder="密码"
            v-model="ruleForm.passWord"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-row>
        <el-row>
          <el-button type="primary" class="login-button">登陆</el-button>
        </el-row>
        <el-row>
          <el-button type="primary" class="login-button">注册</el-button>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        passWord: "",
        userName: "",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.title-bar {
  font-family: cursive;
  font-size: 22px;
  color: #fff !important;
  width: 800px;
  background-color: #2e324c !important;
  font-family: cursive;
  width: 100%;
}
.user {
  font-size: 8px;
}
.password {
  font-size: 8px;
}
#content{
  float: left;
  position: absolute;
  width: 800px;
  background-color: #F8F8FA !important;
  margin-top: -20px;
  margin-left: 4px;
  box-shadow: 0px 0px 5px #F8F8FA;
}
#user-login {
  float: left;
  position: absolute;
  padding: 20px 30px;
  margin-top: 10%;
  left: 28%;
  width: 420px;
  border-radius: 4px;
  background-color: #ddd0d096 !important;
  opacity: 0.9;
  box-shadow: 0px 0px 10px #ddd0d096;
}
.el-button--primary {
  color: #fff;
  background-color: #2e324c !important;
  border-color: #2e324c !important;
}
.login-button {
  font-size: 10px;
  width: 100%;
}
.panel{
  background-color:#f0f0f3;
    height: 608px;
    width: 76%;
}
</style>
