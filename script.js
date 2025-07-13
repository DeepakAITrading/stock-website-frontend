document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('company-dropdown');
    
    // !!! PASTE YOUR RENDER BACKEND URL HERE !!!
    const apiUrl = 'https://my-stock-api.onrender.com/api/companies';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            dropdown.innerHTML = '<option value="">Select a Company</option>'; // Clear the "Loading..." message
            data.forEach(company => {
                const option = document.createElement('option');
                option.value = company.symbol;
                option.textContent = company.name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching company list:', error);
            dropdown.innerHTML = '<option value="">Failed to load companies</option>';
        });
});
