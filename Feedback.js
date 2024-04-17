function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var sub1 = document.getElementById('sub1').checked;
    var sub2 = document.getElementById('sub2').checked;
    var mod1sub1 = document.getElementById('mod1sub1').checked;
    var mod2sub1 = document.getElementById('mod2sub1').checked;
    var mod1sub2 = document.getElementById('mod1sub2').checked;
    var mod2sub2 = document.getElementById('mod2sub2').checked;
    var experience = document.querySelector('input[name="experience"]:checked');

    if (fname.length > 15) {
        alert('First name should not be more than 15 letters.');
        return false;
    }

    if (lname.length > 15) {
        alert('Last name should not be more than 15 letters.');
        return false;
    }

    if (email.length > 25) {
        alert('Email should not be more than 25 characters.');
        return false;
    }

    if (!gender) {
        alert('Gender should not be blank.');
        return false;
    }

    if (!sub1 && !sub2) {
        alert('At least one subject should be selected.');
        return false;
    }

    if (sub1 && !(mod1sub1 || mod2sub1)) {
        alert('At least one module should be selected for Subject 1.');
        return false;
    }

    if (sub2 && !(mod1sub2 || mod2sub2)) {
        alert('At least one module should be selected for Subject 2.');
        return false;
    }

    if (!experience) {
        alert('Please fill your experience.');
        return false;
    }

    const formData = {
        firstName: fname,
        lastName: lname,
        email: email,
        gender: gender.value,
        subjectsLearned: {
            subject1: sub1,
            subject2: sub2
        },
        modulesLearned: {
            subject1: {
                module1: mod1sub1,
                module2: mod2sub1
            },
            subject2: {
                module1: mod1sub2,
                module2: mod2sub2
            }
        },
        experience: experience.value,
        comments: document.getElementById('comments').value
    };

    // Create a new window
    const newWindow = window.open('', '_blank');

    // Generate the HTML content for the new window
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Feedback Data</title>
        </head>
        <body>
            <h1>Feedback Data</h1>
            <pre>${JSON.stringify(formData, null, 2)}</pre>
        </body>
        </html>
    `;

    // Write the HTML content to the new window
    newWindow.document.write(htmlContent);

    // Prevent the form from submitting and navigating to index.html
    // event.preventDefault();

    // Indicate successful form submission
    alert('Form submitted successfully!');
}