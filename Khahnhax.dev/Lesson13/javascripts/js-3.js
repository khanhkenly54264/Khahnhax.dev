// Toán tử, toạn hạng, biểu thức, câu lệnh, khối lệnh
// 1. toán tử số học:  * , / , + , - , %
var num1, num2;
// Gán giá trị
num1=12;
num2=25;

//Thực hiện các phép tính toán số học
res = num1*num2;
console.log(num1, "*" , num2, "=", res);
res = num1-num2;
console.log(num1, "-" , num2, "=", res);
res = num1/num2;
console.log(num1, "/" , num2, "=", res);
res = num1/num2;
console.log(num1, "+" , num2, "=", res);
res = num1%num2;
console.log(num1, "%" , num2, "=", res);

//2. phép toán so sánh => trả về giá trị true/false (boolean)
// > , >= , < , <= , == , === , != , !==

res = num1>num2;
console.log(num1, ">" , num2, "=>" , res); 
console.log(num2, ">" , num1, "=>" , res); 
res = num1>=num2;
console.log(num1, ">=",  num2, "=>" , res);
console.log(num2, ">=",  num1, "=>" , res);
res = num1<num2;
console.log(num1, "<" , num2, "=>" , res); 
console.log(num2, "<" , num1, "=>" , res); 
res = num1<=num2;
console.log(num1, "<=",  num2, "=>" , res);
console.log(num2, "<=",  num1, "=>" , res);
res = num1==num2;
console.log(num1," ==",  num2, "=>" , res);
res = num1===num2;
console.log(num1, "=== ", num2, "=>" , res)
res = num1!=num2;
console.log(num1, "!=",  num2, "=>" , res);
res = num1!==num2;
console.log(num1, "!==",  num2, "=>" , res);

//3. toán tử logic (and && or || not !)
num1=12;
num2=15;

res= (num1>10) && (num2<10);
console.log("(num1>10) && (num2<10) =>" , res);

res= (num1>10) || (num2<10);
console.log("(num1>10) || (num2<10)", res);

res= ! (num1>10) || (num2<10);
console.log("(num1>10) || (num2<10)", res);

res= ! (num1>10) || (num2<10);
console.log("!(num1>10) || (num2<10)", res);

res= (num1>10) || ! (num2<10);
console.log("(num1>10) || !(num2<10)", res);

//4. toán tử đặc biệt

res= (num1>10)? "giá trị lớn hơn": "giá trị nhỏ hơn";
console.log(res);

res= (num2 % 2 == 0)? "số chẵn": "Số lẻ";
console.log(num2 , "là" , res);

// toán tử type of

res = typeof(num1); //ỉnteger
console.log("typeof(num1):", res);

num1="12345";
res = typeof(num1); //String
console.log("typeof(num1):", res)