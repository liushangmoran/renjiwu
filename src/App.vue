<template>
  <div id="app">
    <transition name="fade" mode="out-in">
 <router-view />
 </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body,#app{
  height: 100%;
}
 /* .fade-enter,
.fade-leave-to{
 visibility: hidden;
 opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
 transition: opacity .3s ease;
}
.fade-enter-to,
.fade-leave{
 visibility: visible;
 opacity: 1;
}
.component-fade-enter, .component-fade-leave-to
{
  opacity: 0;
} */
/* .component-fade-leave-active for below version 2.1.8 */ 
</style>
