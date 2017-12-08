
 
var str = "我爱北京天安门，天安门上太阳升。";
var re = /北京|天安门/g;  //  找到北京 或者天安门 全局匹配
var str2 = str.replace(re,function(str){
            console.log(str); //用来测试：函数的第一个参数代表每次搜索到的符合正则的字符，所以第一次str指的是北京 第二次str是天安门 第三次str是天安门
            var result = '';
            for(var i=0;i<str.length;i++){
                result += '*';
            }  
            console.log(result);            
            return result; //所以搜索到了几个字就返回几个* 

        });
var x = 1;

function foo(x = x) {
  console.log();
}

foo() 