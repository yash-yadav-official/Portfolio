fetch('./assets/tech.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Select the container where the <li> elements will be appended
        const container = document.getElementById('techSkills');

        data.forEach(item => {
            // Create a <li> element with the class "clients-item"
            const listItem = document.createElement('li');
            listItem.classList.add('clients-item');

            // Create the <a> element
            const anchor = document.createElement('a');
            anchor.href = item.href;
            anchor.target = '_blank';

            // Create the <img> element
            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.altText;

            // Create the <span> element
            const span = document.createElement('span');
            span.classList.add('client-title');
            span.textContent = item.title;

            // Append <img> and <span> to <a>
            anchor.appendChild(img);
            anchor.appendChild(span);

            // Append <a> to <li>
            listItem.appendChild(anchor);

            // Append <li> to the container
            container.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching the JSON file:', error));
