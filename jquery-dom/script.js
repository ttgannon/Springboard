console.log("Let's party with jQuery!");

$("article img").addClass("image-setter");

$("p").eq(5).remove();

$("#title").css("font-size", Math.random() * 100);

$("ol").append("<li>this is me trying</li>");

$("aside").empty().append("<p>I am sorry about that list.</p>")

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + ',' + blue + ')');
});

$("img").on("click", function (e) {
    $(e.target).remove();
});