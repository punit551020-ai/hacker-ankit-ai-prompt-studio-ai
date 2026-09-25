let prompts=[], active="All";
const grid=document.querySelector("#grid"), search=document.querySelector("#search"), cats=document.querySelector("#categories"), count=document.querySelector("#count"), toast=document.querySelector("#toast");
fetch("prompts.json").then(r=>r.json()).then(data=>{prompts=data; buildCats(); render();});
function buildCats(){
 const names=["All",...new Set(prompts.map(x=>x.category))];
 cats.innerHTML=names.map(c=>`<button class="chip ${c==="All"?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
 cats.onclick=e=>{const b=e.target.closest(".chip");if(!b)return;active=b.dataset.cat;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};
}
function render(){
 const q=search.value.trim().toLowerCase();
 const list=prompts.filter(x=>(active==="All"||x.category===active)&&(!q||(x.title+" "+x.category+" "+x.prompt).toLowerCase().includes(q)));
 count.textContent=`${list.length} PROMPTS`;
 document.querySelector("#empty").hidden=list.length!==0;
 grid.innerHTML=list.map(x=>`<article class="card"><img class="preview" loading="lazy" src="assets/previews/${x.id}.svg" alt="${esc(x.category)} preview"><div class="card-body"><div class="tag">${esc(x.category)}</div><h3>${esc(x.title)}</h3><button class="copy" data-id="${x.id}">COPY PROMPT</button></div></article>`).join("");
}
grid.addEventListener("click",e=>{const b=e.target.closest(".copy");if(!b)return;const x=prompts.find(p=>p.id==b.dataset.id);navigator.clipboard.writeText(x.prompt).then(()=>{toast.textContent="PROMPT COPIED ✓";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1500)})});
search.addEventListener("input",render);
document.querySelector("#startBtn").onclick=()=>document.querySelector("#intro").classList.add("hide");
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&document.querySelector("#intro").classList.contains("hide")===false)document.querySelector("#intro").classList.add("hide")});
function esc(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
