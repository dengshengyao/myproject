<template>
	<div class="logined">
		<h1>是否是您的账号</h1>
		<img src="@/assets/imgs/18.jpeg" alt="">
		<div class="fontsl">用户名：{{this.$route.params.un}}<br>手机：{{this.$route.params.pw}}</div>
		<div class="btn" @click="loginok">
		  <van-button round block type="info" native-type="submit">是的</van-button>
		</div>
		<div class="btn">
		  <van-button round block type="info" native-type="submit">不是我的，注册新账号</van-button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Form,Field,Button } from 'vant';
	
	Vue.use(Form);
	Vue.use(Field);
	Vue.use(Button);
	export default{
		methods:{
			loginok(){
				this.$store.commit('setlogin',this.$route.params.id)
				this.$router.push({name:'Home',params:{id:this.$route.params.id}})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.logined{
		&:extend(.box);
		background-color: white;
		h1{
			position: absolute;
			width: 210px;
			height: 45px;
			top: 55px;
			left: 83px;
			color: rgba(56, 56, 56, 1);
			font-size: 30px;
			line-height: 150%;
		}
		img{
			position: absolute;
			width: 80px;
			height: 80px;
			border-radius: 50%;
			left: 148px;
			top: 158px;
		}
		.fontsl{
			position: absolute;
			width: 133px;
			height: 38px;
			left: 121px;
			top: 265px;
			line-height: 150%;
			font-size: 13px;
			color: rgba(128, 128, 128, 1);
		}
		.btn{
			position: absolute;
			left: 28px;
			top: 354px;
			button{
				width: 320px;
				height: 44px;
				background-color: rgba(7, 188, 155, 1);
				border: 1px solid rgba(7, 188, 155, 1);
			}
			&:last-child{
				top: 418px;
				button{
					background-color: transparent;
					color: rgba(56, 56, 56, 1);
					border: 1px solid rgba(56, 56, 56, .5);
				}
			}
		}
	}
</style>
