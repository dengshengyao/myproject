<template>
	<div class="home">
		<div class="nav">
			<img src="@/assets/imgs/20.png" alt="">
			<p class="username">{{this.$store.state.user[login-1].un}}</p>
			<div class="add">+</div>
		</div>
		<div class="mynav">
			<p>我的设备</p>
			<img src="@/assets/imgs/17.svg" alt="" class="xiala">
			<div class="alert" @click="go('Shebei')">
				点击添加设备
			</div>
			<div class="jieshao" @click="go('Baike')">
				<h1>产品<span>百科</span></h1>
				<p>接入小米loT的智能产品大全<br>
通过搜索分类快速找到产品，查看产品信息与功能</p>
			</div>
		</div>
		<Foots></Foots>
	</div>
</template>

<script>
	import Foots from '@/components/foots'
	export default{
		name:'home',
		components:{
			Foots
		},
		methods:{
			go(name){
				this.$router.push({name:name})
			}
		},
		data(){
			return{
				login:this.$store.state.login
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.box(){
		width: 100%;
		height: 100%;
		position: relative;
	}
	.home{
		.box();
		background-color: white;
		background: url(~@/assets/imgs/21.jpeg) no-repeat 0 0/cover;
		*{position: absolute;}
		.mynav{
			width: 365px;
			height: 293px;
			left: 5px;
			top: 65px;
			.jieshao{
				width: 100%;
				height: 170px;
				top: 123px;
				background: url(~@/assets/imgs/28.jpg) no-repeat 0 0/cover;
				border-radius: 8px;
				p{
					line-height: 150%;
					font-size: 12px;
					width: 264px;
					left: 51px;
					top: 116px;
					border: 0;
					color: rgba(229, 229, 229, 0.7);
				}
				h1{
					width: 169px;
					text-align: left;
					top: 50px;
					left: 102px;
					color: white;
					font-size: 30px;
					span{right: 0;}
				}
			}
			.alert{
				top: 34px;
				width: 100%;
				height: 84px;
				color: rgba(128, 128, 128, 1);
				line-height: 84px;
				background-color: rgba(255, 255, 255, 1);
				font-size: 14px;
				border-radius: 8px;
				opacity: .9;
			}
			p{
				width: 60px;
				height: 22px;
				top: 1px;
				left: 10px;
				font-size: 15px;
				line-height: 150%;
				color: rgba(7, 188, 155, 1);
				border-bottom: 2px solid rgba(7, 188, 155, 1);
			}
			.xiala{
				width: 24px;
				height: 24px;
				top: 0;
				right: 10px;
			}
		}
		.nav{
			
			width: 100%;
			height: 74px;
			top: 20px;
			background-color: white;
			img{
				width: 20px;
				height: 19px;
				left: 15px;
				top: 13px;
			}
		}
		.username{
			width: 71px;
			height: 22px;
			top: 11px;
			left: 45px;
			color: rgba(56, 56, 56, 1);
			line-height: 150%;
			font-size: 15px;
		}
		.add{
			width: 40px;
			height: 40px;
			line-height: 40px;
			font-size: 20px;
			text-align: center;
			color: rgba(56, 56, 56, 1);
			top: 2px;
			left: 328px;
		}
	}
</style>
