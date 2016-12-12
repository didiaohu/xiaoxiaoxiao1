import { SA } from '../../selectarea/selectarea';
const conf = {
    data: {

    },
    onLoad: function (options) {
        SA.load(this); // 初始化区域框
    },
    choosearea() { // 页面弹框触发事件
        SA.choosearea(this); 
    },
    addDot() { // 字符串截取
        SA.addDot(this);
    },
    tapProvince(e) { // 点击省份
        SA.tapProvince(e, this);
    },
    tapCity(e) { // 点击城市
        SA.tapCity(e, this);
    },
    tapDistrict(e) { // 点击区域
        SA.tapDistrict(e, this);
    },
    cancel() { // 取消选择
        SA.cancel(this);
    },
    confirm(e) { // 确认选择区域
        SA.confirm(e, this);
    }
}

Page(conf);