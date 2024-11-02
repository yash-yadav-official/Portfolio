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

        // Get the timeline list container
        const timelineList = document.getElementById('timeline-list-experience-data');

        // Populate the timeline from JSON data
        data.experience.forEach(exp => {
            const expItem = document.createElement('li');
            expItem.classList.add('timeline-item');

            // Create the header and add basic info
            expItem.innerHTML = `
                <div class="timeline-header">
                    <div class="company-info">
                    <h4 class="h4 timeline-item-title">${exp.company}</h4>
                    <img src="${exp.logo}" alt="${exp.company} Logo" class="company-icon" onclick="window.open('${exp.link}', '_blank')">
                    </div>
                    <span class="timeline-date">${exp.duration}</span>
                </div>
                <span style="font-weight: bold;">${exp.position}</span>
                `;

            // Add responsibilities
            exp.responsibilities.forEach(responsibility => {
                const pElement = document.createElement('p');
                pElement.classList.add('timeline-text');
                pElement.textContent = responsibility;
                expItem.appendChild(pElement);
            });

            // Append the experience item to the timeline list
            timelineList.appendChild(expItem);
        });

        data.education.forEach((dt, index) => {
            document.getElementById(`schPlace${index + 1}`).textContent = dt.place;
            document.getElementById(`schCourse${index + 1}`).textContent = dt.course;
            document.getElementById(`schDuration${index + 1}`).textContent = dt.duration;
            document.getElementById(`schDescription${index + 1}`).textContent = dt.description;

        });

    })
    .catch(error => console.error('Error fetching the JSON file:', error));
