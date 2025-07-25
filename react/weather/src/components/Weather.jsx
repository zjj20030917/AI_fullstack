import { useEffect, useState } from 'react';
import './weather.css';
import AMapLoader from '@amap/amap-jsapi-loader';
import {formatWeek} from '../lib/week'
import {formatWeatherImg} from '../lib/weatherImg'



function Weather() {

    const [city,setCity] = useState('北京市')
    const [weather, setWeather]  = useState({})
    const [futureWeather, setFutureWeather]  = useState([])

    useEffect(() => {
        window._AMapSecurityConfig = {
            securityJsCode: "a1eedd8c7baaa8025ec83dd7213d676d",
        };
        AMapLoader.load({
            key: "276f7014ed340fd22647365a6bcf32f5", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
        })
            .then((AMap) => {
                // 高德地图插件已生效
                // 获取城市定位
                getLocalCity(AMap);
            })
    }, [])

    const getLocalCity = (AMap) => {
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    console.log(result);
                    setCity(result.city)
                    //获取所在城市的天气
                    getWeather(AMap, result.city)
                    getFutureWeather(AMap, result.city)
                }
            })
        })
        
    }

    const getWeather = (AMap, myCity) => {
        //加载天气查询插件
        AMap.plugin("AMap.Weather", function () {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getLive(myCity, function (err, data) {
                console.log(err, data);
                setWeather(data)
            });
        });
    }

    const getFutureWeather = (AMap, myCity) => {
        //加载天气查询插件
        AMap.plugin("AMap.Weather", function () {
            //创建天气查询实例
            var weather = new AMap.Weather();
            //执行实时天气信息查询
            weather.getForecast(myCity, function (err, data) {
                console.log(err, data);
                var weather = data.forecasts.shift()
                setFutureWeather(weather)
            });
        });
    }

    return (
        <div className="weather">
            <div className="hd">
                <div className="city">
                    <i className="iconfont icon-dingwei"></i>
                    {city}
                </div>
                <div className="changeCity">
                    <div className="changeCity-btn">
                        <i className="iconfont icon-chengshijianzhu"></i>
                        切换城市
                    </div>
                </div>
            </div>
            <div className="bd">
                <div className="today">
                    <div className="today-temperature">
                        <div className="temp-info">{weather.temperature}℃</div>
                        <div className="weather-info">{weather.weather}</div>
                    </div>
                    <div className="today-wind">
                        <ul>
                            <li>
                                <i className="iconfont icon-shuidi"></i>
                                <p className='category'>湿度</p>
                                <p className='value'>{weather.humidity}%</p>
                            </li>
                            <li>
                                <i className="iconfont icon-fengxiang"></i>
                                <p>风向</p>
                                <p>{weather.windDirection}风</p>
                            </li>
                            <li>
                                <i className="iconfont icon-fengli"></i>
                                <p>风力</p>
                                <p>{weather.windPower}级</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="future">
                    <div className="title">三日天气预报</div>
                    <ul className="future-list">
                        <li className="future-item">
                            <div className="week">周六</div>
                            <div className="pic">
                                <img src="https://img1.baidu.com/it/u=1896439509,3094130941&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="" />
                            </div>
                            <div className="max-min">28℃ / 19℃</div>
                        </li>
                        <li className="future-item">
                            <div className="week">周六</div>
                            <div className="pic">
                                <img src="https://img1.baidu.com/it/u=1896439509,3094130941&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="" />
                            </div>
                            <div className="max-min">28℃ / 19℃</div>
                        </li>
                        <li className="future-item">
                            <div className="week">周六</div>
                            <div className="pic">
                                <img src="https://img1.baidu.com/it/u=1896439509,3094130941&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="" />
                            </div>
                            <div className="max-min">28℃ / 19℃</div>
                        </li>
                    </ul>
                </div>
                <div className="tendency"></div>
            </div>
            <div className="container"></div>
        </div>
    )
}

export default Weather;