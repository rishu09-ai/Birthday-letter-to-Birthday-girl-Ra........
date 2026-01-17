let page = 1;

function next() {
  document.getElementById("p" + page).classList.remove("active");
  page++;
  document.getElementById("p" + page).classList.add("active");
}

/* COUNTDOWN TO 18 JAN */
function countdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 0, 18, 0, 0, 0);
  if (now > target) target.setFullYear(now.getFullYear() + 1);

  setInterval(() => {
    const diff = target - new Date();
    document.getElementById("h").innerText =
      String(Math.floor(diff / 3600000)).padStart(2,"0");
    document.getElementById("m").innerText =
      String(Math.floor(diff / 60000) % 60).padStart(2,"0");
    document.getElementById("s").innerText =
      String(Math.floor(diff / 1000) % 60).padStart(2,"0");
  }, 1000);
}
countdown();

/* CAKE CUT */
function cutCake() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "cracker";
    c.style.left = "50%";
    c.style.top = "50%";
    c.style.setProperty("--x", (Math.random()*400-200)+"px");
    c.style.setProperty("--y", (Math.random()*400-200)+"px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1000);
  }
  setTimeout(() => next(), 1200);
}
