document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');

    var alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    var changeTextButton = document.getElementById('changeTextButton');
    changeTextButton.addEventListener('click', function() {
        var myParagraph = document.getElementById('myParagraph');
        myParagraph.textContent = 'The text has been changed!';
    });

    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        if (name === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });
});
