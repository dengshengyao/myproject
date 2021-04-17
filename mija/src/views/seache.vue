<template>
	<div class="seache">
		<h1><span @click="back"><</span>添加设备</h1>
		<div class="seacher">
			<input type="text" placeholder="请输入搜索关键字">
		</div>
		<div class="goods">
			<ul>
				<li v-for="val in goods">
					<img :src="val.path" alt="">
					<span>{{val.data}}</span>
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
			}
		},
		data(){
			return{
				goods:[
					{
						path:require('@/assets/imgs/a1.png'),
						data:'Yeelight皓石感应LED全组灯'
					},
					{
						path:require('@/assets/imgs/a2.png'),
						data:'小米AI音箱'
					},
					{
						path:require('@/assets/imgs/a3.png'),
						data:'石头扫地机器人'
					},
					{
						path:require('@/assets/imgs/a4.png'),
						data:'智米自然风风扇'
					},
					{
						path:require('@/assets/imgs/a5.png'),
						data:'鹿客智能指纹锁Classic'
					},
					{
						path:require('@/assets/imgs/a6.png'),
						data:'摩摩哒智能休闲按摩椅'
					},
					{
						path:require('@/assets/imgs/a7.png'),
						data:'8H魔方布艺L型组合沙发'
					},
					{
						path:require('@/assets/imgs/a8.png'),
						data:'云米智能法式四门冰箱'
					},
					{
						path:require('@/assets/imgs/a9.png'),
						data:'小吉迷你复古冰箱light系列'
					},
					{
						path:require('@/assets/imgs/a10.png'),
						data:'乐秀立式大风量空气循环扇'
					},
					{
						path:require('@/assets/imgs/a11.png'),
						data:'米家扫地机器人'
					},
					{
						path:require('@/assets/imgs/a12.png'),
						data:'小米手环3'
					},
					{
						path:require('@/assets/imgs/a13.png'),
						data:'猫盘 共享智能硬盘2TB'
					}
				]
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.seache{
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
						top: 0;
					}
				}
			}
		}
		
		.seacher{
			input{
				width: 345px;
				height: 32px;
				border: 1px solid rgba(204, 204, 204, 0.4);
				outline: 0;
				border-radius: 4px;
				margin-top: 10px;
				text-indent: 15px;
				font-size: 15px;
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
