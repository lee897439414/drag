<template>
	<form action="https://app.oneapptech.cn/index.php?m=Api&c=Upload&a=imageUp" name="hh" method="post" enctype="multipart/form-data"  ref="submitbtn">
		<label class="upload_img">
			<i class="icon iconfont icon-btn-amount-add-line-"></i>
			<div class="text">添加图片</div>
			<!-- <button class="text" type="submit">添加图片</button> -->
			<input type="file" name="file" id="" class="input_hide" @change="imgUpload">
			<input type="hidden" name="savepath" value="layer">
		</label>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				imgdata: null
			};
		},
		methods: {
			imgUpload(event) {
				this.$refs.submitbtn.submit()
			},
		}
	}
</script>

<style>
	.input_hide {
		display: none;
	}
</style>
