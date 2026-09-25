const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'assets', 'previews');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const categories = [
    {
        name: "Aesthetic Boy Portraits",
        prompts: [
            "Handsome young Indian boy sitting on a matte black Royal Enfield Bullet, wearing black leather jacket and sunglasses, aesthetic street lighting, 8k resolution cinematic look.",
            "Trendy boy taking mirror selfie with smartphone, wearing oversized aesthetic shirt, dark room background with bold neon typography glowing on wall.",
            "Cool boy standing on terrace during sunset, wearing casual jacket, golden hour lighting, cinematic bokeh background, soft focus portrait.",
            "Cyberpunk styled young boy in neon lit alleyway, futuristic jacket, rain reflections, dramatic moody blue and pink lighting."
        ],
        colors: ["#1a1c29", "#111827", "#0f172a", "#181825"],
        accent: "#00ffcc"
    },
    {
        name: "Trending Girl Portraits",
        prompts: [
            "Aesthetic young Indian girl taking mirror selfie, wearing trendy crop hoodie, warm bedroom fairy lights in background, soft natural glow.",
            "Beautiful girl in traditional saree sitting in a lush green garden, soft golden sunlight filtering through trees, cinematic highly detailed skin texture.",
            "Aesthetic girl with aesthetic vintage sunglasses, wearing denim jacket, coffee cup in hand, aesthetic cafe backdrop.",
            "Moody neon portrait of a girl with vibrant hair highlights, dramatic shadows, soft bokeh neon lights."
        ],
        colors: ["#2d1b2e", "#1f1424", "#2a1824", "#231221"],
        accent: "#ff007f"
    },
    {
        name: "Romantic Couple Prompts",
        prompts: [
            "Romantic couple portrait in lush green garden, boy in maroon kurta and girl in matching elegant saree, natural sunlight, highly detailed.",
            "Cute couple holding hands on beach during sunset, silhouette lighting, aesthetic water reflections, dreamy romantic mood.",
            "Trendy couple taking aesthetic mirror selfie together in urban room, matching street outfits, ambient warm lighting."
        ],
        colors: ["#1c1917", "#292524", "#1a1625", "#28101e"],
        accent: "#ff3366"
    }
];

let allPrompts = [];

for (let i = 1; i <= 600; i++) {
    const cat = categories[i % categories.length];
    const promptText = cat.prompts[i % cat.prompts.length];
    
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="bg${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${cat.colors[0]}"/>
      <stop offset="100%" stop-color="${cat.colors[1]}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#bg${i})" />
  <circle cx="200" cy="110" r="45" fill="${cat.accent}" opacity="0.15" />
  <path d="M200 75 C 215 75, 225 87, 225 102 C 225 117, 215 128, 200 128 C 185 128, 175 117, 175 102 C 175 87, 185 75, 200 75 Z" fill="#ffffff" opacity="0.85"/>
  <path d="M145 220 C 145 160, 165 142, 200 142 C 235 142, 255 160, 255 220 L 270 300 L 130 300 Z" fill="#ffffff" opacity="0.75"/>
  <rect x="15" y="15" width="370" height="270" rx="12" fill="none" stroke="${cat.accent}" stroke-width="2" stroke-opacity="0.4"/>
  <text x="25" y="45" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${cat.accent}">VIRAL AI PROMPT #${i}</text>
  <text x="25" y="265" font-family="Arial, sans-serif" font-size="12" fill="#ffffff" opacity="0.8">${cat.name.toUpperCase()}</text>
</svg>`;

    fs.writeFileSync(path.join(outputDir, `${i}.svg`), svgContent);

    allPrompts.push({
        id: i,
        title: `#${i} - ${cat.name}`,
        category: cat.name,
        prompt: promptText,
        image: `assets/previews/${i}.svg`
    });
}

fs.writeFileSync(path.join(__dirname, 'prompts.json'), JSON.stringify(allPrompts, null, 2));
console.log('Successfully regenerated 600 viral prompts and previews!');