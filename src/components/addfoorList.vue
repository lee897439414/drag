<template>
	<div id="dg" class="drag" @mousedown="mousedownHe" @mouseup="mup">
		<div class="map_list" v-if="list">
			<div class="title">已放置点位 <span class="sale_btn" @click="close"><i class="icon iconfont icon-btn-amount--white-s"></i></span></div>
			<div class="add_all">
				<div class="cont">
					<div class="item" v-for="(item,index) in addlist">
						<span class="type_item">{{item.iconname}}</span>
						<span class="type_name">{{item.name}}</span>
						<span class="type_count">{{item.num}}</span>
					</div>

				</div>
			</div>
		</div>
		<div class="show_btn" v-if="showAdd" @click="closeAdd">
			<i class="icon iconfont icon-btn-amount-add-ovalb"></i>
		</div>

	</div>
</template>
<script>
	var x = 0;
	var y = 0;
	var l = 0;
	var t = 0;
	var isDown = false;
	export default {
		data() {
			return {
				list: true,
				showAdd: false,
			};
		},
		methods: {
			close() {
				this.showAdd = true
				this.list = false
			},
			closeAdd() {
				this.showAdd = false
				this.list = true
			},
			mousedownHe(e) {
				//获取x坐标和y坐标
				x = e.clientX;
				y = e.clientY;
				//获取左部和顶部的偏移量
				l = document.getElementById('dg').offsetLeft;
				t = document.getElementById('dg').offsetTop;
				//开关打开
				isDown = true;
				//设置样式  
				document.getElementById('dg').style.cursor = 'move';
			},
			mup(e) {
				isDown = false;
				document.getElementById('dg').style.cursor = 'default';
			}
		},
		props: ['addlist']
	}

	window.onmousemove = (ev) => {
		if (isDown == false) {
			return false;
		}
		//获取x和y
		var nx = ev.clientX;
		var ny = ev.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nl = nx - (x - l);
		var nt = ny - (y - t);
		document.getElementById('dg').style.left = nl + 'px';
		document.getElementById('dg').style.top = nt + 'px';
	}
</script>

<style>
	.add_all .item {
		display: flex;
		align-items: center;
	}

	.show_btn {
		float: right;
	}

	.drag {
		position: absolute;
		z-index: 3;
		right: 0;
		top: 20px;
		width: 260px;
		-webkit-touch-callout: none;
		/* iOS Safari */

		-webkit-user-select: none;
		/* Chrome/Safari/Opera */

		-khtml-user-select: none;
		/* Konqueror */

		-moz-user-select: none;
		/* Firefox */

		-ms-user-select: none;
		/* Internet Explorer/Edge */

		user-select: none;
		/* Non-prefixed version, currently*/

	}
</style>
