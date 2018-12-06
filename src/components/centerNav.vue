<template>
	<div class="center_nav">
		<div class="c_title">功能分类 <span class="info">(选图标放置点位)</span></div>
		<div class="type_list">
			
			<div class="item" v-for="(item,index) in typeall">
				<div class="top_title" :class="{active:isshowList == index}" @click="intelligenceTitle(index)">
					<i class="'icon iconfont" :class="'icon-left-menu-icon--x-'+item.id"></i>{{item.name}} <span class="add_count" v-if="item.num>0">{{item.num}}</span>
				</div>
				<div class="olist" v-if="isshowList == index">
					<div class="item_box">
						<div   v-for="(citem,cindex) in item.child" >
							<div v-if="citem.image != '' &&citem.codes ==1" :id="citem.id" :osrc="'http://app.oneapptech.cn'+citem.image"  class="t_list" :class="{active:indexChildren == cindex}" @click="intelligenceActive(cindex,$event)">
								<img :src="'http://app.oneapptech.cn'+citem.image" width="24" height="24">
								<div class="t_name">{{citem.name}}</div>
								<div class="t_sum">{{citem.num}}</div>
							</div>
						</div>
					</div>
					<div class="type_switch" v-if="item.name =='智能照明'">
						<div class="otitle">
							<div class="switch_tips">以下图标请根据实际需求放置点位</div>
						</div>
						<div class="switch_main" v-if="ditem.codes==3" v-for="(ditem,dindex) in item.child" >
							<div class="switch_title" @click="showroad(dindex)">{{ditem.name}} <span class="s_icon"></span> <span class="count fr" v-if="ditem.num>0">{{ditem.num}}</span></div>
							<div class="switch_title_list" v-if="roadshow == dindex">
								<div class="sw_list clearfix" >
									<div class="s_item fl" :class="{active:isactive == dindex}" @click="roadClick(dindex)" v-for="(ditem,dindex) in ditem.image">
										<div class="s_img">
											<img :src="'http://app.oneapptech.cn'+ditem" width="26" height="26">
										</div>
										<div class="s_name">{{dindex+1}}路</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				isshowList:-1, //是否显示子分类
				indexChildren:-1,
				roadshow:-1,
				isactive:-1,
			};
		},
		props:['fId','typeall'],
		methods: {
			// 点击显示子分类
			intelligenceTitle(index){
				this.isshowList = index
				this.indexChildren = -1 //重置子分类选中
			},
			// 点击子分类
			intelligenceActive(cindex,$event){
				this.indexChildren = cindex //子分类选中
				let osrc =  $event.currentTarget.getAttribute('osrc')
				let oid =  $event.currentTarget.getAttribute('id')
				let e = $event
				this.$store.commit('chooseImg',{'osrc':osrc,'oid':oid})
				// console.log(osrc)
			},

			// 回路显示隐藏
			showroad(index){
				this.roadshow = index
				this.isactive = -1
			},
			// 回路点击
			roadClick(index){
				this.isactive = index
			}
		}
	}
</script>

<style>
	.top_title.active {
		color: #00b9e0;
		font-weight: 500;
	}
	.s_item.fl.active{
		color:red;
	}
</style>
