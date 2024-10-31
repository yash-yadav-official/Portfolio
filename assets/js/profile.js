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
        document.getElementById('expT1').textContent = data.expT1;
        document.getElementById('expDes1').textContent = data.expDes1;
        document.getElementById('expT2').textContent = data.expT2;
        document.getElementById('expDes2').textContent = data.expDes2;
        document.getElementById('expT3').textContent = data.expT3;
        document.getElementById('expDes3').textContent = data.expDes3;
        document.getElementById('expT4').textContent = data.expT4;
        document.getElementById('expDes4').textContent = data.expDes4;
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
