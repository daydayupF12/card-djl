//主菜单数据
module.exports.menuData = {
    'active':[1,11],
    'dataList':[
                {
                  'id':1,
                  'title':'卡券管理',
                  'icon':'fa fa-credit-card',
                  'url':'../cartoonCard/card_manage.html',
                  'list':[]
                  },
                {
                  'id':2,
                  'title':'门店管理',
                  'icon':'fa fa-home',
                  'url':'../store/store_manage.html',
                  'list':[]
                  },
                  
                  {
                  'id':3,
                  'title':'会员管理',
                  'icon':'fa fa-user',
                  'url':'../member/member_list.html',
                  'list':[]
                  },{
                  'id':4,
                  'title':'活动管理',
                  'icon':'fa fa-cogs',
                  'url':'../activity/activity_list.html',
                  'list':[]
                  }]
        }

var getdata = "getdata/";//区分服务器接口
//var getdata = "http://cdcdemo.woaap.com/";//区分服务器接口
var getdata = "../../";//区分服务器接口   

//后端接口路径
module.exports.url = {
    //业务结构    
    "structAll":getdata+"/struct/all",//业务结构整体全部
    "structView":getdata+"/struct/view",//业务结构查看
    "structDel":getdata+"/struct/del",//业务结构删除
    "structAdd":getdata+"/struct/add",//业务结构添加
    "structEdit":getdata+"/struct/edit",//业务结构编辑
}
module.exports.devUrl = "http://translite.woaap.com";