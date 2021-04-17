<template>
	<div class="cart">
		<h1 class="tou"><span @click="back"><</span>购物车<span class="ew">编辑</span></h1>
		<div class="main">
			<div class="goods" v-for="(val,index) in good">
				<van-checkbox v-model="checked[index]" label-disabled icon-size="16px" checked-color="#ee0a24" class="good">
					<img :src="val.path" alt="">
					<div class="much">
						<h1>{{val.name}}</h1>
						<p>
							¥{{price[index]*value[index]}}
							<van-stepper class="add" v-model="value[index]" theme="round" button-size="22" disable-input />
						</p>
					</div>
				</van-checkbox>
			</div>
			
			
		</div>
		<div class="di">
			<van-checkbox v-model="getcheck" icon-size="16px" checked-color="#ee0a24" class="sd">全选</van-checkbox>
			<p>合计：<span>¥{{getprice}}</span></p>
			<div class="anu">去结算({{getnum}})</div>
			<span class="hit" @click="change"></span>
		</div>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import { Checkbox, CheckboxGroup, Stepper} from 'vant';
	import {mapState} from 'vuex'
	
	Vue.use(Stepper);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			change(){
				var key=(!this.getcheck)
				for(var i=0;i<this.checked.length;i++){
					this.$set(this.checked,i,key)
				}
			}
		},
		data(){
			return{
				// allprice:
			}
		},
		computed:{
			...mapState({
				checked:'checked',
				value:'value',
				price:'price',
				good:'good'
			}),
			getprice(){
				var a=0
				for(var i=0;i<this.value.length;i++){
					if(this.checked[i]){
						a+=this.price[i]*this.value[i]
					}
				}
				return a
			},
			getnum(){
				var a=0
				for(var i=0;i<this.value.length;i++){
					if(this.checked[i]){
						a+=this.value[i]
					}
				}
				return a
			},
			getcheck(){
				for(var i=0;i<this.value.length;i++){
					if(this.checked[i]){
						
					}else{
						return false
					}
					
				}
				return true
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cart{
		overflow: hidden;
		height: 100%;
		box-sizing: border-box;
		padding-bottom: 49px;
		.main{
			.goods{
				position: relative;
				.good{
					.much{
						position: absolute;
						width: 345px - 16px - 90px;
						overflow: hidden;
						height: 100%;
						text-align: left;
						top: 0;
						right: 0;
						h1{
							font-size: 14px;
							font-weight: 400;
							margin-top: 16px;
						}
						p{
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							.add{
								float: right;
							}
							margin-top: 21px;
							font-size: 14px;
							color: rgba(212, 48, 48, 1);
						}
					}
					img{
						width: 80px;
						height: 80px;
					}
				}
				width: 345px;
				height: 80px;
				margin: 14px 15px;
			}
			height: 667px - 44px - 20px - 49px;
			overflow-y: auto;
		}
		.di{
			font-size: 14px;
			.hit{
				width: 52px;
				height: 20px;
				display: block;
				background-color: transparent;
				z-index: 2;
				position: absolute;
				top: 17px;
				left: 20px;
			}
			.anu{
				position: absolute;
				height: 100%;
				width: 100px;
				background-color: rgba(212, 48, 48, 1);
				line-height: 49px;
				color: white;
				top: 0;
				right: 0;
			}
			p{
				position: absolute;
				top: 15px;
				left: 160px;
				color: rgba(56, 56, 56, 1);
				span{
					color: rgba(212, 48, 48, 1);
				}
			}
			.sd{
				position: absolute;
				top: 17px;
				left: 20px;
			}
			position: fixed;
			
			width: 100%;
			height: 49px;
			left: 0;
			bottom: 0;
		}
		.tou{
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
				
				position: absolute;
			}
			.ew{
				font-size: 14px;
				right: 12px;
				top: 0;
				font-weight: 400;
			}
		}
	}
</style>
