document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResults = document.querySelector(".search-results");
    const showMoreButton = document.getElementById("show-more-button");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== "") {
            searchImages(searchTerm);
        }
    });

    function searchImages(searchTerm) {
        // Replace 'YOUR_API_KEY' and 'YOUR_ENDPOINT' with your actual API key and endpoint
        const apiKey = 'https://pixabay.com/api/41290486-49548f4f0e49d38ac4e6b5e61';
        const endpoint = 'YOUR_ENDPOINT';
        const apiUrl = `${endpoint}?query=${searchTerm}&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayImages(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayImages(results) {
        searchResults.innerHTML = '';

        results.forEach(result => {
            const searchResult = document.createElement("div");
            searchResult.className = "search-result";

            const image = document.createElement("img");
            image.src = result.image_url; // adjust the property based on the API response
            image.alt = "img-responsive";
            image.className = "search-image";

            const link = document.createElement("a");
            link.href = result.link; // adjust the property based on the API response
            link.textContent = result.title; // adjust the property based on the API response

            searchResult.appendChild(image);
            searchResult.appendChild(link);

            searchResults.appendChild(searchResult);
        });

        showMoreButton.style.display = "none";
    }

    // You can add additional functionality, such as loading more results, based on your API's capabilities.
});
