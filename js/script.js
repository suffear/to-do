$(document).ready(function () {
    // Add item to the list
    function newItem() {
        var item = $('#input').val();
        if (item.trim() === '') {
            // Input is empty, display a message or alert
            alert('Please do not leave this Field empty.');
        } else {
            $('<li></li>')
                .text(item)
                .append('<button class="delete">X</button>')
                .appendTo('ol');
            $('#input').val('');
        }
    }
    // Delete item from the list
    $(document).on('click', '.delete', function () {
        $(this).parent().remove();
    });
    // Mark item as completed
    $(document).on('dblclick', 'li', function () {
        $(this).toggleClass('strike');
    });
    // Make the list sortable
    $('#list').sortable();
    $('#list').disableSelection();
    // Handle "Add" button click
    $('#button').click(function () {
        newItem();
    });
    // Handle Enter key press in the input field
    $('#input').keypress(function (e) {
        if (e.which === 13) {
            newItem();
            return false;
        }
    });
});
