// Cấu trúc điều khiển If

//dạng 1:n If đơn
/*
    cú pháp: 
        if(condition-expresion){
            block statement;
        }
*/

//vis dụ: cho số num; kiểm tra số num có phải là số dương.

num=10;
if(num > 0){
    console.log(num, "là số dương");
}

// Nếu num > 0 thì gán lại giá trị num = -100

if(num > 0){
    num = -100;
    console.log(num);
}

// If . . .  Else

num = 12;
//kiểm tra số chẵn hay lẻ
if(num % 2 == 0){
    console.log(num , "là số chẵn");
}else{
    console.log(num, "là số lẻ");
}

// IF . . . Else . . . IF

// kiểm tra số num là số dương , âm, hay là số khong

if(num > 0){
    console.log(num, "la so duong");
}else if(num<0){
    console.log(num, "la so am");
}else{
    console.log(num, "la so khong");
}

// nested IF

num1= 12 ;
num2 = 15;

//neu num1 la so chan; kiem tra neu num2 la so le
// res = num1 + num2
// . . 
if(num1 % 2 == 0){
    if(num2 % 2 == 1){
        res=num1 + num2;
        console.log(res);
    }
}else{
    if(num2 % 2 == 1){
        res=num1 - num2;
        console.log(res);
    }
}

// giai phuong trinh bac nhat: ax+b=0

a=2;
b=6;
if (a === 0) {
    if (b === 0) {
        console.log("Phuong trinh da nghiem")
    } else{
        console.log("Phuong trinh vo nghiem")
    }
} else {
    res = -b/a;
    console.log("nghiem x =", res)
}

// giai phuong trinh bac hai: ax^2+bx+c=0

a=3;
b=9;
c=6;
    
delta = b * b - 4 * a * c;

if (a === 0) {
    console.log("Đây không phải là phương trình bậc hai.");
}
if (delta < 0) {
    console.log("Phương trình vô nghiệm.");
}

else if (delta === 0) {
    res=x1 = -b / (2 * a);
    res=x2 = b/ (2*a);
    console.log("Phương trình nghiệm kép: ", x1, x2);
}

else {
    res=x1 = (-b + Math.sqrt(delta)) / (2 * a);
    res= x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có hai nghiệm phân biệt:", x1 , x2)
}


