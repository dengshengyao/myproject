<template>
	<div class="lanya">
		<h1><span @click="back"><</span>附近的蓝牙设备</h1>
		<div class="lanyar">
			<p>添加新设备</p>
		</div>
		<div class="goods">
			<ul>
				<li v-for="val in goods" @click="go">
					<img :src="val.path" alt="">
					<span>{{val.data}} <div>1</div></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			go(){
				this.$router.push({name:'Shuihu'})
			}
		},
		data(){
			return{
				goods:[
					{
						path:require('@/assets/imgs/l1.png'),
						data:'米家恒温电水壶'
					},
					{
						path:require('@/assets/imgs/l2.png'),
						data:'米家LED吸顶灯'
					},
					{
						path:require('@/assets/imgs/l3.png'),
						data:'米家床头灯'
					},
					{
						path:require('@/assets/imgs/l4.png'),
						data:'小米电视4C 50英寸'
					},
					{
						path:require('@/assets/imgs/l5.png'),
						data:'小瓦扫地机器人 青春版'
					}
				]
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.lanya{
		.goods{
			width: 345px;
			height: 546px;
			margin-left: 15px;
			margin-top: 12px;
			ul{
				width: 360px;
				li{
					line-height: 58px;
					height: 58px;
					text-align: left;
					position: relative;
					border-bottom: 1px solid rgba(153, 153, 153, 0.2);
					img{
						width: 58px;
						height: 58px;
						margin-left: 5px;
					}
					span{
						position: absolute;
						left: 78px;
						line-height: 100%;
						top: 19px;
						div{
							position: absolute;
							background-color: red;
							width: 14px;
							height: 14px;
							right: -20px;
							top: -10px;
							text-align: center;
							line-height: 14px;
							font-size: 10px;
							color: white;
							border-radius: 50%;
						}
					}
				}
			}
		}
		.lanyar{
			p{
				height: 30px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				text-indent: 15px;
				text-align: left;
				background-color: rgba(229, 229, 229, 0.2);
			}
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
