<template>
	<div class="youping">
		<div class="nav">
			<img src="@/assets/imgs/367.png" alt="">
			<div class="search">
				<input type="text" placeholder="纯米超级品牌日">
				<img src="@/assets/imgs/55.png" alt="">
			</div>
			<img src="@/assets/imgs/371.png" alt="">
			<img src="@/assets/imgs/373.png" alt="">
		</div>
		<div class="navnd">
			<ul>
				<li v-for="index in navs">
					{{index}}
				</li>
			</ul>
		</div>
		<div class="swiper">
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="(image, index) in images" :key="index">
			    <img v-lazy="image" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<img src="@/assets/imgs/21.svg" alt="" class="xiala">
		<div class="tuijian">
			<div>
				<img src="@/assets/imgs/391.png" alt="">
				<p>每日新品</p>
			</div>
			<div>
				<img src="@/assets/imgs/3911.png" alt="">
				<p>小米众筹</p>
			</div>
			<div>
				<img src="@/assets/imgs/3912.png" alt="">
				<p>限时抢购</p>
			</div>
			<div>
				<img src="@/assets/imgs/3913.png" alt="">
				<p>星品签到</p>
			</div>
			<div>
				<img src="@/assets/imgs/3914.png" alt="">
				<p>王牌推荐</p>
			</div>
		</div>
		<div class="hengfu">
			<img src="@/assets/imgs/403.png" alt="">
		</div>
		<div class="fenlei">
			<div>
				<p>有品推荐<span>更多<span>></span></span></p>
				<img src="@/assets/imgs/410.png" alt="" @click="golink">
				<div>
					<img src="@/assets/imgs/414.png" alt=""><img src="@/assets/imgs/4141.png" alt="">
				</div>
			</div>
		</div>
		<hr>
		<div class="fenlei">
			<div>
				<p>小米众筹<span>更多<span>></span></span></p>
				<img src="@/assets/imgs/4101.png" alt="">
				<div>
					<img src="@/assets/imgs/4140.png" alt=""><img src="@/assets/imgs/41411.png" alt="">
				</div>
			</div>
		</div>
		<hr>
		<div class="fenlei">
			<div>
				<p>每日新品<span>更多<span>></span></span></p>
				<img src="@/assets/imgs/1410.png" alt="">
				<div>
					<img src="@/assets/imgs/1414.png" alt=""><img src="@/assets/imgs/14141.png" alt="">
				</div>
			</div>
		</div>
		<Foots></Foots>
	</div>
</template>

<script>
	import Foots from '@/components/foots'
	import Vue from 'vue';
	import { Tab, Tabs ,Swipe, SwipeItem,Lazyload  } from 'vant';
	Vue.use(Lazyload);
	Vue.use(Tab);
	Vue.use(Tabs);
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	export default{
		methods:{
			golink(){
				 this.$router.push({name:'Goods'})
			}
		},
		name:'youping',
		components:{
			Foots
		},
		data(){
			return{
				images: [
				  require('@/assets/imgs/374.png'),
				  require('@/assets/imgs/3741.png'),
				  require('@/assets/imgs/3742.png'),
				  require('@/assets/imgs/3743.png'),
				  require('@/assets/imgs/3744.png'),
				],
				navs:[
					'推荐',
					'手机',
					'居家',
					'家电',
					'智能',
					'影音',
					'服饰',
					'餐厨',
					'健康',
					'笔记本',
					'鞋包',
					'饮食',
					'杂志'
				]
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.youping{
		width: 100%;
		// height: 100%;
		box-sizing: content-box;
		position: relative;
		padding-bottom: 50px;
		hr{
			height: 8px;
			border: 0;
			background-color: rgba(166, 166, 166, 0.2);
		}
		.fenlei{
			div{
				width: 345px;
				padding: 14px 15px 11px;
				div{
					width: 100%;
					padding: 0;
					margin-top: 5px;
					height: 125px;
					overflow: hidden;
					img{
						width: 170px;
						height: 125px;
						float: left;
						&:last-child{
							float: right;
						}
					}
				}
				img{
					width: 100%;
					height: 125px;
				}
				p{
					font-size: 16px;
					line-height: 150%;
					text-align: left;
					color: rgba(80, 80, 80, 1);
					span{
						float: right;
						color: rgba(166, 166, 166, 1);
						font-size: 12px;
						span{
							margin-left: 5px;
						}
					}
				}
			}
		}
		.hengfu{
			width: 100%;
			height: 92px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.tuijian{
			display: flex;
			flex-flow: row;
			justify-content: center;
			div{
				width: 50px;
				margin: 10px 12px 0;
				img{
					width: 100%;
					height: 50px;
					display: block;
				}
				p{
					margin: 4px 0;
					font-size: 12px;
					color: rgba(80, 80, 80, 1);
				}
			}
		}
		.swiper{
			width: 100%;
			height: 158px;
			&::v-deep{
				.van-swipe{
					width: 100%;
					height: 158px;
					img{
						width: 100%;
						height: 158px;
					}
				}
			}
		}
		.xiala{
			position: absolute;
			top: 44px;
			right: 8px;
			width: 24px;
		}
		.navnd{
			overflow: hidden;
			ul{
				position: absolute;
				overflow-x: auto;
				overflow-y: hidden;
				display: flex;
				height: 130%;
				left: 0;
				top: 0;
				li{
					flex: 1 0 auto;
					// width: 28px;
					height: 21px;
					margin-left: 34px;
					margin-bottom: 8px;
					float: left;
					color: rgba(166, 166, 166, 1);
					font-size: 14px;
					&:first-child{
						margin-left: 0px;
						color: rgba(129, 93, 55, 1);
					}
				}
			}
			width: 320px;
			height: 29px;
			background-color: white;
			margin-top: 1px;
			margin-left: 15px;
			position: relative;
			
		}
		.nav{
			display: flex;
			justify-content: left;
			img{
				display: block;
				width: 20px;
				height: 20px;
				margin-top: 12px;
				margin-left: 15px;
				&:nth-of-type(2){
					width: 24px;
					height: 24px;
					margin-top: 10px;
					margin-left: 10px;
				}
				&:nth-of-type(3){
					width: 20px;
					height: 20px;
					margin-top: 12px;
					margin-left: 11px;
				}
			}
			.search{
				width: 230px;
				height: 30px;
				margin-left: 30px;
				margin-top: 7px;
				position: relative;
				img{
					position: absolute;
					height: 16px;
					width: 16px;
					top: 7px;
					left: 10px;
					margin: 0;
				}
				input{
					width: 100%;
					box-sizing: border-box;
					height: 100%;
					outline: 0;
					background-color: rgba(231, 231, 231, 0.3);
					color: rgba(166, 166, 166, 0.6);
					font-size: 14px;
					border: 0;
					border-radius: 8px;
					text-indent: 30px;
				}
			}
			width: 100%;
			height: 44px;
			margin-top: 20px;
			text-align: left;
		}
	}
</style>
