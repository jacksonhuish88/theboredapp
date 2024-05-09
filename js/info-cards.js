document.addEventListener("DOMContentLoaded", function() {
    const infoItems = [
        {
            icon: "fas fa-earth-americas fa-3x",
            title: "Map",
            text: "Let 'Bored Map' be your personal entertainment compass, always pointing towards the nearest excitement, no matter where you're stranded!",
        },
        {
            icon: "fa-solid fa-turn-up fa-3x",
            title: "Swipe",
            text: "Swipe up with 'Bored Swipe' and find your next adventure, or swipe down and send boredom packing!",
        },
        {
            icon: "fa-solid fa-message fa-3x",
            title: "Message",
            text: "Strike up a convo in 'Bored Chat' and watch as dull moments transform into epic storytelling sessions!"
        }
    ];

    const container = document.getElementById('info-items-container');
    infoItems.forEach(item => {
        const itemHTML = `
            <div class="col-sm-12 col-md-4">
                <div class="feature-item text-center" style="transition: transform 0.3s ease;">
                    <i class="${item.icon} mb-3"></i>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });

    // Adding hover effect
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)'; // Scales up the card
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)'; // Returns to normal scale
        });
    });
});
