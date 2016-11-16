//var arr = ["кришна", "кришна", "харе", "харе",  "харе", "харе", "кришна", "кришна", "8-()"];
//function uniqueVal(value, index, self) {
    //return self.indexOf(value) === index;
//}
//console.log( arr.filter( uniqueVal) ); // ["кришна", "харе", "8-()"]



function unique(arr) {
    var obj = {};
    for(var i=0; i<arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE<9
}
var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
console.log( unique(strings) ); // кришна, харе, 8-()
