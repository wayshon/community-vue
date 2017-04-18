import Vue from 'vue'
import axios from 'axios'

export default {
    SERVERROOT: 'http://www.cft.so/api/1',
    version: "1.0.0",
    buildId: "1",
    app: Vue, //整个实例对象

    axiosUnit(param, successcallback, errorcallback, showLoad) {
        var self = this;
        if (!showLoad || showLoad == undefined) {
            Vue.$vux.loading.show({
                text: '加载中..'
            })
        }
        
        axios({
            url: param.url + "?randomtime=" + new Date().getTime(), //加上时间戳是为了防止浏览器接口缓存
            method: param.method,
            baseURL: param.baseURL == undefined ? this.SERVERROOT : param.baseURL,
            headers: param.headers == undefined ? JSON.parse(localStorage.getItem('headers')) : param.headers,
            params: param.pa,
            data: param.data,
            timeout: param.timeout == undefined ? 5000 : param.timeout,
            onUploadProgress: param.onUploadProgress
        }).then(function (response) {
            self.dealREsponse(response, successcallback, errorcallback);
        })
        .catch(function (error) {
            self.dealREsponse(error, successcallback, errorcallback);
        });
    },
    dealREsponse(response, successcallback, errorcallback) {
        // console.log(response);
        var self = this;
        Vue.$vux.loading.hide()

        if (response.status == 200) {
            //http成功
            if (successcallback) {
                successcallback(response.data)
            } else {
                console.log('操作成功！')
            }
        } else if (response.status == 0) {
            //网络不通畅，连接超时
            var data = {
                code: 0,
                msg: "服务连接出错，请稍后再试！"
            }
            if (errorcallback) {
                errorcallback(data)
            } else {
                Vue.$vux.alert.show({
                    title: '提示',
                    content: data.msg
                })
            }
        } else if (response.status == 403) {
            
        } else {
            //http失败
            var data = {
                code: 500,
                msg: "操作异常，请稍后再试！"
            }
            if (errorcallback) {
                errorcallback(data)
            } else {
                Vue.$vux.alert.show({
                    title: '提示',
                    content: data.msg
                })
            }
        }
    }
}
