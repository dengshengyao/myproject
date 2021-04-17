<template>
	<div class="shuihu">
		<h1><span @click="back"><</span>添加蓝牙设备</h1>
		<!-- <h2>发现米家恒温电水壶</h2>
		<p>请长按水壶保温键3秒来完成配对</p> -->
		<img src="@/assets/imgs/298.jpeg" alt="" @click="go">
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			go(){
				this.$router.push({name:'Shuihulianjie'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.shuihu{
		img{
			width: 100%;
		}
		h1{
			width: 100%;
			height: 44px;
			font-size: 16px;
			line-height: 44px;
			margin-top: 20px;
			position: relative;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
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
