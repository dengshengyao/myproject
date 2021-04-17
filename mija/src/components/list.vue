<template>
	<div class="list">
		<div class="navnd">
			<ul>
				<li v-for="index in navs">
					{{index}}
				</li>
			</ul>
		</div>
		<img src="@/assets/imgs/21.svg" alt="" class="xiala" @click="go">
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				navs:[
					'新上线',
					'生活家居',
					'照明',
					'开关/插座',
					'餐厨',
					'传感器',
					'摄像机',
					'门铃门锁',
					'运动穿戴',
					'儿童',
					'车载出行',
					'卫浴',
					'玩乐'
				]
			}
		},
		methods:{
			go(){
				this.$router.replace({name:'List'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list{
		position: relative;
		padding-top: 10px;
		height: 30px;
		.xiala{
			position: absolute;
			top: 8px;
			right: 8px;
			width: 24px;
		}
		.navnd{
			overflow: hidden;
			ul{
				position: absolute;
				overflow-x: auto;
				overflow-y: hidden;
				display: flex;
				height: 130%;
				left: 0;
				top: 0;
				li{
					flex: 1 0 auto;
					// width: 28px;
					height: 21px;
					margin-left: 16px;
					padding-bottom: 8px;
					float: left;
					color: rgba(166, 166, 166, 1);
					
					font-size: 14px;
					&:first-child{
						margin-left: 0px;
						color: rgba(7, 188, 155, 1);
						border-bottom: 1px solid rgba(7, 188, 155, 1);
					}
				}
			}
			width: 320px;
			height: 30px;
			background-color: white;
			margin-top: 1px;
			margin-left: 15px;
			position: relative;
			
		}
	}
</style>
