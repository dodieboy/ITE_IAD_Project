$(document).ready(function() {
    showTable();
});

function showTable() {
    $.ajax({
        type: "POST",
        url: 'admin.php',
        success: function(data) {
            $('#table').html(data);
        },
        error: function() {
            alert("error");
        }
    });
}