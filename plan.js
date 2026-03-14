document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('tripForm');
    const itinerarySection = document.getElementById('itinerarySection');
    const itineraryDisplay = document.getElementById('itineraryDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form Validation [cite: 34]
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const startDate = new Date(document.getElementById('sDate').value);
        const endDate = new Date(document.getElementById('eDate').value);

        // Date Validation 
        if (endDate <= startDate) {
            alert("End date must be after start date!");
            return;
        }

        // Dynamic content updates [cite: 30]
        const name = document.getElementById('uName').value;
        const dest = document.getElementById('uDest').value;
        const act = document.getElementById('uAct').value;

        itineraryDisplay.innerHTML = `
            <p><strong>Traveler:</strong> ${name}</p>
            <p><strong>Destination:</strong> ${dest}</p>
            <p><strong>Plan:</strong> From ${startDate.toDateString()} to ${endDate.toDateString()}</p>
            <p><strong>Activities:</strong> ${act ? act : "Enjoying the travel"}</p>
        `;

        itinerarySection.classList.remove('d-none');
        itinerarySection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling [cite: 38]
    });
});