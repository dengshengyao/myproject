<template>
	<div class="goods">
		<goodshead></goodshead>
		<router-view/>
		<!-- <goodsfooter></goodsfooter> -->
		<!-- {{name}} -->
	</div>
</template>

<script>
	import goodshead from '@/components/goodshead'
	import goodsfooter from '@/components/goodsfooter'
	import {mapMutations} from 'vuex'
	export default{
		components:{
			goodshead,
			goodsfooter
		},
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
	.goods{
		padding-bottom: 50px;
		position: relative;
	}
</style>
