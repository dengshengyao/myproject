<template>
	<div class="zhaoming">
		<div class="search">
			<span @click="back"><</span>
			<input type="text" placeholder="搜索" @focus="got">
			<div @click="lanya"><img src="@/assets/imgs/56.png" alt=""></div>
		</div>
		<div class="goodslist">
			<div class="listone">
				<ul>
					<li v-for="val in goods" @click="run(val)">{{val}}</li>
				</ul>
			</div>
			<div class="goods">
				<div>
					<p>
						照明
					</p>
					<div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div><div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/260.png" alt="">
							<span>Yeelight皓石感应LED...</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2601.png" alt="">
							<span>Yeelight语音助手</span>
						</div>
						<div @click="go">
							<img src="@/assets/imgs/2602.png" alt="">
							<span>Yeelight全屋超值灯组</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Search,Divider } from 'vant';
	Vue.use(Divider);
	
	Vue.use(Search);
	export default{
		data(){
			return{
				value:'',
				goods:['摄像机','电源开关','照明','家居安防','环境电器','传感器','厨房电器','娱乐影音','生活电器','出行车载','运动健康','其他']
			}
		},
		methods:{
			onSearch(){
				return 0
			},
			go(){
				return 0
			},
			run(val){
				if(val=='摄像机'){
					this.$router.replace({name:'Shebei'})
				}else if(val=='电源开关'){
					this.$router.replace({name:'ShebeiOpen'})
				}else if(val=='照明'){
					// this.$router.push({name:'Zhaoming'})
				}
			},
			back(){
				this.$router.go(-1)
			},
			got(){
				this.$router.push({name:'Seache'})
			},
			lanya(){
				this.$router.push({name:'Lanya'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '../assets/css/bundle.less';
	.zhaoming{
		overflow: hidden;
	}
	.goodslist{
		display: flex;
	}
	.goods{
		width: 222px;
		margin: 0 26px;
		height: 603px;
		overflow: hidden;
		div{
			p{
				font-size: 14px;
				height: 21px;
				line-height: 21px;
				color: rgba(166, 166, 166, 1);
				padding: 30px 0;
			}
			div{
				display: flex;
				width: 250px;
				height: 522px;
				// padding-right: 19px;
				flex-flow: row wrap; 
				overflow: auto;
				div{
					width: 60px;
					height: auto;
					margin-right: 21px;
					padding: 0;
					img{
						width: 58px;
						height: 58px;
						margin-left: 2px;
						display: block;
					}
					span{
						display: block;
						color:rgba(80, 80, 80, 1);
						font-size: 10px;
					}
				}
			}
		}
	}
	.listone{
		width: 100px;
		height: 603px;
		overflow: hidden;
		ul{
			width: 120px;
			height: 603px;
			overflow-y: auto;
			background-color: rgba(231, 231, 231, 0.3);
			li{
				width: 100px;
				height: 60px;
				color: rgba(80, 80, 80, 1);
				font-size: 14px;
				line-height: 60px;
				&:nth-of-type(3){
					color: rgba(7, 188, 155, 1);
					background-color: white;
				}
			}
		}
	}
	.shebei{
		overflow: hidden;
	}
	.search{
		margin-top: 20px;
		height: 44px;
		position: relative;
		input{
			box-sizing: border-box;
			#bundle.psn(250px,36px,4px,63px);
			border: 0;
			outline: 0;
			background-color: rgba(231, 231, 231, 0.3);
			border-radius: 8px;
			text-align: center;
		}
		span{
			#bundle.psn(44px,44px,0,0);
			display: block;
			line-height: 44px;
			font-size: 20px;
		}
		div{
			#bundle.psn(44px,44px,0,331px);
			line-height: 44px;
			img{
				width: 24px;
				height: 24px;
				vertical-align: middle;
			}
		}
	}
</style>
