/**排序工具方法 */

/**
 * sortApi排序
 * @param {*} array 源数数据：数组
 * @param {*} key 属性名称：当数组项为object类型时的key名称
 * @param {*} level 排序级别：1为一般数组,2为对象数组
 * @param {*} sortBy 排序类型：asc为升序，des为降序
 */
function sortFunc(array,key,level,sortBy){
    var result = []
    if(array instanceof Array){ //当数据为数组类型时，才进行排序操作
        if(level===1){ // 如果为一般数组——纯数组
            switch(sortBy){
                case 'asc': result = array.sort((a,b)=>a-b);break;
                case 'des': result = array.sort((a,b)=>b-a);break;
                default: result = array.sort((a,b)=>a-b);
            }
        }
        if(level===2){
            switch(sortBy){
                case 'asc': result = array.sort((a,b)=>a[key]-b[key]);break;
                case 'des': result = array.sort((a,b)=>b[key]-a[key]);break;
                default: result = array.sort((a,b)=>a[key]-b[key]);
            } 
        }
        return result;
    }else{
        return new Error('sortFunc错误：源数据不是数组类型，不能进行排序操作。')
    }
}

// var arr = [1,3,5,2,6,4,9,10,8,7];
var arr = [{a:1},{a:8},{a:5},{a:2}];
console.log(sortFunc(arr,'a',2,'des'))