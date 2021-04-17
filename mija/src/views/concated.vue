<template>
	<div class="concated">
		<div class="top">
			<p>选择设备所在位置</p>
			<ul class="lis">
				<li>默认房间</li>
				<li>+</li>
			</ul>
		</div>
		<div class="main">
			<div>推荐标签</div>
			<ul class="lis">
				<li v-for="val in lis">{{val}}</li>
			</ul>
		</div>
		<div class="loup">
			<p @click="go">跳过</p>
			<div><span>1</span>/3</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lis:['客厅','卧室','餐厅','卫生间','浴室','厨房','儿童房','婴儿房','活动室','媒体房','办公室','休闲房','书房','工作室','衣帽间','健身房','工作间','教室']
			}
		},
		methods:{
			go(){
				this.$router.replace({name:'Concat_rd',params:{names:'连接成功',show:false}})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.concated{
		width: 375px;
		height: 667px - 44px - 220px;
		box-sizing: border-box;
		padding-bottom: 92px;
		position: relative;
		overflow: hidden;
		.main{
			height: 198px;
			width: 100%;
			padding-right: 20px;
			overflow-y: auto;
			div{
				color: rgba(56, 56, 56, 1);
				font-size: 14px;
				margin-top: 15px;
			}
			ul{
				margin-top: 13px;
				margin-left: 25px;
				padding-bottom: 15px;
				width: 312px;
				height: 36px;
				li{
					float: left;
					box-sizing: border-box;
					height: 36px;
					line-height: 36px;
					padding: 0 16px;
					margin-right: 15px;
					color: rgba(204, 204, 204, 1);
					border: 1px solid rgba(204, 204, 204, 1);
					border-radius: 4px;
					margin-top: 15px;
				}
			}
		}
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
		.top{
			p{
				margin-top: 30px;
				font-size: 14px;
			}
			.lis{
				margin-top: 13px;
				margin-left: 25px;
				padding-bottom: 15px;
				width: 312px;
				height: 36px;
				border-bottom: 1px solid #e0e0e0;
				li{
					float: left;
					box-sizing: border-box;
					height: 36px;
					line-height: 36px;
					padding: 0 16px;
					margin-right: 15px;
					color: rgba(204, 204, 204, 1);
					border: 1px solid rgba(204, 204, 204, 1);
					&:first-child{
						color: rgba(7, 188, 155, 1);
						border: 1px solid rgba(7, 188, 155, 1);
					}
					
					border-radius: 4px;
				}
			}
		}
	}
</style>
