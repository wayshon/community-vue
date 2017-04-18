class commonTool {
        //不为空
    isNotBlank(val) {
            if (typeof(val) == "undefined" || val == null || val == "") {
                return false;
            }
            return true;
        }
        //数据为空显示
    isNotData(val) {
            if (this.isNotBlank(val)) {
                return val
            } else {
                return '暂无'
            }
        }
        //为空
    isBlank(val) {
            if (typeof(val) == "undefined" || val == null || val == "") {
                return true;
            }
            return false;
        }
    //是对象
    isObject(obj) {
            if (!(val !== null && typeof val === 'object' && val.constructor !== Array )) {
                return false;
            }
            return true
        }
        //是空对象
    isEmptyObject(obj) {
            if (!(obj !== null && typeof obj === 'object' && obj.constructor !== Array )) {
                return false;
            }
            for (var key in obj) {
                return false
            };
            return true
        }
        //时间格式化
    getFormatDate(date) {
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
                " " + date.getHours() + seperator2 + date.getMinutes() +
                seperator2 + date.getSeconds();
            return currentdate;
        }
        //清除cookie
    cookieClear(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = cookieGet(name);
        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();

    }
    //设置cookie
    cookieSet(c_name){
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
    //获取cookie
    cookieGet(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
    //清除cookie
    cookieClear(c_name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.cookieGet(c_name);
        if (cval != null) document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString();
    }
    isChinese(str){
        var pattern =/^[\u4e00-\u9fa5]+$/i;
        return pattern.test(str);
    }
}

export default new commonTool()