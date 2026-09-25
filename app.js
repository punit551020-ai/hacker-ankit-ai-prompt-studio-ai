const promptsData = [
    {
        title: "🔥 Viral 3D Avatar Portrait",
        prompt: "A 3D digital illustration of a cool guy wearing a black hoodie with neon lighting, sitting on a gaming chair, holding a controller, cyberpunk style, highly detailed 8k render."
    },
    {
        title: "📸 Cinematic Photorealistic Portrait",
        prompt: "Close-up portrait of a young Indian man wearing a leather jacket, cinematic lighting, dramatic shadows, shot on 85mm lens, f/1.8, photo-realistic, ultra-detailed skin texture."
    },
    {
        title: "🎨 Cyberpunk City Background",
        prompt: "Futuristic cyberpunk city at night with flying cars, neon billboards in Hindi and English, rain-slicked streets reflecting colorful lights, wide angle view."
    },
    {
        title: "🚀 Anime Style Character Art",
        prompt: "Anime boy with glowing blue eyes, white hair, standing under cherry blossom trees, Studio Ghibli style, vibrant colors, detailed background."
    },
    {
        title: "💡 Professional LinkedIn Headshot",
        prompt: "Professional headshot of a young entrepreneur in a dark blue blazer, warm smiling expression, blurred modern office background, studio soft lighting."
    }
];

function loadPrompts(prompts) {
    const container = document.getElementById("promptContainer");
    container.innerHTML = "";

    prompts.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>
                <h3>${item.title}</h3>
                <p id="prompt-${index}">${item.prompt}</p>
            </div>
            <button class="copy-btn" onclick="copyPrompt('prompt-${index}', this)">Copy Prompt</button>
        `;
        container.appendChild(card);
    });
}

function copyPrompt(id, btnElement) {
    const promptText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(promptText).then(() => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied! ✅";
        btnElement.style.background = "#22c55e";
        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.background = "#f43f5e";
        }, 2000);
    });
}

function filterPrompts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = promptsData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.prompt.toLowerCase().includes(query)
    );
    loadPrompts(filtered);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    loadPrompts(promptsData);
});