<template>
	<div class="content">
		<leftNav></leftNav>
		<div class="right_side">
			<div class="top_item">
				<!-- 搜索框 -->
				<searchItem></searchItem>
				<!-- 消息提示 -->
				<notice></notice>
				<!-- 用户信息 -->
				<userInfo></userInfo>
			</div>
			<div class="main_content">
				<showTip  v-if="showTip"></showTip>	
				<listItem v-if="listarr" v-on:hasArr="isarr"></listItem>
				<div class="r_content">
					<creatBtn v-on:showMark="projectMask"></creatBtn>
					<!-- 最近打开 -->
					<lately></lately>
					<!-- 最新项目 -->
					<latestProject></latestProject>
				</div>
			</div>
		</div>
		<!-- 确认弹窗 -->
		<heConfirm v-show="isconfirm"></heConfirm>
		<!-- 新建项目弹窗 -->
		<newproject v-if="isCreate" v-on:closeFn="colseMethod"></newproject>
		<maskItem v-if="isShow"></maskItem> <!--遮罩层 -->
	</div>
	
</template>
<script>
	import leftNav from '../components/left_nav_f'
	import notice from '../components/notice'
	import searchItem from '../components/search_item'
	import userInfo from '../components/userInfo'
	import showTip from '../components/showTip'
	import creatBtn from '../components/createBtn'
	import lately from '../components/lately'
	import latestProject from '../components/latestProject'
	import listItem from '../components/list'
	import heConfirm from '../components/heConfirm'
	import newproject from '../components/newProject'
	import maskItem from '../components/mask'
	export default {
		data() {
			return {
				showTip:false,
				isconfirm:false,
				listarr:true,
				isCreate:false,//是否新建项目
				isShow:false,//是否显示遮罩层
			}
		},
		components:{
			leftNav,
			notice,
			searchItem,
			userInfo,
			showTip,
			creatBtn,
			lately,
			latestProject,
			listItem,
			heConfirm,
			newproject,
			maskItem
		},
		methods:{
			projectMask(obj){
				this.isCreate = obj
				this.isShow = obj
			},
			// 关闭新建弹窗,和遮罩层
			colseMethod(result){
				this.isCreate = result
				this.isShow = result
			},
			// 检测列表是否有内容
			isarr(res){
				res == 0 ? this.showTip = true : this.showTip = false
			}
		}
	}

</script>

<style>
</style>