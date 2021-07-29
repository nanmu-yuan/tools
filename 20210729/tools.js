// 封装call 方法封装
function call(Fn, obj, ...params) {
    //调用对象为null 或者不存在的时候 调用对象指向全局对象
    if (obj === 'underfine' || obj === null) {
        obj = globalThis; // node 、window
    }
    obj.hander = Fn;
    let result = obj.hander(...params);
    delete obj.hander;
    return result;
}
// 封装apply 方法
function apply(Fn, obj, args) {
    if (obj === 'underfine' || obj === null) {
        obj = globalThis;
    }
    obj.hander = Fn;
    let result = obj.hander(...args);
    delete obj.hander;
    return result;
}
// 封装 bind方法
function bind(Fn, obj, ...args) {
    return function (...args1) {
        return call(Fn, obj, ...args, ...args1)
    }
}
// 封装节流方法
function throttle(callback, wait) {
    // 起始时间
    let start = 0;
    return function (e) {
        // 终止时间
        let now = Date.now();
        if (now - start > wait) {
            callback.call(this, e);
            start = now;
        }
    }
}
// 封装防抖函数
function debounce(callback, wait) {
    let timeId = null;
    return function (e) {
        if (timeId !== null) {
            clearTimeout(timeId);
        }
        timeId = setTimeout(() => {
            callback.call(this, e)
            timeId = null;
        }, wait)
    }
}