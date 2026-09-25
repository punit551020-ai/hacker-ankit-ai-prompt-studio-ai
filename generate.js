const fs = require('fs');

const basePrompts = [
    {
        title: "Outfit Replace & Face Retain Edit",
        prompt: "Use my uploaded image as the base. Keep the face, identity, pose, body shape, background, camera angle, and lighting exactly the same. Do not change anything except the outfit. Replace current clothes with modern stylish attire. Ultra-realistic, 100% face accuracy.",
        category: "Trending Outfit"
    },
    {
        title: "Royal Bullet Bike Pose Edit",
        prompt: "A handsome young Indian boy wearing a classy black shirt and white trousers, sitting stylishly on a black Royal Enfield Bullet motorcycle, outdoor urban street background, cinematic lighting, 8k resolution.",
        category: "Bike Pose"
    },
    {
        title: "Traditional Couple Saree Photo Edit",
        prompt: "A romantic Indian couple standing in a lush green garden. The boy is wearing a rich maroon shirt and jeans, and the girl is wearing a stunning matching red designer saree. Natural daylight, highly detailed skin texture.",
        category: "Couple"
    },
    {
        title: "Aesthetic Mirror Selfie Typography Wall",
        prompt: "A stylish boy taking a mirror selfie holding a smartphone, wearing a relaxed light blue shirt, background features a dark aesthetic wall with bold typography quotes like 'Be Strong', moody soft shadow lighting.",
        category: "Aesthetic Selfie"
    },
    {
        title: "3D Chibi Sticker Overlay Edit",
        prompt: "A realistic portrait of a trendy boy in a purple casual shirt, with cute 3D miniature animated chibi avatar stickers of himself sitting on his shoulder and table, viral Instagram edit style.",
        category: "3D Avatar"
    },
    {
        title: "Romantic Beach Flower Sad Boy Pose",
        prompt: "A young boy standing on a serene beach at sunset holding a bouquet of white roses, back turned slightly towards camera, cinematic blue hour moody lighting, aesthetic film grain photo.",
        category: "Aesthetic Mood"
    }
];

const totalPrompts = [];

for (let i = 1; i <= 600; i++) {
    const base = basePrompts[(i - 1) % basePrompts.length];
    totalPrompts.push({
        id: i,
        title: `${base.title} #${i}`,
        prompt: `${base.prompt} [Style Variant ${i}]`,
        category: base.category,
        image: `assets/previews/${i}.svg`
    });
}

fs.writeFileSync('prompts.json', JSON.stringify(totalPrompts, null, 2));
console.log("Successfully generated 600 prompts in prompts.json!");