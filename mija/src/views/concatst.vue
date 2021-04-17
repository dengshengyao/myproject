<template>
	<div class="concatst">
		<div class="head">{{name}}<span v-if="as" @click="back">取消</span></div>
		<div class="watch">
			<img src="@/assets/imgs/346.png" alt="">
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:this.$route.params.names||'连接成功',
				as:this.$route.params.show
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.concatst{
		overflow: hidden;
		.watch{
			padding: 31px 0 35px 0;
			background-color: rgba(228, 228, 228, 1);
			img{
				width: 150px;
			}
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
