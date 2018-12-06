<template>
	<div>
		<div class="imgbox" ref="mainbox" @click="addMark" @mousedown="mousedown($event)">
			<img id="oimg" :src="'http://app.oneapptech.cn'+imgData.image" alt="" ref="himg">
			<img :src="'http://app.oneapptech.cn'+item.image" :width="size" :typeid="item.onegoodscategoryid" :iconid="item.iconid" :pointid="item.pointid" :height="size"
			 :style="{top:item.posy*h+'px',left:item.posx*w+'px'}" class="iconPOsition" v-for="(item,index) in imgData.icon">
			<!-- <img id="oimg" :src="'http://app.oneapptech.cn'+imgData.image" alt="" @mousewheel="h_moseeWheel($event)"> -->
		</div>
		<toast :msg="massege" v-if="isMag"></toast>
	</div>
</template>

<script>
	import toast from './commen/showToast'
	export default {
		
		data() {
			return {
				w: null,
				h: null,
				Zindex: 1,
				size: 20,
				isMag: false,
				massege: "请选择左侧分类！",
				hfid : this.ofId,//	楼层id
				operate:null,//操作模式。1=新增；2=移动；3=删除
			};
		},
		props:['ofId','imgData'],
		components: {
			toast,
		},
		mounted() {
			this.$nextTick(() => {
				this.w = this.$refs.himg.offsetWidth,
					this.h = this.$refs.himg.offsetHeight
			})
			
		},
		methods: {
			// 鼠标滚动
			// 			h_moseeWheel(ev) {
			// 				var oEvent = ev || window.event;
			// 				var down = true;
			// 				if (oEvent.detail) {
			// 					down = oEvent.detail > 0
			// 				} else {
			// 					down = oEvent.wheelDelta < 0
			// 				}
			// 				if (this.$options.methods.fnWheel) {
			// 					this.$options.methods.fnWheel.call(this, down, oEvent);
			// 				}
			// 				if (oEvent.preventDefault) {
			// 					oEvent.preventDefault();
			// 				}
			// 				return false;
			// 			},
			// 			fnWheel(down, oEvent) {
			// 				let oImg = document.getElementById('oimg')
			// 				let box = document.getElementById('contbox')
			// 				if (typeof oImg.naturalWidth == "undefined") {
			// 					// IE 6/7/8
			// 					var i = new Image();
			// 					i.src = oImg.src;
			// 					var rw = i.width;
			// 					var rh = i.height;
			// 				} else {
			// 					// HTML5 browsers
			// 					var rw = oImg.naturalWidth;
			// 					var rh = oImg.naturalHeight;
			// 				}
			// 				var oldWidth = oImg.offsetWidth;
			// 				var oldHeight = oImg.offsetHeight;
			// 				box.style.width = oldWidth
			// 				box.style.height = oldHeight
			// 				var oldLeft = oImg.offsetLeft;
			// 				var oldTop = oImg.offsetTop;
			// 				var scaleX = (oEvent.clientX - oldLeft) / oldWidth; //比例
			// 				var scaleY = (oEvent.clientY - oldTop) / oldHeight;
			// 				console.log('oldWidth' + oldWidth)
			// 				if (down) {
			// 					console.log('---')
			// 					if (oImg.offsetWidth * 0.9 <= rw) {
			// 						oImg.style.width = rw + 'px'
			// 					} else {
			// 						oImg.style.width = oImg.offsetWidth * 0.9 + "px";
			// 					}
			// 				} else {
			// 					console.log('++++')
			// 					if (oImg.offsetWidth * 1.1 >= rw) {
			// 						oImg.style.width = rw + 'px'
			// 					} else {
			// 						oImg.style.width = oImg.offsetWidth * 1.1 + "px";
			// 					}
			// 
			// 				}
			// 				var newWidth = oImg.offsetWidth;
			// 				var newHeight = oImg.offsetHeight;
			// 				oImg.style.left = oldLeft - scaleX * (newWidth - oldWidth) + "px";
			// 				oImg.style.top = oldTop - scaleY * (newHeight - oldHeight) + "px";
			// 			}

			// 鼠标按下
			mousedown(e) {
				let event = e
				var el = event.target
				let typeId = el.getAttribute('typeid') //获取点击图标的typeid
				let iconid = el.getAttribute('iconid')//获取点击图标的pointid
				el.style.zIndex = this.Zindex++
				this.wmove(el,typeId,iconid)
			},
			// 拖动鼠标
			wmove(el,typeId,iconid) {
				let ox = null
				let oy = null
				let id = typeId
				let pid = iconid
				el.onmousemove = (e) => {
					let x = e.clientX - el.offsetLeft
					let y = e.clientY - el.offsetTop
					this.operate = 2 //拖动模式
					document.onmousemove = (e) => {
						// 主区域距左边的距离
						let wideht = document.body.offsetWidth
						let mainx = this.$refs.mainbox.getBoundingClientRect().left
						// 主区域距上边的距离
						let mainy = this.$refs.mainbox.getBoundingClientRect().bottom
						if (e.clientX <= mainx) {
							el.style.left = '0'
							return false
						}
						if (e.clientY <= 0) {
							el.style.top = '0'
							return false
						}
						if (e.clientX >= this.$refs.mainbox.offsetWidth + mainx) {
							el.style.left = this.$refs.mainbox.offsetWidth + mainx + 'px'
							return false
						}
						ox = (e.clientX - x)/this.h
						oy = (e.clientY - y)/this.w
						el.style.left = e.clientX - x + 'px'
						el.style.top = e.clientY - y + 'px'
					}

				}
				//鼠标松开
				this.$refs.mainbox.onmouseup = () => {
					// console.log('鼠标送开了')
					el.onmousemove = null
					this.operate == 2 ? this.changePiont(ox,oy,id,pid) : '' // 2为移动模式执行
					
				}
				document.onmouseup = () => {
					document.onmousemove = null
				}
			},
			// 添加点击图片
			addMark(e) {

				let src = this.$store.state.oimg
				let id = this.$store.state.id
				
				if (e.target.className == 'iconPOsition') {
					// e.target.className = 'iconPOsition active'
					return false
				}
				if (!src && !id) {
					this.isMag = true //显示提示窗
					this.closeToast() //关闭提示窗
					return false
				}
				let times = this.HEgetTime() //portid
				let el = document.createElement('img') //创建img元素
				let mainx = this.$refs.mainbox.getBoundingClientRect().left //容器距左边的距离
				el.setAttribute('src', src)
				el.setAttribute('width', this.size)
				el.setAttribute('height', this.size)
				el.style.left = e.clientX - mainx + 'px' //标注点x轴
				el.style.top = e.clientY + 'px' //标注点y轴
				el.className = 'iconPOsition'
				e.currentTarget.appendChild(el)
				this.operate = 1 //1为新增模式
				let ox = (e.clientX - mainx)/this.h //x轴
				let oy = e.clientY/this.w // y轴
				let pid = this.HEgetTime() // 图标id
				this.changePiont(ox,oy,id,pid)
			},
			// 关闭提示弹窗
			closeToast() {
				setTimeout(() => {
					this.isMag = false
				}, 2000)
			},
			// 修改点位坐标
			changePiont(ox,oy,id,pid){
				this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=changeIconProject', {
					'userId': 355,
					'projectId': this.$route.query.id,
					'floorId': this.ofId,
					'pointIconSize':'1', //修改 点位图标尺寸。1=小号；2=中号；3=大号
					'operate':this.operate ,//操作模式。1=新增；2=移动；3=删除
					'typeId':id,
					'posx':ox,
					'posy':oy,
					'pointId':pid,
					'portnum':0
				}, {
					emulateJSON: true
				}, ).then(function(res) {
					console.log(res.body.msg)
				}, function(res) {
					alert('分类数据异常!')
				});
			},
			// 生成时间戳
			HEgetTime(){
				let time = new Date()
				let gettimes = time.getTime()
				return 'wp' + gettimes
			}
		},

		
	}
</script>

<style>
	.iconPOsition.active {
		border: 2px solid #D0021B;
		border-radius: 50%;
	}

	.imgbox img {
		max-width: 100%;
		padding: 0;
		margin: 0;
		border: 0;
		display: block;
	}

	.imgbox {
		overflow: hidden;
		position: relative;
		display: inline-block;
	}

	.iconPOsition {
		position: absolute;
		cursor: pointer;
		z-index: 1;
	}
</style>
