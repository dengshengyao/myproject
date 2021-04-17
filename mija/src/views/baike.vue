<template>
	<div class="baike">
		<h1><span @click="back"><</span>产品百科</h1>
		<van-swipe :autoplay="3000" indicator-color="white">
		  <van-swipe-item v-for="(image, index) in images" :key="index">
		    <img v-lazy="image" />
		  </van-swipe-item>
		</van-swipe>
		<router-view/>
		<div class="shangping">
			<div v-for="val in shangping">
				<img :src="val.path" alt="">
				<p>{{val.name}}</p>
				<span>{{val.txt}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem,Lazyload} from 'vant';
	
	Vue.use(Lazyload);

	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default{
		data(){
			return{
				images:[
					require('@/assets/imgs/301.png'),
					require('@/assets/imgs/30.png')
				],
				shangping:[
					{
						path:require('@/assets/imgs/33.png'),
						name:'云米智能即热饮水吧1A（4L版）',
						txt:'云米'
					},
					{
						path:require('@/assets/imgs/331.png'),
						name:'Aqara动静贴',
						txt:'Aqara'
					},
					{
						path:require('@/assets/imgs/332.png'),
						name:'小米米家智能摄像机',
						txt:'米家'
					},
					{
						path:require('@/assets/imgs/333.png'),
						name:'小米米家智能摄像机云台版',
						txt:'米家'
					},
					{
						path:require('@/assets/imgs/33.png'),
						name:'云米智能即热饮水吧1A（4L版）',
						txt:'云米'
					},
					{
						path:require('@/assets/imgs/331.png'),
						name:'Aqara动静贴',
						txt:'Aqara'
					},
					{
						path:require('@/assets/imgs/332.png'),
						name:'小米米家智能摄像机',
						txt:'米家'
					},
					{
						path:require('@/assets/imgs/333.png'),
						name:'小米米家智能摄像机云台版',
						txt:'米家'
					}
				]
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
	.baike{
		width: 100%;
		box-sizing: border-box;
		.shangping{
			box-sizing: border-box;
			width: 100%;
			padding: 0 10px;
			background-color: #e0e0e0;
			overflow: hidden;
			div{
				width: 355px;
				height: 80px;
				background-color: white;
				border-radius: 10px;
				position: relative;
				margin-top: 10px;
				span{
					font-size: 12px;
					color: rgba(166, 166, 166, 1);
					line-height: 150%;
					position: absolute;
					left: 85px;
					bottom: 19px;
				}
				p{
					position: absolute;
					font-size: 16px;
					line-height: 150%;
					top: 18px;
					left: 85px;
				}
				img{
					position: absolute;
					width: 50px;
					height: 50px;
					top: 15px;
					left: 20px;
				}
			}
		}
		.xiala{
			position: absolute;
			top: 44px;
			right: 8px;
			width: 24px;
		}
		&::v-deep{
			.van-swipe{
				width: 100%;
				height: 208px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
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
