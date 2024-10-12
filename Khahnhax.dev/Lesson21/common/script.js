    
    //api: http://apixm.devmaster.vn/api/Products

var products = [];
const img_url="http://apixm.devmaster.vn";
$(document).ready(function () {
  console.log("reay....");

    //call api
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://apixm.devmaster.vn/api/Products",
    success: function (data, status, xhr) {
      console.log("data: ", data);
      dataProduct = data;

      console.log("dataProduct: ", dataProduct);
      fn_showProduct(dataProduct)
    },
  });

    //show data
  const fn_showProduct = (data) => {

    //fill data to html
    $('#product-list').html("");
    let list="";
    data.forEach(product =>{
        let item = `
    <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="productItem">
                        <div class="p-img">
                            <img src="${img_url}${product.image}" alt="${product.title}" class="w-100">
                        </div>
                        <div class="p-content">
                            <h5><a href="#">${product.title}</a></h5>
                            <p>Giá:${fn_FormatMoney(product.priceNew,0,',','.')}<sup>đ</sup></p>
                        </div>
                    </div>
                </div>
                  `;

    list=list+item;
    });
    $('#product-list').html(list);

  };
});
