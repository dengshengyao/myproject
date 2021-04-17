<template>
	<div class="wode">
		<div class="goodshead">
			<div class="back">
				<!-- <img src="@/assets/imgs/jiantou.png" alt=""> -->
			</div>
			
			<div class="more">
				<!-- <img src="@/assets/imgs/373.png" alt=""> -->
			</div>
			<div class="cart">
				<img src="@/assets/imgs/504.png" alt="">
			</div>
		</div>
		<div class="main">
			<div class="user">
				<h1>{{this.$store.state.user[login-1].un}}</h1>
				<p>2个智能设备</p>
				<img src="@/assets/imgs/505.jpeg" alt="">
			</div>
			<hr>
			<div class="nq">
				<van-tabbar v-model="active" class="s">
				  <van-tabbar-item icon="home-o">小组件</van-tabbar-item>
				  <van-tabbar-item icon="search">共享设备</van-tabbar-item>
				  <van-tabbar-item icon="friends-o" @click="goo()">蓝牙网关</van-tabbar-item>
				  <van-tabbar-item icon="setting-o">产品百科</van-tabbar-item>
				</van-tabbar>
			</div>
			<hr>
			<ul class="ls">
				<li v-for="val in zx">{{val}} <img src="@/assets/imgs/jiantou.png" alt=""></li>
			</ul>
		</div>
		<Foots></Foots>
	</div>
	
</template>
<script>
	import $ from 'jquery'
	import Foots from '@/components/foots'
	import Vue from 'vue';
	import { Tabbar, TabbarItem, CouponCell, CouponList } from 'vant';
	
	Vue.use(CouponCell);
	Vue.use(CouponList);
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default{
		data(){
			return{
				active:0,
				chosenCoupon: -1,
			    zx:['我的商城','资讯','帮助与反馈','设置'],
				login:this.$store.state.login
			}
		},
		methods:{
			goo(){
				this.$router.push({name:'Ly'})
			},
			getMsg(index){
				$('ul>li').eq(index).addClass('checked').siblings().removeClass()
			},
			back(){
				this.$router.go(-1)
			},
			go(){
				console.log(123)
			},
			got(){
				this.$router.push({name:'Cart'})
			},
			onChange(index) {
			  this.showList = false;
			  this.chosenCoupon = index;
			},
			onExchange(code) {
			  this.coupons.push(coupon);
			},
		},
		components:{
			Foots
		}
	}
</script>


<style scoped="scoped" lang="less">
	.wode{
		padding-top: 44px;
		padding-bottom: 49px;
		position: relative;
		hr{
			border: 0;
			height: 10px;
			background-color: rgba(153, 153, 153, 0.2);
		}
		.main{
			.ls{
				li{
					padding: 18px;
					font-size: 16px;
					line-height: 1.5;
					position: relative;
					border-bottom: 1px solid rgba(153, 153, 153, 0.2);
					img{
						height: 16px;
						width: 16px;
						position: absolute;
						top:(60px - 16px) / 2;
						right: 4px;
					}
				}
			}
			.nq{
				height: 49px + 20px + 18px;
				position: relative;
				.s{
					position: absolute;
					top: 20px;
				}
			}
			.user{
				position: relative;
				padding-bottom: 35px;
				p{
					font-size: 16px;
					color: rgba(166, 166, 166, 1);
				}
				h1{
					font-size: 30px;
				}
				img{
					position: absolute;
					width: 64px;
					height: 64px;
					border-radius: 50%;
					top: 0;
					right: 0;
				}
			}
			
			padding: 15px;
			height: 667px - 64px - 49px;
			overflow-y: auto;
			text-align: left;
		}
	}
	.goodshead{
		height: 44px;
		width: 100%;
		background-color: white;
		position: absolute;
		top: 0;
		left: 0;
		.cart{
			width: 44px;
			height: 44px;
			line-height: 44px;
			float: right;
			img{
				width: 24px;
				vertical-align: middle;
			}
		}
		.more{
			width: 20px;
			float: right;
			height: 20px;
			margin-top: 15px;
			margin-right: 15px;
			img{
				width: 100%;
			}
		}
		.back{
			width: 44px;
			height: 44px;
			line-height: 44px;
			float: left;
			img{
				width: 16px;
				vertical-align: middle;
				transform: rotate(180deg);
			}
		}
		ul{
			float: left;
			height: 44px;
			margin-left: 69px;
			.checked{
				color: rgba(7, 188, 155, 1);
				p{
					border-bottom: 3px solid rgba(7, 188, 155, 1);
				}
			}
			li{
				float: left;
				height: 44px;
				font-size: 14px;
				color: rgba(166, 166, 166, 1);
				padding: 0 11px;
				p{
					height: 44px;
					line-height: 44px;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
