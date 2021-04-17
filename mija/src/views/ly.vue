<template>
	<div class="ly">
		<h1><span @click="back"><</span>蓝牙网关</h1>
		<img src="@/assets/imgs/480.png" alt="">
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ly{
		h1{
			width: 100%;
			height: 44px;
			font-size: 16px;
			line-height: 44px;
			margin-top: 20px;
			position: relative;
			span{
				display: block;
				width: 44px;
				height: 44px;
				left: 0;
				top: 0;
				position: absolute;
			}
		}
	}
</style>
