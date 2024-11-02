fetch('./assets/general-skill.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Get the services list container
        const servicesList = document.getElementById('services-list');

        // Loop through each skill in generalSkill
        data.generalSkill.forEach(skill => {
            // Create a new list item for each skill
            const serviceItem = document.createElement('li');
            serviceItem.className = 'service-item';

            // Create the icon box
            const serviceIconBox = document.createElement('div');
            serviceIconBox.className = 'service-icon-box';
            const img = document.createElement('img');
            img.src = skill.icon;
            img.alt = skill.alt;
            img.width = 40; // Set width
            serviceIconBox.appendChild(img); // Append image to icon box

            // Create the content box
            const serviceContentBox = document.createElement('div');
            serviceContentBox.className = 'service-content-box';
            const title = document.createElement('h4');
            title.className = 'h4 service-item-title';
            title.textContent = skill.type; // Set title text

            const description = document.createElement('p');
            description.className = 'service-item-text';
            description.textContent = skill.description; // Set description text

            // Append title and description to content box
            serviceContentBox.appendChild(title);
            serviceContentBox.appendChild(description);
            // Append icon box and content box to service item
            serviceItem.appendChild(serviceIconBox);
            serviceItem.appendChild(serviceContentBox);
            // Append service item to services list
            servicesList.appendChild(serviceItem);
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
