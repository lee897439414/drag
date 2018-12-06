<template>
	<div class="left_side">
		<div class="logo"><img src="../assets/images/logo.png"></div>
		<div class="left_item">
			<div class="main_title">
				<i class="icon iconfont icon-title-icon-main"></i>壹智能首页
			</div>
		</div>
		<div class="left_item" :class="{'active':id==key}" v-for="(item,key) in menudata">
			<div class="main_title" @click="oclick(key)">
				<i class="icon iconfont" :class="item.icon"></i>{{item.name}}
			</div>
			<ul class="oul" v-if="id==key" >
				<li :class="{'active':i.id==id2}" v-for="i in item.pordata" @click="liclick(i.id)">
					<span>{{i.name}}</span>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import bus from '../assets/eventBus'
	export default {
		data() {
			return {
				id: '0',
				id2: '-1',
				isCollapsed: false,
				items: [1, 2, 3, 4],
				menudata: [{
						'id': 2,
						'name': '制图模式',
						'icon': 'icon-title-icon-ztms-blue',
						'to': '',
						'pordata': [{
								'id': '-1',
								'name': '全部项目',
								'icon': '',
								'to': '',
								'pordata': []
							}, {
								'id': '0',
								'name': '进行中',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '1',
								'name': '测试',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '2',
								'name': '已成交',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '3',
								'name': '失败',
								'icon': '',
								'to': '',
								'pordata': []
							},
						]
					},
					{
						'id': 3,
						'name': '快速模式',
						'icon': 'icon iconfont icon-title-icon-ksms',
						'to': '',
						'pordata': [{
								'id': ' 3-1',
								'name': '全部项目',
								'icon': '',
								'to': '',
								'pordata': []
							}, {
								'id': '3-2',
								'name': '进行中',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '3-3',
								'name': '测试',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '3-4',
								'name': '已成交',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '3-5',
								'name': '失败',
								'icon': '',
								'to': '',
								'pordata': []
							},
						]
					},
					{
						'id': 4,
						'name': '智能模式',
						'icon': 'icon-title-icon-znms',
						'to': '',
						'pordata': [{
								'id': '4-1',
								'name': '全部项目',
								'icon': '',
								'to': '',
								'pordata': []
							}, {
								'id': '4-2',
								'name': '进行中',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '4-3',
								'name': '测试',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '4-4',
								'name': '已成交',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '4-5',
								'name': '失败',
								'icon': '',
								'to': '',
								'pordata': []
							},
						]
					},
					{
						'id': 5,
						'name': '管理',
						'icon': 'icon-title-icon-manage',
						'to': '',
						'pordata': [{
								'id': '5-1',
								'name': '销售管理',
								'icon': '',
								'to': '',
								'pordata': []
							},
							{
								'id': '5-2',
								'name': '销售项目管理',
								'icon': '',
								'to': '',
								'pordata': []
							},
						]
					},
					{
						'id': 6,
						'name': '通知中心',
						'icon': 'icon-title-icon-notice',
						'to': '',
						'pordata': []
					},

				]
			}
		},

		components: {

		},
		methods: {
			oclick(key) {
				this.id = key
				bus.$emit('showAll',-1)
			},
			liclick(key) {
				this.id2 = key
				bus.$emit('screen',key)
			}

		}
	}
</script>

<style>

</style>
