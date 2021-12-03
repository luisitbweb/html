$(function () {
    $('#user-table').on("click", ".delete", function () {
        var response = confirm("Are you sure you want to delete this user?");
        if (response) {
            $(this).parent().parent().fadeOut().remove();
        }
    });
});