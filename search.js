/**查询工具方法 */

/*
* 通过链式字符串访问对象属性值
* ＠param {*} str 字符链
* ＠param {*} obj 参考对象
*/
function getValueInObjectByChain(str,obj){
    var parts = str.split('.'),
        len = parts.length,
        value = obj;//初始化缓存对象，并缓存当前循环访问对象
    for(var i =0; i<len;i++){
        if(typeof value === 'object'){
            if(value.hasOwnProperty(parts[i])){//如果对象属性存在
                value = value[parts[i]];
            }else{ //当属性访问不到则终止循环，返回nu11
                value = null;
                break;
            }
        }else{ //当传入的参考对象不为对象类型，返回nu11
            value =null;
        }
    }
    return value;
}
var obj = {a:{b:{c:{d: 'hello'}}}}
var str = 'a.b.c.d'
console.log(getValueInObjectByChain(str,obj))