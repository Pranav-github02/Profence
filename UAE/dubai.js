$(document).ready(function () {
    ///---------Weather---------\\\
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var celcius = Math.round(parseFloat(responseJSON.main.temp) - 273.15);
        $("#weather").html(celcius + '&deg;');
    };
    var file = "https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=77124a4161e43e7d35ef7231d60eec3b";
    xhrRequest.open("get", file, true);
    xhrRequest.send();

    $("#guests").click(function () {
        $("#guests1").toggle();
    });
    $("#room_minus").click(function () {
        var a = $(".room").html();
        var b = parseInt(a);
        if (b > 0) {
            b -= 1;
        }
        else {
            return false
        }
        $(".room").html(b);
    });
    $("#room_plus").click(function () {
        var a = $(".room").html();
        var b = parseInt(a);
        if (b < 10) {
            b += 1;
        }
        else {
            alert("For making a booking of more than 10 rooms, kindly contact us")
            var url = "contact-dubai.html";
            $(location).attr('href', url);
            return false
        }
        $(".room").html(b);
    });
    $("#adult_minus").click(function () {
        var a = $(".adult").html();
        var b = parseInt(a);
        if (b > 0) {
            b -= 1;
        }
        else {
            return false
        }
        $(".adult").html(b);
    });
    $("#adult_plus").click(function () {
        var a = $(".adult").html();
        var b = parseInt(a);
        if (b < 10) {
            b += 1;
        }
        else {
            return false
        }
        $(".adult").html(b);
    });
    $("#child_minus").click(function () {
        var a = $(".child").html();
        var b = parseInt(a);
        if (b > 0) {
            b -= 1;
        }
        else {
            return false
        }
        $(".child").html(b);
    });
    $("#child_plus").click(function () {
        var a = $(".child").html();
        var b = parseInt(a);
        if (b < 10) {
            b += 1;
        }
        else {
            return false
        }
        $(".child").html(b);
    });
    $("#guests").click(function () {
        var a = $(".room").html();
        var b = $(".adult").html();
        var c = $(".child").html();
        var d, e, f;
        if (a > 0 || b > 0 || c > 0) {
            if (a > 0) {
                d = a + " Rooms ";
            }
            else {
                alert("Rooms can't be zero");
            }
            if (b > 0) {
                e = b + " Adults ";
            }
            else {
                e = "";
            }
            if (c > 0) {
                f = c + " Children ";
            }
            else {
                f = "";
            }
            $("#guests").val(d + e + f);
        }
        else {
            $("#guests").val();
        }
    });
    $("#single").click(function () {
        $("#room_type").val("single room");
    });
    $("#double").click(function () {
        $("#room_type").val("double room");
    })
    $("#deluxe").click(function () {
        $("#room_type").val("deluxe room");
    })
    $("#suite").click(function () {
        $("#room_type").val("sea-view suite");
    })
    $("#calc").click(function () {
        var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
        if ($("#default").is(":selected")) {
            alert("Please select room type");
        }
        else if ($("#single_room").is(":selected")) {
            a = 50;
        }
        else if ($("#double_room").is(":selected")) {
            a = 135;
        }
        else if ($("#deluxe_room").is(":selected")) {
            a = 240;
        }
        else if ($("#sea_view_suite").is(":selected")) {
            a = 350;
        }
        if ($("#laundry").is(':checked')) {
            b = 25;
        }
        if ($("#breakfast").is(':checked')) {
            c = 20;
        }
        if ($("#bike").is(':checked')) {
            d = 30;
        }
        if (a > 0) {
            e = b + c + d + 45;
            f = a + e;
            $("#price").html("Room charges : " + a + "AED/night" + "<br>" + "Services : " + e + "AED" + "<br>" + "Grand Total : " + f + "AED/room");
        }
    });
    $("#avail1").click(function () {
        if ($("#guests").val().length > 0) {
            $(".confirmation").show();
        }
        else if ($("#default").is(":selected")) {
            alert("Please select room type");
        }
        else {
            alert("Guests can't be empty");
        }
    })
});