var arr1=[];//温度
var arr2=[];//湿度
var mycharts2=echarts.init(document.getElementById("item2"));
mycharts2.showLoading(); //设置加载效果
function getArrTemp(){
	mycharts2.hideLoading();//接收到数据就隐藏
	$.ajax({
		type:"GET",
		async:false,//异步关闭(默认开启)这里一定不能异步加载！！！！！！！！！！！
		url:"./php/doAct.php?do=1",
		dataType:"json",
		success:function(result){
				 //var obj=JSON.parse(result);//将获取到的json数组转化为对象
				var obj=result;//直接接受这个json对象
				for(var i=0;i<obj.length;i++){
					arr1.push(obj[i].temp);//将对象的数据添加到数组当中
					arr2.push(obj[i].hum);
				}
            	console.log("返回的温湿度数据为:"+JSON.stringify(result));
				//console.log(result);//打印这个json对象

		},
		error: function(){
             alert('温湿度图表没有获取到数据');
         },
	});
	//console.log(arr);
	return arr1,arr2;
}
getArrTemp();//要运行函数!

var option2={
title:{
	text:'本周温/湿度变化',
	subtext:'测试',
	x:'center',
	top:5
},
toolbox:{
	show:true,
	feature:{
		saveAsImage:{
			show:true
		},
		dataView:{
			show:true
		},
		dataZoom:{
			show:true
		},
		magicType:{
			type:['line']
		},
		restore:{
			show:true
		}
	}
},
legend:{
	data:['温度','湿度'],
	left:0
},
tooltip:{
	trigger:'axis'
},
xAxis:{
	data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
},
yAxis:{},//没有设置的时候根据x轴自动生成s
//console.log(arr);
series:[{
		name: '温度',
		type: 'bar',
		data: arr1		
	},{
		name:'湿度',
		type:'bar',
		data:arr2
	}
	]
};

mycharts2.setOption(option2);

