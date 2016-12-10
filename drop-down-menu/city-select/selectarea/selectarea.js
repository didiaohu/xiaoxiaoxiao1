import {Promise} from '../utils/util';

const API = 'https://api.getweapp.com/vendor/zto/baseArea?msg_type=GET_AREA&data=';

const selectArea = {
  addDot:function(arr) {
    if(arr instanceof Array) {
      arr.map(val => {
        if(val.fullName.length > 4) {
          val.fullNameDot = val.fullName.slice(0, 4) + '...';
          return val;
        }else {
          val.fullNameDot = val.fullName;
          return val;
        }
      }) 
    }
  },
  load:function(_this) {
    _this.setData({
      isShow: false
    });
    Promise(wx.request, {
      url: API + '0',
      method: 'GET'
    }).then((province) => {
      const firstProvince = province.data.result[0];
      selectArea.addDot(province.data.result);
      _this.setData({
        proviceData: province.data.result,
        'selectedProvince.index': 0,
        'selectedProvince.code': firstProvince.code,
        'selectedProvince.fullName': firstProvince.fullName,
      });
      return (
        Promise(wx.request, {
          url: API + firstProvince.code,
          method: 'GET'
        })
      );
    }).then((city) => {
      const firstCity = city.data.result[0];
      selectArea.addDot(city.data.result);
      _this.setData({
        cityData: city.data.result,
        'selectedCity.index': 0,
        'selectedCity.code': firstCity.code,
        'selectedCity.fullName': firstCity.fullName
      });
      return (
        Promise(wx.request, {
          url: API + firstCity.code,
          method: 'GET'
        })
      );
    }).then((district) => {
      const firstDistrict = district.data.result[0];
      selectArea.addDot(district.data.result);
      _this.setData({
        districtData: district.data.result,
        'selectedDistrict.index': 0,
        'selectedDistrict.code': firstDistrict.code,
        'selectedDistrict.fullName': firstDistrict.fullName
      });
    }).catch((e) => {
      console.log(e);
    })
  },
  tapProvince:function(e, _this) {
    const dataset = e.currentTarget.dataset;
    Promise(wx.request, {
      url: API + dataset.code,
      method: 'GET'
    }).then((city) => {
        selectArea.addDot(city.data.result);
        _this.setData({
            cityData: city.data.result,
            'selectedProvince.code': dataset.code,
            'selectedProvince.fullName': dataset.fullName,
            'selectedCity.code': city.data.result[0].code,
            'selectedCity.fullName': city.data.result[0].fullName
        });
        return (
          Promise(wx.request, {
            url: API + city.data.result[0].code,
            method: 'GET'
          })
        );
    }).then((district) => {
        selectArea.addDot(district.data.result);
        _this.setData({
            districtData: district.data.result,
            'selectedProvince.index': e.currentTarget.dataset.index,
            'selectedCity.index': 0,
            'selectedDistrict.index': 0,
            'selectedDistrict.code': district.data.result[0].code,
            'selectedDistrict.fullName': district.data.result[0].fullName
        });
    }).catch((error) => {
      console.log(error);
    })
  },
  tapCity:function(e, _this) {
    const dataset = e.currentTarget.dataset;
    Promise(wx.request, {
      url: API + dataset.code,
      method: 'GET'
    }).then((district) => {
       selectArea.addDot(district.data.result);
       _this.setData({
            districtData: district.data.result,
            'selectedCity.index': e.currentTarget.dataset.index,
            'selectedCity.code': dataset.code,
            'selectedCity.fullName': dataset.fullName,
            'selectedDistrict.index': 0,
            'selectedDistrict.code': district.data.result[0].code,
            'selectedDistrict.fullName': district.data.result[0].fullName
        });
    }).catch((error) => {
        console.log(error);
    })
  },
  tapDistrict:function(e, _this) {
      const dataset = e.currentTarget.dataset;
      _this.setData({
          'selectedDistrict.index': e.currentTarget.dataset.index,
          'selectedDistrict.code': dataset.code,
          'selectedDistrict.fullName': dataset.fullName
      });
  },
  confirm:function(e, _this) {
    _this.setData({
      address: _this.data.selectedProvince.fullName + ' ' + _this.data.selectedCity.fullName + ' ' + _this.data.selectedDistrict.fullName,
      isShow: false
    })
  },
  cancel:function(_this) {
    _this.setData({
      isShow: false
    })
  },
  choosearea:function(_this) {
    _this.setData({
      isShow: true
    })
  }
}

module.exports = {
  SA: selectArea
}
