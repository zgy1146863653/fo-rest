var mycharts1=echarts.init(document.getElementById("item1"));
var option1={
	title:{
		text:'本月温度比例',
		subtext:'测试',
		x:'center'
	},
	tooltip:{
		trigger:'item',
		formatter:"{a}<br/>{b}:{c}({d}%)"
	},
	toolbox:{
		feature:{
			saveAsImage:{
				show:true
			},
			dataView:{
				show:true
			},
			restore:{
				show:true
			}
	}
	},
	legend:{
		orient:'vertical',
		left:'left',
		data:['35°℃以上','30℃-35℃','25℃-30℃','20℃-25℃','25°℃以下']
	},
	series:[
	{
		name:'温度分布',
		type:'pie',
		radius:'55%',
		center:['50%','60%'],
		data:[
		{value:5, name:'35°℃以上'},
		{value:3, name:'30℃-35℃'},
		{value:10, name:'25℃-30℃'},
		{value:12, name:'20℃-25℃'},
		{value:11, name:'20°℃以下'}
		],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			}
		}
	}
	]
};
mycharts1.setOption(option1);