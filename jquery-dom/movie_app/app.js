$("#submitBtn").on("click", function (e) {
    e.preventDefault();
    if ($("#rating").val() > 10 || $("#rating").val() < 1) {
        alert("Your rating must be between 1 and 10.");
    }
    else if ($("#movie").val().length < 2) {
        alert("Please enter a valid movie title.");
    }
    else {
        let $rating = $("#rating").val();
        let $movie = $("#movie").val();
        $("ol").append('<li>Movie: ' + $movie + ' Rating: ' + $rating + '</li><button class="deleteBtn">Delete</button>');
        $("#rating").val('');
        $("#movie").val('');
    }
})

$("ol").on("click", ".deleteBtn", function (e) {
    $(e.target).prev().remove();
    $(e.target).remove();
})

$("#orderButton").on("click", function() {
    let movieRatings = $('li').map(function () {
        let title = $(this).text();
        console.log(title);
        let rating = $(this).data('rating');
        return {
            [title]: rating
        };
    }).get();
    console.log(movieRatings);
    });

    