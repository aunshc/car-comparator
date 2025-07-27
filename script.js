// Car data with specifications
const carsData = [
    {
        id: 1,
        name: "Tesla Model 3",
        category: "electric",
        price: 41990,
        range: 358,
        acceleration: 5.6,
        topSpeed: 162,
        power: 283,
        efficiency: 4.1,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "BMW 3 Series",
        category: "sedan",
        price: 44900,
        range: 450,
        acceleration: 5.8,
        topSpeed: 155,
        power: 255,
        efficiency: 6.8,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Mercedes C-Class",
        category: "sedan",
        price: 47100,
        range: 440,
        acceleration: 6.0,
        topSpeed: 155,
        power: 255,
        efficiency: 7.2,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Audi A4",
        category: "sedan",
        price: 40100,
        range: 460,
        acceleration: 6.3,
        topSpeed: 155,
        power: 201,
        efficiency: 6.5,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Porsche 911",
        category: "sports",
        price: 106100,
        range: 380,
        acceleration: 3.2,
        topSpeed: 191,
        power: 379,
        efficiency: 10.5,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Ferrari F8",
        category: "sports",
        price: 276550,
        range: 340,
        acceleration: 2.9,
        topSpeed: 211,
        power: 710,
        efficiency: 15.2,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "BMW X5",
        category: "suv",
        price: 65000,
        range: 470,
        acceleration: 6.1,
        topSpeed: 155,
        power: 335,
        efficiency: 8.9,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Mercedes GLE",
        category: "suv",
        price: 58000,
        range: 450,
        acceleration: 6.4,
        topSpeed: 155,
        power: 255,
        efficiency: 8.5,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Tesla Model Y",
        category: "electric",
        price: 49990,
        range: 330,
        acceleration: 5.0,
        topSpeed: 155,
        power: 384,
        efficiency: 4.4,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Nissan Leaf",
        category: "electric",
        price: 28140,
        range: 226,
        acceleration: 7.9,
        topSpeed: 144,
        power: 147,
        efficiency: 3.8,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Range Rover Sport",
        category: "suv",
        price: 85000,
        range: 400,
        acceleration: 6.8,
        topSpeed: 155,
        power: 355,
        efficiency: 11.2,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "Lamborghini Huracán",
        category: "sports",
        price: 208571,
        range: 320,
        acceleration: 2.8,
        topSpeed: 202,
        power: 631,
        efficiency: 16.8,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop"
    }
];

// Global variables
let selectedCars = { car1: null, car2: null };
let currentFilter = 'all';
let currentSearch = '';
let customCars = []; // Array to store custom cars
let nextCustomId = 1000; // Starting ID for custom cars

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateCarsGrid();
});

// Modal functions
function addCar(carNumber) {
    document.getElementById('carModal').style.display = 'block';
    document.getElementById('carModal').setAttribute('data-car-number', carNumber);
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
    document.getElementById('carSearch').value = '';
    currentSearch = '';
    hideSearchResults();
    filterCars();
}

// Custom car modal functions
function showCustomCarModal() {
    document.getElementById('customCarModal').style.display = 'block';
    // Close the car selection modal if it's open
    document.getElementById('carModal').style.display = 'none';
}

function closeCustomCarModal() {
    document.getElementById('customCarModal').style.display = 'none';
    // Reset form
    document.getElementById('customCarForm').reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const carModal = document.getElementById('carModal');
    const customCarModal = document.getElementById('customCarModal');
    
    if (event.target === carModal) {
        closeModal();
    }
    if (event.target === customCarModal) {
        closeCustomCarModal();
    }
}

// Filter cars by category
function filterByCategory(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    filterCars();
}

// Filter cars by search and category
function filterCars() {
    currentSearch = document.getElementById('carSearch').value.toLowerCase();
    
    // Check if search term exists in any car name
    const allCars = [...carsData, ...customCars];
    const searchMatches = allCars.filter(car => 
        car.name.toLowerCase().includes(currentSearch)
    );
    
    const filteredCars = allCars.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(currentSearch);
        const matchesCategory = currentFilter === 'all' || car.category === currentFilter;
        return matchesSearch && matchesCategory;
    });
    
    // Show search results notification if no matches found
    if (currentSearch && searchMatches.length === 0) {
        showSearchResults(currentSearch);
    } else {
        hideSearchResults();
    }
    
    populateCarsGrid(filteredCars);
}

// Show search results notification
function showSearchResults(searchTerm) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `
        <h4><i class="fas fa-search"></i> No cars found for "${searchTerm}"</h4>
        <p>Would you like to add this car to our database? You can input the details and compare it with other cars.</p>
        <button class="add-custom-car-btn" onclick="showCustomCarModal()">
            <i class="fas fa-plus-circle"></i> Add "${searchTerm}" as Custom Car
        </button>
    `;
    searchResults.classList.add('show');
}

// Hide search results notification
function hideSearchResults() {
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('show');
}

// Add custom car
function addCustomCar(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('customCarName').value.trim();
    const category = document.getElementById('customCarCategory').value;
    const price = parseInt(document.getElementById('customCarPrice').value);
    const range = parseInt(document.getElementById('customCarRange').value);
    const acceleration = parseFloat(document.getElementById('customCarAcceleration').value);
    const topSpeed = parseInt(document.getElementById('customCarTopSpeed').value);
    const power = parseInt(document.getElementById('customCarPower').value);
    const efficiency = parseFloat(document.getElementById('customCarEfficiency').value);
    const image = document.getElementById('customCarImage').value.trim();
    
    // Validate required fields
    if (!name || !category || !price || !range || !acceleration || !topSpeed || !power || !efficiency) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    const customCar = {
        id: nextCustomId++,
        name: name,
        category: category,
        price: price,
        range: range,
        acceleration: acceleration,
        topSpeed: topSpeed,
        power: power,
        efficiency: efficiency,
        image: image || 'https://via.placeholder.com/200x150?text=Custom+Car',
        isCustom: true
    };
    
    // Add to custom cars array
    customCars.push(customCar);
    
    // Close modal and reset form
    closeCustomCarModal();
    
    // Show success message
    showNotification(`"${customCar.name}" has been added successfully! You can now select it for comparison.`, 'success');
    
    // Refresh the cars grid to show the new car
    filterCars();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Set background color based on type
    let bgColor = '#667eea'; // default info
    if (type === 'success') bgColor = '#28a745';
    if (type === 'error') bgColor = '#dc3545';
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Populate cars grid
function populateCarsGrid(cars = [...carsData, ...customCars]) {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';
    
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = `car-item ${car.isCustom ? 'custom-car' : ''}`;
        carElement.onclick = () => selectCar(car);
        
        carElement.innerHTML = `
            <h4>${car.name}</h4>
            <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
            <p><strong>Range:</strong> ${car.range} miles</p>
            <p><strong>0-60:</strong> ${car.acceleration}s</p>
            <span class="category">${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
            ${car.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
        `;
        
        grid.appendChild(carElement);
    });
}

// Select a car
function selectCar(car) {
    const carNumber = document.getElementById('carModal').getAttribute('data-car-number');
    selectedCars[`car${carNumber}`] = car;
    
    displayCar(carNumber, car);
    closeModal();
    
    // Show comparison results if both cars are selected
    if (selectedCars.car1 && selectedCars.car2) {
        showComparisonResults();
    }
}

// Display car in the card
function displayCar(carNumber, car) {
    const content = document.getElementById(`car${carNumber}-content`);
    
    // Create a stable HTML structure
    const carDisplayHTML = `
        <div class="car-display">
            <img src="${car.image}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/200x150?text=Car+Image'" loading="lazy">
            <h4>${car.name}</h4>
            <div class="car-specs">
                <div class="spec-item">
                    <span class="spec-label">Price:</span>
                    <span class="spec-value">$${car.price.toLocaleString()}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Range:</span>
                    <span class="spec-value">${car.range} miles</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">0-60 mph:</span>
                    <span class="spec-value">${car.acceleration}s</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Top Speed:</span>
                    <span class="spec-value">${car.topSpeed} mph</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Power:</span>
                    <span class="spec-value">${car.power} hp</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Efficiency:</span>
                    <span class="spec-value">${car.efficiency} L/100km</span>
                </div>
            </div>
            <button class="remove-btn" onclick="removeCar(${carNumber})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;
    
    // Use requestAnimationFrame for smooth DOM updates
    requestAnimationFrame(() => {
        content.innerHTML = carDisplayHTML;
    });
}

// Remove car from comparison
function removeCar(carNumber) {
    selectedCars[`car${carNumber}`] = null;
    
    const content = document.getElementById(`car${carNumber}-content`);
    const placeholderHTML = `
        <div class="placeholder">
            <i class="fas fa-car-side"></i>
            <p>Select a car to compare</p>
        </div>
    `;
    
    // Use requestAnimationFrame for smooth DOM updates
    requestAnimationFrame(() => {
        content.innerHTML = placeholderHTML;
    });
    
    // Hide comparison results if one car is removed
    document.getElementById('comparison-results').style.display = 'none';
}

// Show comparison results
function showComparisonResults() {
    const car1 = selectedCars.car1;
    const car2 = selectedCars.car2;
    
    if (!car1 || !car2) return;
    
    const resultsGrid = document.getElementById('results-grid');
    resultsGrid.innerHTML = '';
    
    // Define comparison metrics
    const metrics = [
        { name: 'Price', key: 'price', format: 'currency', lowerIsBetter: true },
        { name: 'Range', key: 'range', format: 'number', lowerIsBetter: false },
        { name: 'Acceleration (0-60)', key: 'acceleration', format: 'number', lowerIsBetter: true },
        { name: 'Top Speed', key: 'topSpeed', format: 'number', lowerIsBetter: false },
        { name: 'Power', key: 'power', format: 'number', lowerIsBetter: false },
        { name: 'Efficiency', key: 'efficiency', format: 'number', lowerIsBetter: true }
    ];
    
    metrics.forEach(metric => {
        const value1 = car1[metric.key];
        const value2 = car2[metric.key];
        
        let winner = '';
        let value1Class = '';
        let value2Class = '';
        
        if (value1 !== value2) {
            const isBetter = metric.lowerIsBetter ? value1 < value2 : value1 > value2;
            if (isBetter) {
                winner = car1.name;
                value1Class = 'winner';
                value2Class = 'loser';
            } else {
                winner = car2.name;
                value1Class = 'loser';
                value2Class = 'winner';
            }
        }
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        let formattedValue1, formattedValue2;
        if (metric.format === 'currency') {
            formattedValue1 = `$${value1.toLocaleString()}`;
            formattedValue2 = `$${value2.toLocaleString()}`;
        } else {
            formattedValue1 = value1.toString();
            formattedValue2 = value2.toString();
        }
        
        resultItem.innerHTML = `
            <h4>${metric.name}</h4>
            <div class="value ${value1Class}">${formattedValue1}</div>
            <div class="value ${value2Class}">${formattedValue2}</div>
            ${winner ? `<small>Winner: ${winner}</small>` : '<small>Tie</small>'}
        `;
        
        resultsGrid.appendChild(resultItem);
    });
    
    document.getElementById('comparison-results').style.display = 'block';
}

// Add some interactive features
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 