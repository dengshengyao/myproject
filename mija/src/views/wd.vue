<template>
	<div class="wd">
		<div class="goodshead">
			<div class="back">
				<!-- <img src="@/assets/imgs/jiantou.png" alt=""> -->
			</div>
			<ul>
				<li @click="getMsg(0);go()"><p>推荐</p></li>
				<li class="checked" @click="getMsg(1);gom()"><p>我的</p></li>
				<li @click="getMsg(2),gow()"><p>日志</p></li>
			</ul>
			<div class="more">
				<!-- <img src="@/assets/imgs/373.png" alt=""> -->
			</div>
			<div class="cart">
				<!-- <img src="@/assets/imgs/371.png" alt=""> -->
			</div>
		</div>
		<div class="main">
			<img src="@/assets/imgs/480.png" alt="">
		</div>
		<Foots></Foots>
	</div>
	
</template>
<script>
	import $ from 'jquery'
	import Foots from '@/components/foots'
	export default{
		data(){
			return{
				tj:[
					{
						path:require('@/assets/imgs/448.png'),
						name:'雾霾天自动开启空气净化器'
					},
					{
						path:require('@/assets/imgs/4481.png'),
						name:'回家自动打开空净'
					},
					{
						path:require('@/assets/imgs/4482.png'),
						name:'室内pm2.5过高时开启空净'
					},
					{
						path:require('@/assets/imgs/4483.png'),
						name:'日落时通知我'
					}
				]
			}
		},
		methods:{
			getMsg(index){
				$('ul>li').eq(index).addClass('checked').siblings().removeClass()
			},
			back(){
				this.$router.go(-1)
			},
			go(){
				this.$router.replace({name:'Tuijian'})
			},
			got(){
				this.$router.push({name:'Cart'})
			},
			gow(){
				this.$router.replace({name:'Rz'})
			},
			gom(){
				this.$router.replace({name:'Wd'})
			}
		},
		components:{
			Foots
		}
	}
</script>


<style scoped="scoped" lang="less">
	.wd{
		padding-top: 44px;
		padding-bottom: 49px;
		position: relative;
		.main{
			padding: 15px;
			height: 667px - 64px - 49px;
			overflow-y: auto;
			div{
				width: 345px;
				height: 160px;
				position: relative;
				margin-bottom: 10px;
				img{
					width: 100%;
					height: 100%;
					border-radius: 5px;
				}
				p{
					position: absolute;
					top: 15px;
					left: 15px;
					font-size: 16px;
					color: white;
				}
			}
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
