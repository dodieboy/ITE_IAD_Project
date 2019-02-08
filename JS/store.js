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
        },
        error: function() {
            alert("error");
        }
    });
}