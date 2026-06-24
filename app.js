(function () {
  var KEY = "abstinent-lang";
  function setLang(lang) {
    document.body.classList.remove("lang-en", "lang-fr");
    document.body.classList.add("lang-" + lang);
    var btns = document.querySelectorAll(".lang-toggle button");
    btns.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set") === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
  }

  function initial() {
    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(initial());
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () {
        setLang(b.getAttribute("data-set"));
      });
    });
  });
})();
