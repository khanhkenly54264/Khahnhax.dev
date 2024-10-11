$().ready(function(){
    $('.p-act button.plus').click(function(){
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price:",price);

        let qty = $(this).siblings('input').val();
        console.log("Số lượng",qty);
        qty = parseInt(qty) +1
        $(this).siblings('input').val(qty);

        let thanhtien = qty*parseFloat(price);

        console.log("Thanh tien:",thanhtien);
        

        $(this).parent().siblings("p").children('span#total').text(fn_formatMoney(thanhtien,0,',','.'));
        $(this).parent().siblings("p").children('span#total').attr("data-money",thanhtien);

        let tong = fn_tongThanhTien();
        $("#total").html(fn_formatMoney(tong,0,',','.'));

        $(".tong-tien").html(fn_formatMoney(tong,0,',','.'));
    });

    $('.p-act button.minus').click(function(){
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price:",price);

        let qty = $(this).siblings('input').val();
        if (parseInt(qty)<=0) return;
        console.log("Số lượng",qty);
        qty = parseInt(qty) - 1
        
        $(this).siblings('input').val(qty);

        let thanhtien = qty*parseFloat(price);

        console.log("Thanh tien:",thanhtien);
        

        $(this).parent().siblings("p").children('span#total').text(fn_formatMoney(thanhtien,0,',','.'));
        $(this).parent().siblings("p").children('span#total').attr("data-money",thanhtien);

        let tong = fn_tongThanhTien();
        $("#total").html(fn_formatMoney(tong,0,',','.'));

        $(".tong-tien").html(fn_formatMoney(tong,0,',','.'));

    })

    $('.p-act input').change(function(){
        let price = $(this).siblings('input').attr('data-price');
        console.log("Price:",price);

        let qty = $(this).siblings('input').val();
        if (qty>=10|| qty <=1 ) return;
        console.log("Số lượng",qty);
        

        let thanhtien = qty*parseFloat(price);
        

        $(this).parent().siblings("p").children('span#total').text(fn_formatMoney(thanhtien,0,',','.'));
        $(this).parent().siblings("p").children('span#total').attr("data-money",thanhtien);

        let tong = fn_tongThanhTien();
        $("#total").html(fn_formatMoney(tong,0,',','.'));

        $(".tong-tien").html(fn_formatMoney(tong,0,',','.'));

    })



    $('button#btn-remove').click(function(){
        if(!confirm('Bạn có muốn xóa không')) return;

        $(this).parent().parent().remove();
    })
})
const fn_tongThanhTien = () =>{
    let tong = 0;
    $('.box-item .thanh-tien').each(function(){
        let thanhtien = $(this).attr('data-money');
        tong += parseFloat(thanhtien);
    })
    return tong;
}


function fn_formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
 
      const negativeSign = amount < 0 ? "-" : "";
 
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
 
      return negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
};

