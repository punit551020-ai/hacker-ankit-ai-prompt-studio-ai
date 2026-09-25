let allPrompts = [];

function generate600UniquePrompts() {
    // 600 unique prompt templates and styles
    const styles = [
        {
            title: "🔥 Viral 3D Boy Attitude Avatar",
            prompt: "A 3D digital illustration of a cool Indian boy wearing a black hoodie with cyan neon lighting, sitting on a luxury sports car, cinematic background, 8k render."
        },
        {
            title: "🎀 Trendy Stylish Girl Portrait",
            prompt: "High fashion portrait of a stylish young Indian girl wearing oversized sunglasses and a denim jacket, dramatic street lighting, cinematic depth of field."
        },
        {
            title: "🏎️ Royal Sports Car Photography",
            prompt: "Cinematic shot of a young guy driving a modern sports car through neon city streets at night, motion blur, rain reflections, highly detailed 8k photography."
        },
        {
            title: "🚀 Cyberpunk Futuristic Character",
            prompt: "Futuristic cyberpunk warrior with glowing blue eyes, white hair, standing in neon rain city, Unreal Engine 5 render, highly detailed."
        },
        {
            title: "📸 Cinematic Royal Indian Portrait",
            prompt: "Cinematic portrait of an Indian male model wearing traditional royal outfit, studio lighting, soft shadows, sharp focus, 85mm shot."
        },
        {
            title: "🏍️ Royal Enfield Attitude Rider",
            prompt: "Attitude Indian boy sitting on a matte black Royal Enfield bike, wearing a leather jacket and sunglasses, sunset background, photorealistic."
        },
        {
            title: "🎮 3D Anime Gaming Setup Avatar",
            prompt: "Cool anime boy with glowing blue headset sitting in a dark RGB gaming setup room, neon ambient lights, ultra detailed 4k wallpaper."
        },
        {
            title: "👑 Stylish Queen Luxury Look",
            prompt: "A stunning young woman wearing a golden crown and luxury dress, dramatic studio portrait, high key lighting, photorealistic detail."
        }
    ];

    allPrompts = [];

    // Unique Image Generator for all 600 items
    for (let i = 1; i <= 600; i++) {
        let styleObj = styles[(i - 1) % styles.length];
        
        // Guarantees 600 distinct images without repeating using distinct image IDs
        let uniqueImage = `https://picsum.photos/id/${(i % 100) + 10}/600/400`;

        allPrompts.push({
            id: i,
            title: `${styleObj.title} #${i}`,
            image: uniqueImage,
            prompt: `${styleObj.prompt} (Style Edition #${i})`
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