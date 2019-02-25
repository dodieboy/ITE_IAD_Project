$(document).ready(function() {
    price();
});

function price() {
    $.ajax({
        type: "POST",
        url: 'store.php',
        dataType: 'json',
        success: function(data) {
            $('#itemName1').html(data[0]);
            $('#itemName2').html(data[2]);
            $('#itemName3').html(data[4]);

            $('#itemPrice1').html('$' + data[1] + ' &#127851;');
            $('#itemPrice2').html('$' + data[3] + ' &#127851;');
            $('#itemPrice3').html('$' + data[5] + ' &#127851;');

            $('#itemPrice1').val('$' + data[1]);
            $('#itemPrice2').val('$' + data[3]);
            $('#itemPrice3').val('$' + data[5]);
        },
        error: function() {
            alert("error");
        }
    })
}

function addCart(pId, pName, pPrice, buttons) {
    $.ajax({
        type: "POST",
        url: 'addCart.php',
        data: {
            type: "add",
            id: pId,
            name: pName,
            price: pPrice.replace(/[$]/g, ''),
            quantity: "1"
        },
        success: function(data) {
            if (data == "Item Added") {
                var temp = $(buttons).val() + ' &#127851;';
                cart_check();
                $(buttons).html("Added to cart" + ' &#128076;');
                window.setTimeout(function() {
                    $(buttons).html(temp);
                }, 1500);
            } else {
                alert(data);
            }
        }
    })

}