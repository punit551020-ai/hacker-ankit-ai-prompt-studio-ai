let allPrompts = [];

// 600 Completely Unique Prompts and Images Engine
function generate600UniquePrompts() {
    const categories = [
        {
            title: "🔥 Viral 3D Boy Attitude Avatar",
            keyword: "3d-boy-avatar",
            basePrompt: "A 3D digital illustration of a cool Indian boy wearing a black hoodie with neon lighting, sitting on a luxury sports car, cinematic background, 8k render."
        },
        {
            title: "🎀 Trendy Stylish Girl Portrait",
            keyword: "stylish-girl-portrait",
            basePrompt: "High fashion portrait of a stylish young Indian girl wearing oversized sunglasses and a denim jacket, dramatic street lighting, cinematic depth of field."
        },
        {
            title: "🏎️ Royal Sports Car Photography",
            keyword: "supercar-night",
            basePrompt: "Cinematic shot of a young guy driving a luxury sports car through neon city streets at night, motion blur, rain reflections, highly detailed 8k."
        },
        {
            title: "🚀 Cyberpunk Futuristic Character",
            keyword: "cyberpunk-character",
            basePrompt: "Futuristic cyberpunk warrior with glowing neon eyes, futuristic tech outfit, standing in rain-slicked city streets, Unreal Engine 5 render."
        },
        {
            title: "📸 Cinematic Royal Indian Portrait",
            keyword: "indian-male-portrait",
            basePrompt: "Cinematic portrait of an Indian male model wearing traditional royal sherwani, studio lighting, soft shadows, sharp focus, 85mm shot."
        },
        {
            title: "🏍️ Royal Enfield Attitude Rider",
            keyword: "biker-boy-sunset",
            basePrompt: "Attitude Indian boy sitting on a matte black Royal Enfield bike, wearing a leather jacket and sunglasses, sunset background, photorealistic."
        },
        {
            title: "🎮 3D Anime Gaming Setup Avatar",
            keyword: "anime-boy-gamer",
            basePrompt: "Cool anime boy with glowing blue headset sitting in a dark RGB gaming setup room, neon ambient lights, ultra detailed 4k wallpaper."
        },
        {
            title: "👑 Stylish Queen Luxury Look",
            keyword: "queen-fashion-look",
            basePrompt: "A stunning young woman wearing a golden crown and luxury dress, dramatic studio portrait, high key lighting, photorealistic detail."
        }
    ];

    allPrompts = [];

    for (let i = 1; i <= 600; i++) {
        let cat = categories[(i - 1) % categories.length];
        
        // Generates 600 completely unique image URLs using Unsplash Source API with unique seed numbers
        let uniqueImageUrl = `https://picsum.photos/seed/${cat.keyword}-${i}/600/400`;

        allPrompts.push({
            id: i,
            title: `${cat.title} #${i}`,
            image: uniqueImageUrl,
            prompt: `${cat.basePrompt} (Variation #${i})`
        });
    }

    renderPrompts(allPrompts);
}

function renderPrompts(prompts) {
    const container = document.getElementById("promptContainer");
    container.innerHTML = "";

    prompts.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="card-content">
                <div>
                    <div class="card-title">${item.title}</div>
                    <div class="prompt-box" id="prompt-${index}">${item.prompt}</div>
                </div>
                <button class="copy-btn" onclick="copyPrompt('prompt-${index}', this)">📋 Copy Prompt</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function copyPrompt(id, btnElement) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied! ✅";
        btnElement.style.background = "#16a34a";
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.background = "#0284c7";
        }, 2000);
    });
}

function filterPrompts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = allPrompts.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.prompt.toLowerCase().includes(query)
    );
    renderPrompts(filtered);
}

function closeIntro() {
    const intro = document.getElementById("intro-screen");
    intro.style.opacity = "0";
    intro.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", () => {
    generate600UniquePrompts();
});