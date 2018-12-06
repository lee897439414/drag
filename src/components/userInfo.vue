<template>
	<div class="package" @mouseenter="mousenterFn" @mouseleave="mouseLeaveFn">
		<img src="../assets/images/profile-pic-initial.png" class="otips">
		<div class="user_details" v-if="usershow">
			<div class="u_box">
				<div class="u_name">张三</div>
				<div class="comen">经销商/销售</div>
				<div class="comen">公司名称</div>
				<div class="comen"><a href="" class="comen_a">账号设置</a></div>
				<div class="comen"><a href="" class="comen_a">下载壹智能APP</a></div>
				<div class="comen"><a href="" class="comen_a">进入经销商后台</a></div>
				<div class="comen"><a href="" class="comen_a">退出登录</a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			usershow(){
				return this.$store.state.isShow
			}
		},
		methods: {
			mousenterFn() {
				return this.$store.commit('myennter')
			},
			mouseLeaveFn(){
				return this.$store.commit('myleve')
			}
		}

	}
</script>

<style>
	.otips {
		cursor: pointer;
	}
</style>
