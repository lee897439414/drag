<template>
	<div>
		<div class="content_dt">
			<div class="d_left_Side">
				<div class="back_item">
					<span class="back" @click="backFn"><i class="icon iconfont icon-btn-arrow-left-blue-"></i>返回</span>
					<span class="send">发送<i class="icon iconfont icon-btn-description-shar"></i></span>
				</div>
				<div class="floor_box">
					<div class="floor_item" @click="show_list()">
						<span class="floor_title">楼层</span>
						<span class="check_floor">{{chooseFloorItem}}</span>
						<i class="icon iconfont icon iconfont icon-btn-description-swit"></i>
					</div>
				</div>
				<centerNav :fId="floorID" :typeall="itemList"></centerNav>
				<iconSize></iconSize>
				<div class="up_show_item">
					<i class="icon iconfont icon-btn-description-dot-"></i>
					<i class="icon iconfont icon-btn-description-view"></i>
					<i class="icon iconfont icon-btn-description-dot-1"></i>
				</div>
			</div>
			<div class="d_right_Side">
				<!-- 楼层列表 -->
				<FloorList v-show="isshow" :fdata="floordata" v-on:floorVal="gtfun" v-on:addMask="addfloorFn" v-on:changefloor="closechange"
				 v-on:cFloor="copen"></FloorList>
				<!-- 上传图片 -->
				<imgUp v-if="isUpImg"></imgUp>
				<!-- 已添加的列表 -->
				<addFloorList :addlist="pintarr" v-if="isshowList"></addFloorList>
				<!-- 楼层图纸 -->
				<imgMark v-if="floorPaper" :imgData="oimg" :ofId="floorID" ></imgMark>
			</div>
		</div>
		<!-- 添加楼层弹出 -->
		<addFloor v-if="isAddFloor" v-on:closeMask="closeFn"></addFloor>
		<maskItem v-if="isshowMask"></maskItem>
		<changeFloor v-if="ischange" v-on:changefloor="closeFn2"></changeFloor>
	</div>
</template>

<script>
	import addFloor from '../components/addFloor'
	import addFloorList from '../components/addfoorList'
	import FloorList from '../components/floorList'
	import imgUp from '../components/uploadIMGbtn'
	import centerNav from '../components/centerNav'
	import iconSize from '../components/iconSize'
	import maskItem from '../components/mask'
	import changeFloor from '../components/changeFloor'
	import imgMark from '../components/imgMark'
	export default {
		data() {
			return {
				isshow: false,
				indexNum: -1,
				isAddFloor: false, //添加楼层弹出
				chooseFloorItem: '',
				isshowMask: false, //弹出遮罩层
				ischange: false,
				isUpImg: true,
				floordata: [],
				floorPaper: false,
				oimg: '', //制图数据
				pintarr: [],
				picId: 0,
				resultData: null,
				isshowList: false,
				floorID: null,
				itemList: [], //请求过来的分类数据
			};
		},
		components: {
			addFloor,
			addFloorList,
			FloorList,
			imgUp,
			centerNav,
			iconSize,
			maskItem,
			changeFloor,
			imgMark
		},

		created() {
			//获取项目详情
			this.getmenue()
		},

		methods: {
			//获取项目详情
			getmenue() {
				this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=getIconsProject', {
					'userId': 355,
					'projectId': this.$route.query.id,
				}, {
					emulateJSON: true
				}, ).then(function(res) {
					let data = res.body
					this.resultData = data
					this.floordata = data.layer
					data.layer ? this.chooseFloorItem = data.layer[this.picId].layername : '请选择楼层'
					this.oimg = data.layer[this.picId]
					this.floorID = data.layer[this.picId].floorid //楼层id
					this.pintarr = data.layer[this.picId].cate
					if (data.layer.length > 0) {
						this.isUpImg = false
						this.floorPaper = true
						this.isshowList = true
					}
					this.getDataFn()
				}, function(res) {
					alert('数据异常!')
				});
			},
			// 显示隐藏楼层列表
			show_list() {
				this.isshow = !this.isshow
			},
			// 选择的楼层
			gtfun(datalist, index) {
				this.floorID =datalist.floorid //楼层id
				this.chooseFloorItem = datalist.layername
				this.picId = index
				this.resultData.layer ? this.chooseFloorItem = this.resultData.layer[this.picId].layername : '请选择楼层'
				this.oimg = this.resultData.layer[this.picId]
				this.pintarr = this.resultData.layer[this.picId].cate
				if (this.resultData.layer[index].image) {
					this.isUpImg = false
					this.floorPaper = true
					this.isshowList = true
				} else {
					this.isUpImg = true
					this.floorPaper = false
					this.isshowList = false
				}
				this.isshow = false
				this.getDataFn() //重新加载分类信息
			},
			// 获取分类
			getDataFn() {
				let that = this
				this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=projectIconCategory', {
					'userId': 355,
					'projectId': this.$route.query.id,
					'floorId': this.floorID
				}, {
					emulateJSON: true
				}, ).then(function(res) {
					let result = res.body.result
					console.log('result')
					console.log(result)
					this.itemList = result
				}, function(res) {
					alert('分类数据异常!')
				});

			},
			// 添加楼层弹窗
			addfloorFn(obj) {
				this.isAddFloor = obj
				this.isshowMask = true
			},
			//关闭添加楼层按钮
			closeFn(obj) {
				this.isAddFloor = obj
				this.isshowMask = obj
			},
			//返回
			backFn() {
				window.history.go(-1)
			},
			// 关闭修改楼层
			closechange(obj) {
				this.ischange = obj
				this.isshowMask = false
			},
			closeFn2(obj) {
				this.ischange = obj
				this.isshowMask = obj
			},
			// 修改楼层
			copen(obj) {
				this.ischange = obj
				this.isshowMask = true
			}

		}
	}
</script>

<style>

</style>
