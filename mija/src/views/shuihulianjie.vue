<template>
	<div class="shuihulianjie">
		<h1><span @click="back"><</span>米家恒温水壶 <img src="@/assets/imgs/303.png" alt=""><img src="@/assets/imgs/304.png" alt=""></h1>
		<div class="wendu">
			39
			<p>空闲中</p>
		</div>
		<div class="baowen">
			<div class="time">
				<img src="@/assets/imgs/47.svg" alt=""><span>保温时长</span>
				<p>持续保温12小时</p>
				<hr>
				<div>一小时 <span>12小时</span> </div>
			</div>
			<p class="fg"></p>
			<div class="time twd">
				<img src="@/assets/imgs/305.png" alt=""><span>保温温度</span>
				<p>50℃适合冲奶粉</p>
				<ul>
					<li>
						<div><img src="@/assets/imgs/307.png" alt=""></div>
						<p>90℃</p>
					</li>
					<li>
						<div><img src="@/assets/imgs/310.png" alt=""></div>
						<p>80℃</p>
					</li>
					<li>
						<div><img src="@/assets/imgs/311.png" alt=""></div>
						<p>70℃</p>
					</li>
					<li>
						<div>-o-</div>
						<p>自定义</p>
					</li>
				</ul>
				<van-slider v-model="value" active-color="rgba(166, 166, 166, 1)"/>
				<div class="ts">一小时 <span>12小时</span> </div>
			</div>
			<div class="more">
				更多<span><img src="@/assets/imgs/jiantou.png" alt=""></span>
			</div>
			<p class="fg"></p>
			<div class="chose">
				<div><img src="@/assets/imgs/316.png" alt=""></div>
				<p>煮沸降至保温温度</p>
				<div><img src="@/assets/imgs/319.png" alt=""></div>
				<p>加热至保温温度</p>
			</div>
			<p class="fg"></p>
			<div class="switch">
				<p>
					提壶记忆保温<br>
					<span>水壶提起后放回，继续保温（45℃以上）</span>
				</p>
				<div>
					<van-switch v-model="checked" size="30px" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Slider } from 'vant';
	import { Toast,Switch} from 'vant';
	Vue.use(Slider);
	Vue.use(Switch);
	export default{
		data(){
		    return {
		      value: 50,
			  checked: true,
		    };
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			go(){
				// this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.shuihulianjie{
		.switch{
			position: relative;
			div{
				position: absolute;
				width: 60px;
				height: 30px;
				top: 0px;
				right: 15px;
			}
			p{
				font-size: 15px;
				text-align: left;
				margin: 40px 0 40px 25px;
				color: rgba(56, 56, 56, 1);
				span{
					font-size: 13px;
					color: rgba(166, 166, 166, 1);
				}
			}
		}
		.chose{
			width: 325px;
			height: 50px;
			padding: 27px 25px;
			display: flex;
			p{
				line-height: 50px;
				color: rgba(128, 128, 128, 1);
				font-size: 13px;
				margin: 0 10px;
				&:last-child{
					margin-right: 0;
				}
			}
			div{
				width: 50px;
				height: 50px;
				border: 1px solid color(rgba(204, 204, 204, 1));
				box-sizing: border-box;
				border-radius: 50%;
				line-height: 50px;
				text-align: center;
				&:nth-of-type(2){
					background-color: rgba(39, 178, 230, 1);
					border: 0;
				}
				img{
					vertical-align: middle;
					width: 30px;
				}
			}
			// background-color: red;
		}
		.more{
			padding: 18px 0;
			font-size: 15px;
			line-height: 150%;
			span{
				img{
					width: 15px;
					vertical-align: middle;
					height: 15px;
				}
			}
		}
		&::v-deep{
			.van-slider{
				margin-top: 29px;
			}
		}
		.baowen{
			.twd{
				.ts{
					margin-top: 13px;
				}
				height: auto;
				ul{
					margin-left: 28px;
					margin-top: 21px;
					display: flex;
					li{
						margin-right: 24px;
						&:nth-of-type(4) div{
							color: white;
							border: 0;
							background-color: rgba(253, 121, 17, 1);
						}
						div{
							width: 50px;
							height: 50px;
							border: 1px solid color(rgba(204, 204, 204, 1));
							box-sizing: border-box;
							border-radius: 50%;
							line-height: 50px;
							font-size: 15px;
							
							text-align: center;
							img{
								vertical-align: middle;
							}
						}
						p{
							text-align: center;
							text-indent: 0;
							font-size: 13px;
						}
					}
				}
			}
			margin-top: 112px;
			overflow: hidden;
			.fg{
				height: 6px;
				background-color: rgba(166, 166, 166, 0.1);
				margin-top: 25px;
			}
			.time{
				width: 302px;
				// height: 85px;
				margin-top: 30px;
				margin-left: 25px;
				text-align: left;
				overflow: hidden;
				div{
					font-size: 13px;
					color: rgba(166, 166, 166, 1);
					span{
						float: right;
						font-size: 13px;
					}
				}
				hr{
					width: 280px;
					height: 0;
					margin: 14px auto;
					border: 1px solid rgba(39, 178, 230, 1);
				}
				img{
					width: 18px;
					// display: block;
				}
				span{
					display: inline-block;
					line-height: 150%;
					font-size: 15px;
					margin-left: 10px;
					vertical-align: top;
				}
				p{
					text-indent: 28px;
					color: rgba(166, 166, 166, 1);
				}
			}
		}
		.wendu{
			font-size: 80px;
			color: white;
			margin-top: 52px;
			line-height: 150%;
			p{
				margin-top: -7px;
				font-size: 14px;
				line-height: 150%;
			}
		}
		background: url(~@/assets/imgs/301.jpg) no-repeat 0 0;
		background-size: 375px 345px;
		img{
			width: 100%;
		}
		h1{
			width: 100%;
			height: 44px;
			font-size: 16px;
			line-height: 44px;
			margin-top: 20px;
			position: relative;
			border-bottom: 1px solid rgba(153, 153, 153, 0.2);
			color:white;
			span{
				display: block;
				width: 44px;
				height: 44px;
				left: 0;
				top: 0;
				position: absolute;
			}
			img{
				position: absolute;
				&:nth-of-type(1){
					width: 16px;
					height: 16px;
					top: 14px;
					right: 63px;
				}
				&:nth-of-type(2){
					width: 16px;
					height: 16px;
					top: 11px;
					left: 338px;
				}
			}
		}
	}
</style>
