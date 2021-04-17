<template>
	<div class="list2">
		<div class="nav">
			<h4>全部分类</h4>
			<div>
				<span v-for="index in navs">
					{{index}}
				</span>
			</div>
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
					'健康',
					'车载出行',
					'卫浴',
					'玩乐'
				]
			}
		},
		methods:{
			go(){
				this.$router.replace({name:'Baike'})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list2{
		position: relative;
		height: 40px;
		.nav{
			width: 365px;
			height: 160px;
			background-color: aliceblue;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 8;
			border-radius: 10px;
			margin: 0 5px;
			overflow: hidden;
			h4{
				color: rgba(56, 56, 56, 1);
				font-size: 14px;
				text-align: left;
				margin-top: 10px;
				margin-left: 15px;
			}
			div{
				display: flex;
				flex-flow: row wrap;
				width: 318px;
				height: 89px;
				margin-top: 14px;
				// margin-left: 5px;
				align-content: space-between;
				span{
					display: block;
					margin: 0 5px 0 15px;
					font-size: 14px;
					height: 21px;
					line-height: 21px;
					&:first-child{
						color: rgba(7, 188, 155, 1);
					}
				}
			}
		}
		.xiala{
			position: absolute;
			transform: rotate(180deg);
			top: 8px;
			right: 2px;
			width: 24px;
			z-index: 9;
		}
	}
</style>
