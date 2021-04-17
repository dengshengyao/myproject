<template>
	<div class="ljst">
		<p>接通电源，确认设备处于待连接状态<br>
		<span>指示灯处于其他状态</span>
		</p>
		<div>
			<div class="check">
				<van-checkbox v-model="checked" checked-color="#0f0">指示灯闪烁中</van-checkbox>
			</div>
			<div class="button" @click="go">
				下一步
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Checkbox, CheckboxGroup,Button  } from 'vant';
	Vue.use(Button);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	export default{
		data() {
			return {
			    checked: true,
			};
		},
		methods:{
			go(){
				this.$router.replace({name:'Concated',params:{names:'连接工作WiFi',show:true}});
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ljst{
		// overflow: hidden;
		&::v-deep{
			.van-checkbox__label{
				font-size: 15px;
				color: rgba(166, 166, 166, 1);
			}
			.van-checkbox{
				position: absolute;
				width: 130px;
			}
		}
		div{
			width: 100%;
			height: 50px;
			position: fixed;
			bottom: 0;
			left: 0;
			.button{
				width: 320px;
				height: 44px;
				box-sizing: border-box;
				border-radius: 22px;
				line-height: 42px;
				margin: 0 auto;
				border: 1px solid rgba(204, 204, 204, 1);
				position: absolute;
				bottom: 24px;
				left: 28px;
			}
			.check{
				width: 130px;
				position: absolute;
				bottom: 85px;
				left: 128px;
			}
		}
		p{
			margin-top: 27px;
			font-size: 15px;
			span{
				display: inline-block;
				margin-top: 14px;
				color: rgba(0, 142, 210, 1);
			}
		}
		
	}
</style>
