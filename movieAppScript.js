$(document).ready(function() {
    $('#rating-form').on('submit', function(event) {
        event.preventDefault();
        
        // Capture input values
        const title = $('#title').val();
        const rating = $('#rating').val();
        
        // Create a new div with the title, rating, and a remove button
        const newItem = $(`
            <div>
                <span>Title: ${title}, Rating: ${rating}</span>
                <button class="remove-btn">Remove</button>
            </div>
        `);
        
        // Append new item to the output div
        $('#output').append(newItem);
        
        // Clear form inputs
        $('#title').val('');
        $('#rating').val('');
    });

    // Delegate event listener for dynamic content
    $('#output').on('click', '.remove-btn', function() {
        $(this).parent().remove();
    });
});