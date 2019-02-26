$(document).ready(function() {
    showTable();
    $('#btnRefresh').click(function(event) {
        showTable();
    })
    $('#btnClear').click(function(event) {
        clearCart();
    })
    $('#btnBack').click(function(event) {
        window.location = 'cart.html';
    })
    $('#checkOutFrom').on("submit", function(e) {
        e.preventDefault();
        orderProduce();
    })
});

function showTable() {
    $.ajax({
        type: "POST",
        url: 'cart.php',
        dataType: 'json',
        success: function(data) {
            cart_check();
            if (data == "empty") {
                $('#table').html("<p>Cart is empty</p>");
            } else {
                var tables = "<table align=center id='cartTable'><tr><th id='tName'>Product Name</th><th id='tQuantity'>Quantity</th><th id='tPrice'>Price</th><th id='tTotal'>Total</th><th id='tDelete'>Delete</th></tr>";
                var x = 0;
                for (var i = 0; i < (data.length / 4); i++) {
                    tables += "<tr class='uData' title='Click to edit'><td class='pName'>" + data[x + 1] + "</td><td><input onKeyUp='updateTable(" + (x + 4) / 4 + ")' type='text' class='pQuantity' value='" + data[x + 3] + "'></td><td class='pPrice'>$" + data[x + 2] + "</td><td class='total'>$" + (data[x + 3] * data[x + 2]).toFixed(2) + "</td><td><button type='button' onClick='removeProduce(" + (x + 4) / 4 + ")'><i class='fas fa-trash'></i></button></td><td style='display:none' class='pId'>" + data[x] + "</td></tr>"
                    x += 4
                }
                tables += "<tr class='tableTotal'><td></td><td></td><td>Total:</td><td id='sumTotal'></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td><button type='button' onClick='checkOut()' title='Check out now'>Check Out</button></td></tr></table>"
                tables += "<script src='JS/cleave.min.js'></script><script>var cleave = new Cleave('.pQuantity', {numeral: true,numeralThousandsGroupStyle: 'thousand'});</script>"
                $('#table').html(tables);
                sumTotal()
            }
        },
        error: function() {
            alert("error");
        }
    })
}

function sumTotal() {
    var y = 0;
    for (var i = 1; i < $('#cartTable tr').length; i++) {
        var total = $('#cartTable').find('tr:eq(' + i + ')').find('td.total').text().replace(/[$]/g, '')
        y = (y + total * 1);
    }
    $("#sumTotal").html('$' + y.toFixed(2));
}

var timeout = null;

function updateTable(row) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        var quantity = $('#cartTable').find('tr:eq(' + row + ')').find('input').val();
        var price = $('#cartTable').find('tr:eq(' + row + ')').children('td.pPrice').text().replace(/[$]/g, '');
        var total = (quantity * price).toFixed(2);
        sumTotal()
        $('#cartTable').find('tr:eq(' + row + ')').children('td.total').text("$" + total);
        updateTable2();
    }, 400);
};

function updateTable2() {
    for (var i = 1; i < $('#cartTable tr').length; i++) {
        if ($('#cartTable tr').length == 2) {
            clearCart();
            return;
        }
        var pId = $('#cartTable').find('tr:eq(' + i + ')').find('td.pId').text();
        var pName = $('#cartTable').find('tr:eq(' + i + ')').find('td.pName').text();
        var pQuantity = $('#cartTable').find('tr:eq(' + i + ')').find('input').val();
        var pPrice = $('#cartTable').find('tr:eq(' + i + ')').children('td.pPrice').text().replace(/[$]/g, '');
        if (pName == "") {} else {
            $.ajax({
                type: "POST",
                url: 'addCart.php',
                data: {
                    type: "update" + i,
                    id: pId,
                    name: pName,
                    price: pPrice.replace(/[$]/g, ''),
                    quantity: pQuantity
                },
                error: function() {
                    alert("error");
                }
            })
        }
    }
}

function clearCart() {
    $.ajax({
        type: "POST",
        url: 'addCart.php',
        data: {
            type: "clear"
        },
        success: function(data) {
            showTable();
        },
        error: function() {
            alert("error");
        }
    })
}

function removeProduce(row) {
    $('#cartTable').find('tr:eq(' + row + ')').remove();
    updateTable2();
    showTable();
}

function checkOut() {
    for (var i = 1; i < $('#cartTable tr').length; i++) {
        console.log(i);
        var pId = $('#cartTable').find('tr:eq(' + i + ')').find('td.pId').text();
        var pName = $('#cartTable').find('tr:eq(' + i + ')').find('td.pName').text();
        var pQuantity = $('#cartTable').find('tr:eq(' + i + ')').find('input').val();
        var pPrice = $('#cartTable').find('tr:eq(' + i + ')').children('td.pPrice').text().replace(/[$]/g, '');
        var totals = $('#sumTotal').text();
        if (pName != "") {
            $.ajax({
                type: "POST",
                url: 'addCart.php',
                data: {
                    type: "update" + i,
                    total: totals,
                    id: pId,
                    name: pName,
                    price: pPrice.replace(/[$]/g, ''),
                    quantity: pQuantity
                },
                success: function(data) {
                    clearCart();
                    window.location = 'payment.html';
                },
                error: function() {
                    alert("error");
                }
            })
        }
    }
}

function orderProduce() {
    if ($("#cardOutput").text() != "Card type: Not vaild") {
        $.ajax({
            type: "POST",
            url: 'order.php',
            data: $('#checkOutFrom').serialize(),
            success: function() {
                window.location = 'OrderComplete.html';
            },
            error: function() {
                alert("error");
            }
        })
    } else {
        $("#card").focus();
        $("#cardOutput").html("Card type: Not vaild").css({
            'color': 'red',
            'font-weight': 'bold'
        });
    }
}