var arr1=[];//蒸发量
var arr2=[];//降水量
var arr3=[];//平均温度
var mycharts3=echarts.init(document.getElementById("item3"));
mycharts2.showLoading(); //设置加载效果
function getArrTemp(){
    mycharts2.hideLoading();//接收到数据就隐藏
    $.ajax({
        type:"GET",
        async:false,//异步关闭(默认开启)这里一定不能异步加载,只能同步加载
        url:"./php/doAct.php?do=2",
        dataType:"json",
        success:function(result){   
                 //var obj=JSON.parse(result);//将获取到的json数组转化为对象
                var obj=result;
                for(var i=0;i<obj.length;i++){
                    arr1.push(obj[i].eva);
                    arr2.push(obj[i].pre);
                    arr3.push(obj[i].temp);
                }   
                console.log("返回的全年状态表数据为:\n"+JSON.stringify(result));
                //alert("获取成功！");  
        },
        error: function(){    
             alert('全年状态表没有获取到数据');    
         }, 
    });
    //console.log(arr);
    return arr1,arr2,arr3;
}
getArrTemp();//要运行函数!
// 指定图表的配置项和数据
option3 = {
    title:{
        text:'今年森林检测情况',
        subtext:'测试',
        x:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            saveAsImage: {show: true},
            restore: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度'],
        x:'left'
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max:400,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max:40,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:arr1
        },
        {
            name:'降水量',
            type:'bar',
            data:arr2
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:arr3
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
mycharts3.setOption(option3);