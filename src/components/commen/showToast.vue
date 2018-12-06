<template>
	<div class="h_toast">{{msg}}</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['msg']
	}
</script>

<style>
.h_toast{
	width:250px;
	height:60px;
	line-height: 60px;
	border-radius: 10px;
	font-size:18px;
	background: rgb(0,0,0,.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999999;
	margin: auto;
	color: #fff;
	text-align: center;
}
</style>
