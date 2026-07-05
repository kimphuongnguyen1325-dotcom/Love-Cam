function start() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("music").play();

  typeText();
  startHearts();
  startFlowers();
  startStars();
  startSparkles();
}

/* ⌨️ hiệu ứng gõ chữ */
function typeText() {
  const lines = [
    "Em nhớ Chị nhiều lắm…",
    "Từng ngày trôi qua đều là Chị…",
    "Và em chỉ muốn nói rằng…"
  ];

  let i = 0;
  let el = 0;

  function typing() {
    if (el < lines.length) {
      document.getElementById("line" + (el + 1)).innerText += lines[el][i];
      i++;

      if (i < lines[el].length) {
        setTimeout(typing, 80);
      } else {
        i = 0;
        el++;
        setTimeout(typing, 500);
      }
    } else {
      document.getElementById("signature").style.display = "block";
      document.getElementById("choice").style.display = "block";
    }
  }

  typing();
}

/* 💗 tim bay */
function startHearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.innerHTML = "💗";
    h.style.position = "absolute";
    h.style.left = Math.random() * 100 + "%";
    h.style.bottom = "0px";
    h.style.fontSize = "20px";
    document.body.appendChild(h);

    let up = setInterval(() => {
      h.style.bottom = parseInt(h.style.bottom || 0) + 5 + "px";
      if (parseInt(h.style.bottom) > window.innerHeight) {
        h.remove();
        clearInterval(up);
      }
    }, 30);
  }, 400);
}

/* 🌸 hoa rơi */
function startFlowers() {
  setInterval(() => {
    let f = document.createElement("div");
    f.innerHTML = "🌸";
    f.style.position = "absolute";
    f.style.left = Math.random() * 100 + "%";
    f.style.top = "-20px";
    document.body.appendChild(f);

    let down = setInterval(() => {
      f.style.top = parseInt(f.style.top) + 3 + "px";
      if (parseInt(f.style.top) > window.innerHeight) {
        f.remove();
        clearInterval(down);
      }
    }, 30);
  }, 600);
}

/* 🌌 sao */
function startStars() {
  for (let i = 0; i < 150; i++) {
    let s = document.createElement("div");
    s.innerHTML = "✨";
    s.style.position = "absolute";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.opacity = Math.random();
    document.body.appendChild(s);
  }
}

/* ✨ sparkles click */
function startSparkles() {
  document.addEventListener("click", (e) => {
    let sp = document.createElement("div");
    sp.innerHTML = "💖";
    sp.style.position = "absolute";
    sp.style.left = e.clientX + "px";
    sp.style.top = e.clientY + "px";
    document.body.appendChild(sp);

    setTimeout(() => sp.remove(), 800);
  });
}

/* 🙈 nút không chạy trốn */
document.addEventListener("DOMContentLoaded", () => {
  const no = document.getElementById("no");
  const yes = document.getElementById("yes");

  no.addEventListener("mouseover", () => {
    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "%";
    no.style.top = Math.random() * 80 + "%";
  });

  yes.addEventListener("click", () => {
    alert("💗 Em biết mà… mãi yêu Chị 💗");
  });
});
