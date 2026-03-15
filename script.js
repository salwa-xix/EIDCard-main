const mainMessages = [
  {
    title: "عيد سعيد ومبهج ✨",
    note: "أيامكم فرح، وإنجازكم يكبر، وعيدكم يليق بطموحكم."
  },
  {
    title: "كل عام وأنتم بخير 🌙",
    note: "نسأل الله أن يتقبل منا ومنكم صالح الأعمال، ويعيده علينا وعليكم باليمن والبركات."
  },
  {
    title: "عساكم من عواده 💫",
    note: "جعل الله عيدكم فرحة بأعمال قُبلت، ودرجات رُفعت، وأماني تَحققت."
  },
  {
    title: "عيدكم مبارك 🎊",
    note: "أمانينا تسبق تهانينا، وفرحتنا تسبق أيامنا، وعيد سعيد عليكم جميعاً."
  }
];

window.addEventListener("load", () => {
  const titleEl = document.querySelector(".splash-title");
  const noteEl = document.querySelector(".splash-note");
  let msgIdx = 0;

  if (titleEl && noteEl) {
    titleEl.style.transition = "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    noteEl.style.transition = "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    
    setInterval(() => {
      titleEl.style.opacity = 0;
      titleEl.style.transform = "translateY(12px)";
      noteEl.style.opacity = 0;
      noteEl.style.transform = "translateY(8px)";
      
      setTimeout(() => {
        msgIdx = (msgIdx + 1) % mainMessages.length;
        titleEl.textContent = mainMessages[msgIdx].title;
        noteEl.textContent = mainMessages[msgIdx].note;
        
        titleEl.style.opacity = 1;
        titleEl.style.transform = "translateY(0)";
        noteEl.style.opacity = 1;
        noteEl.style.transform = "translateY(0)";
      }, 600); // Wait for fade out
    }, 3800); // Change every 3.8 seconds
  }

  // Handle closing splash screen on click
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");
  
  if (splash) {
    // Change cursor to indicate clickability
    splash.style.cursor = "pointer";
    
    splash.addEventListener("click", () => {
      splash.classList.add("hide");
      if (main) main.classList.remove("hidden");
    });
  }
});