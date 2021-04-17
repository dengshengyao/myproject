<template>
	<div class="linksucc">
		<div class="main">
			<p>将设备共享给</p>
			<div>
				<div>+</div>
				<p>添加</p>
			</div>
		</div>
		<div class="loup">
			<!-- <p @click="go">跳过</p> -->
			<div class="button" @click="go">
				完成
			</div>
			<div><span>3</span>/3</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			go(){
				this.$router.replace({name:'Shuihulianjie'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.linksucc{
		.main{
			padding-left: 15px;
			padding-top: 37px;
			div{
				margin-top: 10px;
				width: 44px;
				div{
					width: 44px;
					height: 44px;
					box-sizing: border-box;
					border: 1px solid rgba(204, 204, 204, 1);
					border-radius: 50%;
					line-height: 42px;
					font-size: 24px;
					color: rgba(204, 204, 204, 1);
				}
				p{
					margin-top: 8px;
					text-align: center;
					color: rgba(56, 56, 56, 1);
				}
			}
			p{
				text-align: left;
				font-size: 14px;
			}
		}
		width: 375px;
		height: 667px - 44px - 220px;
		box-sizing: border-box;
		padding-bottom: 92px;
		position: relative;
		.button{
			width: 320px;
			height: 44px;
			box-sizing: border-box;
			border-radius: 22px;
			line-height: 42px;
			margin: 0 auto;
			margin-bottom: 12px;
			border: 1px solid rgba(204, 204, 204, 1);
		}
		overflow: hidden;
		.loup{
			position: absolute;
			width: 100%;
			height: 92px;
			bottom: 0;
			left: 0;
			color: rgba(80, 80, 80, 1);
			font-size: 14px;
			p{
				margin-top: 11px;
				line-height: 44px;
			}
			span{
				color: rgba(7, 188, 155, 1);
			}
		}
	}
</style>
