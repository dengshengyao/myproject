<template>
	<div class="goodshead">
		<div class="back" @click="back">
			<img src="@/assets/imgs/jiantou.png" alt="">
		</div>
		<ul>
			<li class="checked" @click="getMsg(0);go()"><p>商品</p></li>
			<li @click="getMsg(1)"><p>详情</p></li>
			<li @click="getMsg(2)"><p>评价</p></li>
		</ul>
		<div class="more">
			<img src="@/assets/imgs/373.png" alt="">
		</div>
		<div class="cart" @click="got">
			<img src="@/assets/imgs/371.png" alt="">
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	
	export default{
		data(){
			return{
				
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
				console.log(123)
			},
			got(){
				this.$router.push({name:'Cart'})
			}
		}
	}
</script>


<style scoped="scoped" lang="less">
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
				color: rgba(129, 93, 55, 1);
				p{
					border-bottom: 3px solid rgba(129, 93, 55, 1);
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
