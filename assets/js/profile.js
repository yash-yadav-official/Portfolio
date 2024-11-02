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
        data.generalSkill.forEach((gs, index) => {
            document.getElementById(`expT${index + 1}`).textContent = gs.type;
            document.getElementById(`expDes${index + 1}`).textContent = gs.description;
        });

        data.experience.forEach((exp, index) => {
            document.getElementById(`expCompany${index + 1}`).textContent = exp.company;
            document.getElementById(`expPosition${index + 1}`).textContent = exp.position;
            document.getElementById(`expDuration${index + 1}`).textContent = exp.duration;

            exp.responsibilities.forEach((responsibility, respIndex) => {
                const element = document.getElementById(`expResponsibility${index + 1}-${respIndex + 1}`);
                if (element) {
                    element.textContent = responsibility;
                } else {
                    console.warn(`Element with ID expResponsibility${index + 1}-${respIndex + 1} not found.`);
                }
            });

        });

        data.education.forEach((dt, index) => {
            document.getElementById(`schPlace${index + 1}`).textContent = dt.place;
            document.getElementById(`schCourse${index + 1}`).textContent = dt.course;
            document.getElementById(`schDuration${index + 1}`).textContent = dt.duration;
            document.getElementById(`schDescription${index + 1}`).textContent = dt.description;

        });

    })
    .catch(error => console.error('Error fetching the JSON file:', error));
