<template>
	<div class="goodsmain">
		<img :src="img" alt="">
		<div class="main">
			<div class="jieshao fg">
				<h1>{{name}}</h1>
				<p>【8.24-8.26开学季显示立省100元！到手价2399！】</p>
				<h2>米家扫地机器人团队出品！传感器升级！长续航，智能规划，扫
	拖一体，清扫性更强！</h2>
				<div><span class="hong">￥2399</span><s class="hui">¥2499</s><span class="kuang">直降100元</span></div>
			</div>
			<div class="xuanze fg">
				<p><span>已选：</span>石头扫地机器人  银色    x1</p>
				<img src="@/assets/imgs/jiantou.png" alt="">
			</div>
			<div class="renzhen fg">
				<p>说明：</p>
				<ul>
					<li><span><img src="@/assets/imgs/126.svg" alt=""></span>本产品为有品第三方商品</li>
					<li><span><img src="@/assets/imgs/126.svg" alt=""></span>由北京石头世纪科技有限公司发货并提供售后</li>
					<li><span><img src="@/assets/imgs/126.svg" alt=""></span>由北京石头世纪科技有限公司发货并提供售后</li>
				</ul>
			</div>
			<div class="pj">
				<p>商品评价（7362）</p>
				<div>
					<img src="@/assets/imgs/627.jpg" alt=""><span>r****2</span>
				</div>
				<h1>第二次来买了，货比我想像中要好！！老板人表扬下。</h1>
				<h2>颜色分类：银色</h2>
				<button>查看全部评价</button>
			</div>
		</div>
		<div class="goodsfooter">
			<van-goods-action>
			  <van-goods-action-icon icon="service-o" text="客服" color="rgba(166, 166, 166, 1)" />
			  <van-goods-action-icon icon="like-o" text="已收藏" color="rgba(166, 166, 166, 1)" />
			  <van-goods-action-icon icon="cart-o" text="购物车" color="rgba(166, 166, 166, 1)" />
			  <van-goods-action-button @click="add()" type="warning" text="加入购物车"  />
			  <van-goods-action-button type="danger" text="立即购买"  />
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {mapMutations} from 'vuex'
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	Vue.use(GoodsAction);
	Vue.use(GoodsActionButton);
	Vue.use(GoodsActionIcon);
	export default{
		data(){
			return{
				img:require('@/assets/imgs/good.png'),
				name:'石头扫地机器人  银色'
			}
		},
		methods:{
			...mapMutations({
				addgoods:'addgoods'
			}),
			con(){
				console.log(this.addgoods)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.goodsmain{
		overflow-y: auto;
		height: 667px - 50px;
		.pj{
			button{
				box-sizing: border-box;
				border: 0;
				outline: 0;
				width: 101px;
				height: 28px;
				display: block;
				margin: 0 auto;
				margin-top: 14px;
				background-color: rgba(149, 149, 149, 1);
				color: rgba(255, 255, 255, 1);
			}
			h1{
				font-weight: 400;
				font-size: 12px;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 10px;
			}
			h2{
				color: rgba(153, 153, 153, 1);
				font-weight: 400;
				font-size: 12px;
			}
			width: 345px;
			height: 172px;
			padding: 15px 15px 0 15px;
			background-color: white;
			text-align: left;
			div{
				margin: 15px 0;
				height: 30px;
				line-height: 30px;
				img{
					width: 30px;
					height: 30px;
					border-radius: 50%;
					float: left;
					margin-right: 10px;
				}
				span{
					display: inline-block;
					float: left;
				}
			}
			p{
				font-size: 15px;
				color: rgba(51, 51, 51, 1);
			}
		}
		.renzhen{
			height: 80px;
			background-color: white;
			line-height: 93px;
			padding-top: 13px;
			padding-left: 15px;
			text-align: left;
			p{
				float: left;
				line-height: 1.5;
				color: rgba(166, 166, 166, 1);
				font-size: 12px;
			}
			ul{
				float: left;
				margin-left: 11px;
				li{
					line-height: 1;
					margin-bottom: 9px;
					font-size: 12px;
					span{
						display: inline-block;
						border-radius: 50%;
						height: 10px;
						width: 10px;
						border: 1px solid rgb(166,166,166);
						margin-right: 9px;
					}
					img{
						display: block;
						width: 10px;
						height: 10px;
					}
				}
			}
		}
		.xuanze{
			height: 48px;
			background-color: white;
			line-height: 48px;
			padding-left: 15px;
			text-align: left;
			p{
				float: left;
				font-size: 12px;
				span{
					color: rgba(166, 166, 166, 1);
				}
			}
			img{
				width: 14px;
				float: right;
				margin-top: 16px;
				margin-right: 15px;
			}
		}
		.fg{
			margin-bottom: 10px;
		}
		.main{
			background-color: rgba(153, 153, 153, 0.2);
			
			height: 130px;
		}
		.jieshao{
			padding-left: 15px;
			padding-top: 15px;
			padding-bottom: 15px;
			background-color: white;
			height: 110px;
			div{
				margin-top: 7px;
				text-align: left;
				.kuang{
					color: rgba(212, 48, 48, 1);
					font-size: 14px;
					padding: 2px 10px;
					border: 1px solid rgba(212, 48, 48, 1);
					margin-left: 10px;
				}
				.hong{
					color: rgba(212, 48, 48, 1);
					font-size: 20px;
				}
				.hui{
					color: rgba(166, 166, 166, 1);
					font-size: 14px;
					margin-left: 5px;
				}
				height: 30px;
				line-height: 30px;
			}
			h1{
				font-weight: 400;
				text-align: left;
				font-size: 15px;
			}
			h2{
				font-weight: 400;
				text-align: left;
				font-size: 12px;
				color: rgba(166, 166, 166, 1);
			}
			p{
				color: rgba(212, 48, 48, 1);
				text-align: left;
				font-size: 12px;
				margin-top: 5px;
			}
		}
		img{
			width: 100%;
		}
	}
</style>
