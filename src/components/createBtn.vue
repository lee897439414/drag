<template>
	<div class="creat_btn" @click="createBtn">
		<img src="../assets/images/btn-amount-add-ovalblue-1.png">
		<span>新建项目</span>
	</div>
</template>

<script>
	export default {
		methods:{
			// 新建项目
			createBtn(){
				this.$emit('showMark',true)
				console.log(222)
			}
		}
	}
</script>

<style>

</style>
