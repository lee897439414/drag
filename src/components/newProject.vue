<template>
	<div class="create_box">
		<div class="c_bar">新建项目 <i class="close icon iconfont icon-btn-cross-white--" @click="colseBtn"></i></div>
		<div class="cell_box">
			<div class="create_item">
				<div class="tip">项目名称</div>
				<div class="input_cell">
					<input type="" name="" placeholder="请输入...">
				</div>
			</div>
			<div class="create_item">
				<div class="tip">客户姓名</div>
				<div class="input_cell">
					<input type="" name="" placeholder="请输入...">
				</div>
			</div>
			<div class="create_item">
				<div class="tip">客户电话</div>
				<div class="input_cell">
					<input type="number" name="" placeholder="请输入...">
				</div>
			</div>
			<div class="create_item">
				<div class="tip">客户地址</div>
				<div class="input_cell">
					<input type="text" name="" placeholder="请输入...">
				</div>
			</div>
			<div class="confirm_add_btn">添加</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			// 关闭
			colseBtn(){
				this.$emit('closeFn',false)
			}
		}
	}
</script>

<style>
	.create_box{z-index: 5;}
</style>
