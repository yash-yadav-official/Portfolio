fetch('./assets/profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('user-name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('email').href = `mailto:${data.email}`;
        document.getElementById('email').textContent = data.email;
        document.getElementById('linkedin').href = data.linkedin;
        document.getElementById('linkedin').textContent = data.linkedin;
        document.getElementById('location').textContent = data.location;
        document.getElementById('about').textContent = data.about;

        // Loop through experience array
        data.experience.forEach((exp, index) => {
            document.getElementById(`expT${index + 1}`).textContent = exp.type;
            document.getElementById(`expDes${index + 1}`).textContent = exp.description;
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
