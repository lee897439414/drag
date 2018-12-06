<template>
	<div class="size_box">
		<div class="check_size">
			<div class="size_title">尺寸</div>
			<div class="check_size_item">
				<div class="item_size size_top" :class="{active:1==oindex}" @click="sizeClick('1')"><span class="size_icon"></span><span
					 class="text_span">小</span> </div>
				<div class="item_size size_top" :class="{active:2==oindex}" @click="sizeClick('2')"><span class="size_icon"></span><span
					 class="text_span">中</span> </div>
				<div class="item_size size_top" :class="{active:3==oindex}" @click="sizeClick('3')"><span class="size_icon"></span><span
					 class="text_span">大</span> </div>
			</div>
		</div>
		<div class="check_size">
			<div class="size_title">其它</div>
			<div class="check_size_item">
				<div class="item_size bottom" :class="{active:1==thIndex}" @click="otherclick(1)"><span class="size_icon"></span><span class="text_span">黑白点位</span> </div>
				<div class="item_size bottom" :class="{active:2==thIndex}" @click="otherclick(2)"><span class="size_icon"></span><span class="text_span">实物点位</span> </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
				oindex: 1,
				thIndex:1,
				
			};
		},
		methods: {
			// 尺寸
			sizeClick(obj) {
				this.oindex = obj
			},
			otherclick(obj){
				this.thIndex = obj
			}
		}
	}
	// http://app.oneapptech.cn/index.php?m=Api&c=goods&a=goodsCategoryInfo
</script>

<style>

</style>
