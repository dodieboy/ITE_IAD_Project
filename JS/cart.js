$(document).ready(function() {
    showTable();
    $('#btnRefresh').click(function(event) {
        showTable()
    })
    $('#btnClear').click(function(event) {
        clearCart()
    })
});

function showTable() {
    $.ajax({
        type: "POST",
        url: 'cart.php',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            cart_check();
            if (data == "empty") {
                $('#table').html("<p>Cart is empty</p>");
            } else {
                var tables = "<table align=center id='cartTable'><tr><th>Name</th><th>Quantity</th><th>Price</th><th>Total</th><th>Action</th></tr>";
                var x = 0;
                for (var i = 0; i < (data.length / 4); i++) {
                    tables += "<tr class='uData' title='Click to edit'><td class='pName'>" + data[x + 1] + "</td><td><input onKeyUp='updateTable(" + (x + 4) / 4 + ")' type='text' class='pQuantity' value= '" + data[x + 3] + "'></td><td class='pPrice'>$" + data[x + 2] + "</td><td class='total'>$" + (data[x + 3] * data[x + 2]).toFixed(2) + "</td><td><a href='javascript:void(0)' onClick='removeProduce(" + (x + 4) / 4 + ")'>Remove</a></td><td style='display:none' class='pId'>" + data[x] + "</td></tr>"
                    x += 4
                }
                tables += "<tr><td></td><td></td><td>Total:</td><td id='sumTotal'></td></tr><tr><td></td><td></td><td></td><td></td><td><button type='button' onClick='checkOut()' title='Check out now'>Check Out</button></td></tr></table>"
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
    $("#sumTotal").html('$' + y);
}

function updateTable(row) {
    var quantity = $('#cartTable').find('tr:eq(' + row + ')').find('input').val();
    var price = $('#cartTable').find('tr:eq(' + row + ')').children('td.pPrice').text().replace(/[$]/g, '');
    var total = (quantity * price).toFixed(2);
    sumTotal()
    $('#cartTable').find('tr:eq(' + row + ')').children('td.total').text("$" + total);
    updateTable2();
}

function updateTable2() {
    for (var i = 1; i < $('#cartTable tr').length; i++) {
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
                success: function(data) {
                    showTable();
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
}

function checkOut() {
    window.location = 'payment.html';
}