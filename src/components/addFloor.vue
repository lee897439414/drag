<template>
	<div class="add_floor_marsk">
		<div class="add_tile">添加楼层<i class="icon iconfont icon-btn-cross-white--" @click="closeFn"></i></div>
		<div class="add_name">
			<input type="text" name="" class="name_input" placeholder="请输入楼层名称">
		</div>
		<div class="floor_confirn" @click="confirmFn">确定</div>
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
			closeFn(){
				this.$emit('closeMask',false)
			},
			//确定
			confirmFn(){
				this.$emit('closeMask',false)
			}
		}
	}
</script>

<style>
	.add_floor_marsk{z-index: 5;}
</style>
