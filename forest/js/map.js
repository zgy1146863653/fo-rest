window.init = function(){//异步加载
        var longitude=113.5483600000;
        var latitude=22.2464800000;
        var city_value;//查询的城市
        var btn=document.getElementById("btn");//查询按钮
        var city=document.getElementById("city");
        var answer=document.getElementById("answer");//天气预报答案框

        var map = new AMap.Map('container', {
            zoom:15,//级别
            //resizeEnable:true,//JS API的初始加载定位：无需传入对应参数就能获取大致的定位信息,但只能定位到城市一级
            center: [longitude, latitude],//中心点坐标
        });
        AMap.plugin('AMap.ToolBar',function(){//异步加载插件
            var toolbar = new AMap.ToolBar();//添加缩放控制插件
            map.addControl(toolbar);
        });
        //添加天气查询插件
        btn.onclick=function () {//点击查询
            city_value=city.value;//将input的值赋给city_value
            AMap.plugin('AMap.Weather',function(){
                var weather=new AMap.Weather();
                weather.getLive(city_value,function(err,data){
                    if(err==null){//返回正常的情况下
                        InnerText(data.weather,data.temperature,data.humidity,data.reportTime);//为什么？
                        console.log("后台获取到的天气信息为:");
                        console.log(data);
                    }else
                        alert("查询天气发生错误");
                });
            });
        }
        function InnerText(weather,temperature,humidity,time){
            answer.innerHTML="";
            var p1=document.createElement("p");
            var p2=document.createElement("p");
            var p3=document.createElement("p");
            var p4=document.createElement("p");
            p1.innerText="天气："+weather;
            p2.innerText="温度："+temperature+"℃";
            p3.innerText="湿度："+humidity+"%";
            p4.innerText="数据更新时间："+time;
            answer.appendChild(p1);
            answer.appendChild(p2);
            answer.appendChild(p3);
            answer.appendChild(p4);
        }
        //实时路况图层
        var trafficLayer=new AMap.TileLayer.Traffic({
            zIndex:10
        });
        //添加点标记
        var marker=new AMap.Marker({
            position:[longitude,latitude]
        })
        //添加折线
        var lineArr=[
            [113.5440444946, 22.2500969485],
            [113.5446453094, 22.2449332713],
            [113.5498166084, 22.2509707828],
            [113.5553741455, 22.2498534099],
            [113.5536575317, 22.2512488198],
            [113.5486793518, 22.2515268562],
            [113.5440444946, 22.2500969485],
        ];
        var polyline = new AMap.Polyline({
            path: lineArr,          //设置线覆盖物路径
            strokeColor:"#FF0000", //线颜色
            strokeWeight: 4,        //线宽
            strokeStyle: "solid",   //线样式
        });
        map.add(trafficLayer);
        map.add(marker);
        map.add(polyline);
}
