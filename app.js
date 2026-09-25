let allPrompts = [];

// 600 Auto-Generator Engine for Viral AI Prompts
function generate600Prompts() {
    const images = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ];

    const titles = [
        "🔥 Viral 3D Boy Attitude Avatar",
        "🎀 Trendy Stylish Girl Portrait",
        "🏎️ Royal Sports Car Photography",
        "🚀 Cyberpunk Futuristic Character",
        "📸 Cinematic Indian Portrait",
        "🏍️ Royal Enfield Attitude Rider"
    ];

    const templates = [
        "A 3D digital illustration of a cool young boy wearing a black hoodie with cyan neon lighting, sitting on a luxury sports car, cinematic background, 8k render.",
        "High fashion portrait of a stylish young Indian girl wearing oversized sunglasses and a jacket, dramatic street lighting, cinematic bokeh depth of field, photo-realistic.",
        "Cinematic shot of a young guy driving a modern sports car through neon city streets at night, motion blur, rain reflections, highly detailed 8k photography.",
        "Futuristic cyberpunk warrior with glowing blue eyes, white hair, standing in neon rain city, Unreal Engine 5 render, highly detailed.",
        "Cinematic high-fashion portrait of an Indian male model wearing traditional royal outfit, dramatic studio shadows, golden lighting, shot on 85mm lens.",
        "Attitude Indian boy sitting on a matte black Royal Enfield bike, leather jacket, dark sunglasses, golden hour sunset lighting, ultra realistic photo."
    ];

    for (let i = 1; i <= 600; i++) {
        let index = (i - 1) % templates.length;
        allPrompts.push({
            id: i,
            title: `${titles[index]} #${i}`,
            image: images[index],
            prompt: templates[index]
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
    generate600Prompts();
});