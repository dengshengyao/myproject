<template>
  <div id="app">
	<transition :name="transitionName">
		<router-view/>
	</transition>
  </div>
</template>
<script>
	export default{
		data() {
		　　　　return {
		　　　　　　transitionName: 'van-slide-right'  // 默认动态路由变化为slide-right
		　　　　}
		　　},
		　　watch: {
		　　　'$route' (to, from) {
		　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
		　　　　　　if(isBack) {
		　　　　　　　　this.transitionName = 'van-slide-right'
		　　　　　　} else {
		　　　　　　       this.transitionName = 'van-slide-left'
		　　　　　}
		　　this.$router.isBack = false
		　　}
		　  }
	}
</script>
<style lang="less">
*{margin: 0;padding: 0;}
li{
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #2c3e50;
}

</style>
