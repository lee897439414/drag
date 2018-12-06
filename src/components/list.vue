<template>
	<div class="l_content">
		<div class="margin_box clearfix">
			<div class="list_item " :class="{'march':item.projectstate==0,'test':item.projectstate==1,'complete':item.projectstate==2,'faild':item.projectstate==3}" v-for="(item,index) in mylist">
				<div class="list_box">
					<div class="list_title">{{item.projectname}}</div>
					<div class="right_tip">
						<div class="order_item">No.{{item.id}}</div>
						<div class="test_btn" @click="stClick(index)" v-if="item.projectstate==0">进行中</div>
						<div class="test_btn" @click="stClick(index)" v-else-if="item.projectstate==1">测试</div>
						<div class="test_btn" @click="stClick(index)" v-else-if="item.projectstate==2">已成交</div>
						<div class="test_btn" @click="stClick(index)" v-else="item.projectstate==3">失败</div>
						<div class="show_toast" v-if="oindex==index">
							<div class="t_item" @click="textv(item,index,'0')">进行中</div>
							<div class="t_item" @click="textv(item,index,'1')">测试</div>
							<div class="t_item" @click="textv(item,index,'2')">已成交</div>
							<div class="t_item" @click="textv(item,index,'3')">失败</div>
						</div>
					</div>
				</div>
				<router-link class="item_a" :to="{name:'Detail',query: { id: item.id}}">
					<div class="detail_item">
						<div class="item_name">客户姓名:</div>
						<div class="item_right">{{item.customername}}</div>
					</div>
					<div class="detail_item">
						<div class="item_name">客户电话: </div>
						<div class="item_right">{{item.customertelephone}}</div>
					</div>
					<div class="detail_item">
						<div class="item_name">客户地址: </div>
						<div class="item_right">{{item.customeraddress}}</div>
					</div>
				</router-link>
				<div class="editor_box">
					<i class="icon iconfont icon-btn-description-view"></i>
					<i class="icon iconfont icon-btn-description-shar"></i>
					<span class="spera"></span>
					<i class="icon iconfont icon-btn-description-modi"></i>
					<i class="icon iconfont icon-btn-cross-blue---" @click="hdelete(index,item.id)"></i>
					<span class="c_time">创建：{{item.x_createtime}}</span>
				</div>
				
			</div>
			
		</div>
		
	</div>

</template>

<script>
	import bus from '../assets/eventBus'
	export default {
		data() {
			return {
				oindex:-1,
				mylist:[],
				listAllArr:[]
			}
				
			
		},
		created() {
			 this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=projectInfo',{'user_id':355,'projectType':2,},{emulateJSON:true},
				).then(function(res){
				   this.listAllArr = res.body.result
				   console.log(this.mylist)
                },function(res){
                    alert('数据异常！')
                });
		},
		mounted() {
			bus.$on('screen',(msg)=>{
				this.mylist = []
				if(msg==-1){
					this.mylist = this.listAllArr
				}else{
					this.listAllArr.forEach((item)=>{
						if(item.projectstate == msg){
							this.mylist.push(item)
						}
					})
				}
				this.$emit('hasArr',this.mylist.length)
			})
			bus.$on('showAll',(msg)=>{
				this.mylist = this.listAllArr
			})
		},
		methods:{
			// 点击状态
			stClick(index){
				 this.oindex==index?this.oindex=-1:this.oindex=index
			},
			// 删除订单
			hdelete(index,id){
				this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=projectdel',{'user_id':355,'projectid':id,},{emulateJSON:true},
				).then(function(res){
					this.mylist.splice(index,1)
					alert('删除成功！')
				},function(res){
					alert('数据异常！')
				});
				
			},
			// 修改状态
			textv(item,index,val){
				this.oindex=-1
				console.log(val)
				switch(val){
					case 0:
						val = '进行中'
						this.projectstate=val
						break
					case 1:
						val = '测试'
						this.projectstate=val
						break
					case 2:
						val = '已成交'
						this.projectstate=val
						break
					case 3:
						val = '失败'
						this.projectstate=val
						break
				}
				this.$http.post('http://app.oneapptech.cn/index.php?m=Api&c=project&a=addfast',{'userid':355,'projectName':item.projectname,'customerName':item.customername,'customerTelephone':item.customertelephone,'customerAddress':item.customeraddress,'projectState':val,'projectid':item.id,'projectType':2},{emulateJSON:true},).then(function(res){
					alert(res.body.msg)
				},function(res){
					alert(res.body.msg)
				});
				item.projectstate = val
			}
		},
		
	}
</script>

<style>
	.right_tip{
		position: relative;
	}
	.list_item .show_toast{right:-90px;}
	.t_item,.read,.share,.editor,.delete{cursor: pointer;}
	.main_content .list_item.march{
		background: #f9fbff url(../assets/images/seal-1.png) no-repeat bottom right;
	}
	.main_content .list_item.test{
		background: #f9fbff url(../assets/images/seal-2.png) no-repeat bottom right;
	}
	.main_content .list_item.complete{
		background: #f9fbff url(../assets/images/seal-3.png) no-repeat bottom right;
	}
	.main_content .list_item.faild{
		background: #f9fbff url(../assets/images/seal-4.png) no-repeat bottom right;
	}
	.editor_box .icon{font-size: 18px; color: #00B9E0;margin-right: 10px;cursor: pointer;}
	.spera{display: inline-block;padding: 0;margin: 0 10px 0 0;width: 1px;height: 20px;background-color:#e3e8ef;}
	.editor_box .icon{
		position: relative;
	  -webkit-transition: font-size 0.25s ease-out 0s;
	  -moz-transition: font-size 0.25s ease-out 0s;
	  transition: font-size 0.25s ease-out 0s;
	  top: 0;
	  left: 0;
	  width: 20px;
	  height: 14px;
	}
	.editor_box .icon:hover{
	  font-size:30px;
	 
	}
</style>
