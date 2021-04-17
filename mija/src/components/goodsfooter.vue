<template>
	<div class="goodsfooter">
		<van-goods-action>
		  <van-goods-action-icon icon="service-o" text="客服" color="rgba(166, 166, 166, 1)" />
		  <van-goods-action-icon icon="like-o" text="已收藏" color="rgba(166, 166, 166, 1)" />
		  <van-goods-action-icon icon="cart-o" text="购物车" color="rgba(166, 166, 166, 1)" />
		  <van-goods-action-button @click="add()" type="warning" text="加入购物车"  />
		  <van-goods-action-button type="danger" text="立即购买"  />
		</van-goods-action>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	import {mapMutations} from 'vuex'
	Vue.use(GoodsAction);
	Vue.use(GoodsActionButton);
	Vue.use(GoodsActionIcon);
	export default{
		methods:{
			...mapMutations({
				addgoods:'addgoods'
			}),
			con(){
				console.log(this.addgoods)
			}
		}
	}
</script>

<style>
	
</style>
