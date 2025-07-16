import qing from '../imgages/晴天.png'
import duoyun from '../imgages/多云.png'
import xiaoyu from '../imgages/小雨.png'
import leizhenyu from '../imgages/雷阵雨.png'


function formatWeatherImg(str) {
    switch (str) {
        case '晴':
            return qing
        case '多云':
            return duoyun
        case '小雨':
            return xiaoyu
        case '雷阵雨':
            return leizhenyu
    }
}
export {
    formatWeatherImg
}
