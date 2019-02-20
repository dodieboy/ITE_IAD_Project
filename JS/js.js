$(document).ready(function() {
    $(".cart").on('click', function() {
        $(".popup").fadeIn('slow');
    });
    $("#addCart").click(function(event) {
        productAdd();
    });
    $('#btnSummary').click(function(event) {
        showSummary();
    });
    $(".summary").hide();
    $("#login").on("submit", function(e) {
        e.preventDefault();
        var tempPass = $.md5($('#password').val());
        $.ajax({
            type: "POST",
            url: 'login.php',
            data: $(this).serialize() + "&md5Password=" + tempPass,
            success: function(data) {
                $('#result').html(data);
                $('#result').show();
                if (data.indexOf('Success') >= 0) {
                    roleCheck();
                } else {
                    $('#password').val("");
                }
            }
        });
    });
    $("#register").on("submit", function(e) {
        e.preventDefault();
        var tempPass = $.md5($('#password').val());
        $.ajax({
            type: "POST",
            url: 'register.php',
            data: $(this).serialize() + "&md5Password=" + tempPass,
            success: function(data) {
                alert(data);
                if (data.indexOf('Successfully') >= 0) {
                    window.location = 'index.html';
                } else {
                    $('#password').val("");
                }
            }
        });
    });
});

function roleCheck() {
    $.ajax({
        type: "POST",
        url: 'loginCheck.php',
        dataType: 'json',
        success: function(data) {
            if (data[1] == "A") {
                window.location = 'admin.html';
            } else {
                window.location = 'store.html';
            }
        }
    });
}

function productAdd() {
    if (Math.floor($("#quantitys").val()) == $("#quantitys").val() && $.isNumeric($("#quantitys").val()) && $("#quantitys").val() > 0) {
        $('#quantityLabel').text("Quantity:");
        $('#quantityLabel').css({ "color": "black", "font-weight": "normal" })
        if ($("#orderTable tbody").length == 0) {
            $("#orderTable").append("<tbody></tbody>");
        }
        $("#orderTable tbody").append("<tr>" + "<th>" + genID() + "</th>" + "<th id='dataProduct'>" + $("#products").val() + "</th>" + "<th id='dataQuantity'>" + $("#quantitys").val() + "</th>" + "<td>" + "<input type='button' style='margin-right: 5px;' onClick='productEdit(this);' value='Edit' id='btnEdit'/>" + "<button onClick='productDelete(this);'>Delete</button>" + "</td>" + "</tr>");
    } else {
        $('#quantityLabel').text("Quantity: (Please fill in a number!!!)");
        $('#quantityLabel').css({ "color": "red", "font-weight": "bold" });
        $('#quantitys').focus();
    }
}

function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}

var updateID;

function productEdit(ctl) {
    _row = $(ctl).parents("tr");
    var cols = _row.children("th");
    updateID = $(cols[0]).text();
    var selectedProduct = $(cols[1]).text();
    var selectedQuantity = $(cols[2]).text();
    $(_row).after("<tr>" + "<th>" + updateID + "</th>" + "<th id='dataProduct'>" + "<select name='product' id='tableProducts'> <option value='Hersheys Milk Chocolate'>Hershey's Milk Chocolate</option> <option value='Hersheys Skor Candy Bar'>Hershey's Skor Candy Bar</option> <option value='Krackel Chocolate Bar'>Krackel Chocolate Bar</option> </select>" + "</th>" + "<th id='dataQuantity'>" + "<input type='number' id='tableQuantity' value= '" + selectedQuantity + "' min='1'>" + "</th>" + "<td>" + "<input type='button' style='margin-right: 5px;' onClick='productSave(this);' value='Save' id='btnEdit'/>" + "<button onClick='productDelete(this);'>Delete</button>" + "</td>" + "</tr>");
    $(_row).remove();
}

function productSave(ctl) {
    _row = $(ctl).parents("tr");
    var cols = _row.children("th");
    $(_row).after("<tr>" + "<th>" + updateID + "</th>" + "<th>" + $("#tableProducts").val() + "</th>" + "<th>" + $("#tableQuantity").val() + "</th>" + "<td>" + "<input type='button' style='margin-right: 5px;' onClick='productEdit(this);' value='Edit' id='btnEdit'/>" + "<button onClick='productDelete(this);'>Delete</button>" + "</td>" + "</tr>");
    $(_row).remove();
}

id = 1;

function genID() {
    newID = id++;
    return newID;
}

function showSummary(event) {
    $(".btnSummary").fadeOut();
    var summary = [];
    if ($('#last-name').val() == "" && $('#first-name').val() == "") {
        summary[0] = "Invaild"
    } else {
        summary[0] = $('.title:checked').val() + " " + $('#last-name').val() + " " + $('#first-name').val();
    }
    if ($('#email').val() == "") {
        summary[1] = "Invaild"
    } else {
        summary[1] = $('#email').val();
    }
    if ($('#phone').val() == "") {
        summary[2] = "Invaild"
    } else {
        summary[2] = $('#phone').val();
    }
    if ($('#address').val() == "") {
        summary[3] = "Invaild"
    } else {
        summary[3] = $('#address').val();
    }
    if ($('#organisation').val() == "") {
        summary[4] = "None"
    } else {
        summary[4] = $('#organisation').val();
    }
    if ($("#summaryTable tbody").length == 0) {
        $("#summaryTable").append("<tbody></tbody>");
    }
    if (document.getElementById("summaryTable").rows.length == 1) {
        $("#summaryTable tbody").append("<tr>" + "<th tableHeadData='Full Name'>" + summary[0] + "</th>" + "<th tableHeadData='Email' id='email'>" + summary[1] + "</th>" + "<th tableHeadData='Phone Number'>" + summary[2] + "</th>" + "<th tableHeadData='Address'>" + summary[3] + "</th>" + "<th tableHeadData='Organisation'>" + summary[4] + "</th>" + "</tr>" + "<tr class='btnAction'>" + "<th>" + "<button type='button' onClick='showSummary();'><i class='fas fa-sync-alt'></i></button>" + " " + "<button type='button' onClick='hideSummary();'>Hide</button>" + "</th>" + "</tr>");
    } else {
        $("#summaryTable tr:eq(" + 1 + ")").after("<tr>" + "<th tableHeadData='Full Name'>" + summary[0] + "</th>" + "<th tableHeadData='Email' id='email'>" + summary[1] + "</th>" + "<th tableHeadData='Phone Number'>" + summary[2] + "</th>" + "<th tableHeadData='Address'>" + summary[3] + "</th>" + "<th tableHeadData='Organisation'>" + summary[4] + "</th>" + "</tr>");
        $("#summaryTable tr:eq(" + 1 + ")").remove();
    }
    $(".summary").slideDown("slow");
}

function hideSummary(event) {
    $(".summary").slideUp("slow");
    $(".btnSummary").fadeIn();
}