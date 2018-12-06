<template>
	<div class="foor_list">
		<img src="../assets/images/icon-arrow-left.png" class="arrow_icon">
		<div class="add_floor">
			<div class="floor_list" :class="{active:isactive==index}" v-for="(item,index) in fdata">
				<span  @click="floorVal(index)" class="ospan">{{item.layername}}</span>
				<span class="close" @click="deleteFn(index)"></span>
			</div>
			<div class="add_btn" @click="addFn">
				<img src="../assets/images/btn-amount-add-14-pt-gray-1.png">
				<span>添加</span>
			</div>
			<div class="editor" @click="changeFloor">修改楼层名称</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isactive:0,
			};
		},
		props:['fdata'],
		methods:{
			// 点击楼层
			floorVal(index){
				this.isactive = index
				console.log(this.fdata[index])
				this.$emit('floorVal',this.fdata[index],index)
			},
			// 删除楼层
			deleteFn(index){
				this.fdata.splice(index,1)
				
			},
			// 添加楼层
			addFn(){
				this.$emit('addMask',true)
			},
			//修改楼层名称
			changeFloor(){
				this.$emit('cFloor',true)
			}
			
		}
	}
</script>

<style>
	.ospan{display: block;}
</style>
