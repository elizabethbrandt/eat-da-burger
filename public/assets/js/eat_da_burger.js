// Click event on the `DEVOUR IT!` button
$(() => {
    $(".change-status").on("click", (event) => {

        const id = $(this).data("id");
        const changeDevoured = $(this).data("change");
        const newDevouredState = {
            devoured: changeDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        })
        .then(() => {
                console.log("Changed status to devoured!");
                location.reload();
            }
        )

    })
})

// Click even on the `Submit` button