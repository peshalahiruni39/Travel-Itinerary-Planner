const destinations = [
    { name: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500", desc: "The City of Light, home to the Eiffel Tower." },
    { name: "Tokyo", country: "Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500", desc: "A blend of futuristic neon and ancient traditions." },
    { name: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500", desc: "The city that never sleeps, filled with skyscrapers." },
    { name: "Sigiriya", country: "Sri Lanka", img: "https://images.unsplash.com/photo-1588598136851-44099ad2c280?w=500", desc: "An ancient rock fortress with breathtaking views." },
    { name: "London", country: "United Kingdom", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500", desc: "Rich in history and culture, featuring the Big Ben." },
    { name: "Rome", country: "Italy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500", desc: "The eternal city, known for its Roman history." }
];

const destGrid = document.getElementById('destGrid');
const searchInput = document.getElementById('destSearch');

function displayDestinations(data) {
    destGrid.innerHTML = "";  
    data.forEach((dest) => {
        destGrid.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm border-0 dest-card">
                    <img src="${dest.img}" class="card-img-top" alt="${dest.name}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${dest.name} <small class="text-muted">(${dest.country})</small></h5>
                        <p class="card-text text-muted small">${dest.desc}</p>
                        <button class="btn btn-outline-primary btn-sm mt-2" onclick="showDestModal('${dest.name}', '${dest.desc}', '${dest.img}')">View More</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showDestModal(name, desc, img) {
    const modal = new bootstrap.Modal(document.getElementById('destModal'));
    document.getElementById('modalDestName').innerText = name;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = img;
    modal.show();
}

searchInput.addEventListener('keyup', function() {
    const value = this.value.toLowerCase();
    const filteredData = destinations.filter(dest => 
        dest.name.toLowerCase().includes(value) || 
        dest.country.toLowerCase().includes(value)
    );
    displayDestinations(filteredData);
});

displayDestinations(destinations);