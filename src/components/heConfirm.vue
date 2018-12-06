<template>
	<div class="marsk">
		<div class="toast">
			<div class="title">是否要删除？</div>
			<div class="delte_btn clearfix">
				<div class="cans fl">取消</div>
				<div class="conf fl">确定</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.toast {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:#fff;
		width: 300px;
		height: 150px;
		z-index: 999999;
		margin: auto;
		border-radius: 6px;
		overflow: hidden;
	}

	.marsk .title{
		text-align: center;
		line-height:100px;
		margin-bottom: 4px;
		color:#12a4c3;
	}
	.cans,.conf{
		width:150px;
		text-align: center;
		color: #fff;
		cursor: pointer;
		padding:15px 0;
	}
	.cans{background: #675b5b;}
	.conf{background: #12a4c3;}
</style>
