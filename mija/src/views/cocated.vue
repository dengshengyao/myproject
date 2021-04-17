<template>
	<div class="concated">
		<div class="head">{{name}}<span  v-if="as">取消</span></div>
		<img src="@/assets/imgs/681.jpg" alt="">
		<div class="button" @click="go">
			下一步
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			go(){
				this.$router.replace({name:'Concat_ed',params:{names:'连接成功',show:false}})
			}
		},
		data(){
			return{
				name:this.$route.params.names||'连接工作WiFi',
				as:this.$route.params.show||true
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.concated{
		position: relative;
		img{
			width: 100%;
		}
		.button{
			width: 320px;
			height: 44px;
			box-sizing: border-box;
			border-radius: 22px;
			line-height: 42px;
			margin: 0 auto;
			border: 1px solid rgba(204, 204, 204, 1);
			position: absolute;
			bottom: -24px - 44px;
			left: 28px;
		}
		.head{
			width: 100%;
			height: 44px;
			line-height: 44px;
			font-size: 16px;
			color: rgba(56, 56, 56, 1);
			position: relative;
			span{
				position: absolute;
				display: block;
				float: left;
				width: 44px;
				left: 7px;
				top: 0;
			}
		}
	}
</style>
