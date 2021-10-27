/**复制方法 */

/**
 * 合并对象1
 * @[arguments] 入参数组,每个对象以逗号隔开
 * @returns 目标对象，最终复制结果
 */
function mixins1(){
    var i = 1, //从第二个参数开时复制 
    len = arguments.length, // 入参长度
    target = arguments[0],// 将第一个参作为目标对象
    arg; //当前对象
    for(; i < len; i++){
        // 缓存当前对象
        arg = arguments[i];
        // 将当前对象中的属性及方法取出
        for(var property in arg){
            // 赋值给目标对象
            target[property] = arg[property];
        }
    }
    // 返回目标对象
    return target;
}

/**
 * 合并对象2
 * @[arguments] 入参数组,每个对象以逗号隔开
 * @returns 目标对象
 */
function mixins2(){
    // 解构入参
    return Object.assign(...arguments)
}

var target = mixins2({a:1},{b:2,get:function(){}},{c:3},{d:4})
console.log(target)