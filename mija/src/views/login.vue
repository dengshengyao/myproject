<template>
	<div class="login">
		<img src="@/assets/imgs/4.png" alt="" class="user"><img src="@/assets/imgs/6.png" alt="" class="psw">
		<div class="md">
			<p>大陆地区</p>
			<img src="@/assets/imgs/3.png" alt="">
			<van-form @submit="onSubmit">
			  <van-field
			    v-model="username"
			    name="用户名"
			    
			    placeholder="用户名"
			    :rules="[{ required: true, message: '请填写用户名' }]"
			  />
			  <van-field
			    v-model="password"
			    type="password"
			    name="密码"
			    
			    placeholder="密码"
			    :rules="[{ required: true, message: '请填写密码' }]"
			  />
			  <div class="btn" @click="doit()">
			    <van-button round block type="info" native-type="submit">注册/登录</van-button>
			  </div>
			</van-form>
		</div>
		<div class="o-login">
			<p>其他登录方式</p>
			<div>
				<div v-for="index in imgs"><img :src="index" alt=""></div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Form,Field,Button } from 'vant';
	import {mapState,mapMutations} from 'vuex'
	Vue.use(Form);
	Vue.use(Field);
	Vue.use(Button);
	export default {
	  name:'login',
	  data() {
	    return {
	      username: '',
	      password: '',
		  imgs:[require('@/assets/imgs/10.png'),require('@/assets/imgs/13.png'),require('@/assets/imgs/5.svg')]
	    };
	  },
	  methods: {
		  ...mapMutations({
		  	add:'add'
		  }),
	    onSubmit(values) {
	      console.log('submit', values);
	    },
		doit(){
			if(this.username && this.password){
				this.add({
					id:this.$store.state.count,
					un:this.username,
					pw:this.password
				})
				this.$router.push({name:'Logined',params:{un:this.username,pw:this.password,id:this.$store.state.count}})
				// console.log(this.$store.state.user)
			}
			
		},
		
	  },
	  computed:{
		  
	  }
	};
</script>

<style scoped lang="less">
	
	.login{
		width: 100%;
		height: 100%;
		position: relative;
		background: url(~@/assets/imgs/15.jpg) no-repeat 0 0/cover;
		.o-login{
			position: absolute;
			height: 102px;
			width: 100%;
			bottom: 0;
			left: 0;
			p{
				height: 21px;
				font-size: 14px;
				color: rgba(128, 128, 128, 1);
				line-height: 150%;
			}
			div{
				margin-top: 9px;
				display: flex;
				justify-content: center;
				div{
					width: 36px;
					height: 36px;
					border-radius: 50%;
					line-height: 36px;
					margin: 0 22px;
					background-color: rgba(219, 219, 219, 1);
					position: relative;
					img{
						display: block;
						position: absolute;
						
					}
					&:nth-of-type(1) img{
						top: 5px;
						left: 5px;
						width: 26px;
					}
					&:nth-of-type(2) img{
						top: 8px;
						left: 13px;
						width: 10px;
						height: 20px;
					}
					&:nth-of-type(3) img{
						top: 7px;
						left: 7px;
						width: 22px;
					}
				}
			}
		}
		.user,.psw{
			position: absolute;
			left: 25px;
			width: 20px;
		}
		.user{top: 215px;}
		.psw{top: 262px;width: 14px;height: 16px;left: 28px;}
		.md{
			// background-color: white;
			overflow: hidden;
			img{
				display: block;
				width: 66px;
				margin: 19px 0 0 155px;
			}
			form{
				width: 100%;
				margin-top: 65px;
				background-color: transparent;
				.van-cell{
					background-color: transparent;
					&::after{
						border-bottom: 1px solid #999;
					}
					
				}
			}
			.btn{
				margin: 22px 0 0 28px;
				button{
					width: 320px;
					height: 44px;
					background-color: rgba(7, 188, 155, 1);
					border: 1px solid rgba(7, 188, 155, 1);
				}
			}
			p{
				width: 60px;
				height: 22px;
				margin-top: 32px;
				margin-left: 300px;
				color: rgba(7, 188, 155, 1);
				font-size: 15px;
				line-height: 150%;
			}
		}
		&::v-deep{
			input{
				padding-left: 55px;
				&::-webkit-input-placeholder {
					color: black;
				}
			}
			.van-field__error-message{
				position: absolute;
				top: 0px;
				right: 20px;
			}
			
		}
		
	}
	// .van-field__control{
	// 	color: white !important;
	// }
</style>
