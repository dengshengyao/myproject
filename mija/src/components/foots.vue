<template>
  <div class="foots">
    <ul>
		  <li v-for="(val,index) in lis" @click="goto(val)">
			  <img :src="val.img" alt=""><br>
			  <span>{{val.name}}</span>
		  </li>
    </ul>
  </div>
</template>

<script>
	export default{
		name:'foots',
		data(){
			return{
				lis:[
					{img:require('@/assets/imgs/23.png'),
					name:'米家',path:'/mijia'},
					{img:require('@/assets/imgs/24.png'),
					name:'有品',path:'/youping'},
					{img:require('@/assets/imgs/470.png'),
					name:'智能',path:'/tuijian'},
					{img:require('@/assets/imgs/516.png'),
					name:'我的',path:'/wode'}
				]
			}
		},
		methods:{
			goto(val){
				this.$router.push(val.path)
			}
		}
	}
</script>

<style scoped="scoped">
  .foots{}
  .foots ul{
    display: flex;
    font-size: 16px;
    width: 100%;
	height: 49px;
    flex-flow: wrap row;
    justify-content: space-evenly;
    background-color: #fff;
    line-height: 49px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .foots ul li{
	  line-height: 1;
	  text-align: center;
  }
  .foots ul li img{
	
	margin-top: 7px;
    width: 16px;
	height: 18px;
  }
  .foots ul li span{
  	font-size: 12px;
	line-height: 150%;
	color: rgba(7, 188, 155, 1);
  }
</style>
