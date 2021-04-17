<template>
	<div class="concatrd">
		<div class="main">
			<ul>
				<li>设备位置<span>默认房间<span>></span></span></li>
				<li>设备名称<span>米家空气净化器Pro<span>></span></span></li>
			</ul>
		</div>
		<div class="loup">
			<!-- <p @click="go">跳过</p> -->
			<div class="button" @click="go">
				下一步
			</div>
			<div><span>2</span>/3</div>
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
				this.$router.replace({name:'Concat_end',params:{names:'连接成功',show:false}})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.concatrd{
		width: 375px;
		height: 667px - 44px - 220px;
		box-sizing: border-box;
		padding-bottom: 92px;
		position: relative;
		.main{
			ul{
				padding-top: 15px;
				li{
					text-align: left;
					color: rgba(56, 56, 56, 1);
					font-size: 14px;
					border-bottom: 1px solid rgba(153, 153, 153, 0.2);
					padding: 15px;
					line-height: 150%;
					span{
						float: right;
						color: rgba(166, 166, 166, 1);
						span{
							margin-left: 10px;
						}
					}
				}
			}
		}
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
