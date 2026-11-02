
(function () {
  var PARIS_URL = "https://gymmai-lv.lovable.app/test7?embed=1";
  var AVATAR   = "https://gymmai-lv.lovable.app/paris/paris-400.jpg";
  var TITLE    = "Paris";
  var SUBTITLE = "AI Beauty Consultant · gloww.live";
  var LABEL    = "Talk to Paris, AI Beauty Consultant";

  var css = ''
    + '#paris-widget-root{position:fixed;z-index:2147483000;bottom:20px;right:20px;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;padding-bottom:env(safe-area-inset-bottom);}'
    + '.paris-widget-launcher{display:flex;align-items:center;gap:10px;border:0;cursor:pointer;background:#3B302B;color:#fff;border-radius:999px;padding:6px 16px 6px 6px;box-shadow:0 12px 32px rgba(9,20,40,.38);transition:transform .15s ease;position:relative;}'
    + '.paris-widget-launcher:hover{transform:translateY(-2px);}'
    + '.paris-widget-launcher::before{content:"";position:absolute;left:6px;top:50%;transform:translateY(-50%);width:62px;height:62px;border-radius:50%;border:2px solid #D9A08F;animation:paris-pulse 2s ease-out infinite;pointer-events:none;z-index:0;}'
    + '.paris-widget-launcher:hover::before{animation-play-state:paused;opacity:0;}'
    + '.paris-widget-launcher img{width:62px;height:62px;border-radius:50%;object-fit:cover;object-position:center 18%;border:2px solid #D9A08F;flex:0 0 auto;position:relative;z-index:1;}'
    + '.paris-widget-launcher span{font-size:13px;font-weight:600;line-height:1.25;max-width:150px;text-align:left;position:relative;z-index:1;}'
    + '@keyframes paris-pulse{0%{transform:translateY(-50%) scale(1);opacity:.9;}70%{transform:translateY(-50%) scale(1.6);opacity:0;}100%{transform:translateY(-50%) scale(1.6);opacity:0;}}'
    + '.paris-widget-panel{position:fixed;bottom:20px;right:20px;width:400px;height:700px;max-height:calc(100vh - 40px);max-width:calc(100vw - 32px);background:#000;border-radius:16px;overflow:hidden;box-shadow:0 24px 60px rgba(9,20,40,.45);display:flex;flex-direction:column;}'
    + '.paris-widget-panel[data-collapsed="true"]{height:52px;min-height:52px;}'
    + '.paris-widget-header{flex:0 0 auto;height:52px;background:#3B302B;color:#fff;display:flex;align-items:center;gap:10px;padding:0 8px 0 12px;}'
    + '.paris-widget-header img{width:30px;height:30px;border-radius:50%;object-fit:cover;object-position:center 18%;border:1px solid rgba(217,160,143,.7);}'
    + '.paris-widget-title{display:flex;flex-direction:column;line-height:1.15;flex:1;min-width:0;}'
    + '.paris-widget-title b{font-size:14px;font-weight:600;letter-spacing:.02em;}'
    + '.paris-widget-title span{font-size:11px;opacity:.72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
    + '.paris-widget-btn{width:32px;height:32px;border:0;background:transparent;color:#fff;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:.85;}'
    + '.paris-widget-btn:hover{background:rgba(255,255,255,.14);opacity:1;}'
    + '.paris-widget-body{flex:1 1 auto;min-height:0;background:#000;}'
    + '.paris-widget-panel[data-collapsed="true"] .paris-widget-body{display:none;}'
    + '.paris-widget-body iframe{width:100%;height:100%;border:0;display:block;}'
    + '.paris-widget-hidden{display:none !important;}'
    /* Tablets: slightly narrower, shorter — page stays visible behind. */
    + '@media (max-width:900px){.paris-widget-panel{width:380px;height:70vh;max-height:calc(100vh - 32px);bottom:16px;right:16px;}}'
    /* Phones: large but never full screen; a strip of the host page stays visible on top. */
    + '@media (max-width:600px){'
    +   '#paris-widget-root{bottom:12px;right:12px;left:12px;display:flex;justify-content:flex-end;}'
    +   '.paris-widget-launcher span{display:none;}'
    +   '.paris-widget-launcher{padding:5px;}'
    +   '.paris-widget-panel{left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));width:auto;max-width:none;height:78vh;max-height:calc(100vh - 72px);border-radius:14px;}'
    +   '.paris-widget-panel[data-collapsed="true"]{height:52px;}'
    + '}';

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.getElementById("paris-widget-root");
  if (!root) { root = document.createElement("div"); root.id = "paris-widget-root"; document.body.appendChild(root); }

  var ic = function (d) {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  };

  root.innerHTML = ''
    + '<button class="paris-widget-launcher" type="button" aria-label="' + LABEL + '">'
    +   '<img src="' + AVATAR + '" alt="" />'
    +   '<span>' + LABEL + '</span>'
    + '</button>'
    + '<div class="paris-widget-panel paris-widget-hidden" data-collapsed="false" role="dialog" aria-label="' + TITLE + '">'
    +   '<div class="paris-widget-header">'
    +     '<img src="' + AVATAR + '" alt="" />'
    +     '<div class="paris-widget-title"><b>' + TITLE + '</b><span>' + SUBTITLE + '</span></div>'
    +     '<button class="paris-widget-btn" type="button" data-action="toggle" aria-label="Minimize">' + ic('<path d="M5 12h14"/>') + '</button>'
    +     '<button class="paris-widget-btn" type="button" data-action="close" aria-label="Close">' + ic('<path d="M18 6 6 18M6 6l12 12"/>') + '</button>'
    +   '</div>'
    +   '<div class="paris-widget-body"></div>'
    + '</div>';

  var launcher = root.querySelector(".paris-widget-launcher");
  var panel = root.querySelector(".paris-widget-panel");
  var body = root.querySelector(".paris-widget-body");
  var toggleBtn = root.querySelector('[data-action="toggle"]');
  var closeBtn = root.querySelector('[data-action="close"]');

  function mount() {
    if (body.querySelector("iframe")) return;
    var f = document.createElement("iframe");
    f.src = PARIS_URL;
    f.title = TITLE;
    f.allow = "microphone; camera; autoplay; clipboard-write; fullscreen";
    f.setAttribute("allowfullscreen", "");
    body.appendChild(f);
  }

  function open() {
    mount();
    panel.setAttribute("data-collapsed", "false");
    toggleBtn.innerHTML = ic('<path d="M5 12h14"/>');
    toggleBtn.setAttribute("aria-label", "Minimize");
    panel.classList.remove("paris-widget-hidden");
    launcher.classList.add("paris-widget-hidden");
  }

  function close() {
    panel.classList.add("paris-widget-hidden");
    launcher.classList.remove("paris-widget-hidden");
    body.innerHTML = ""; // unmounts the call and releases the microphone
  }

  launcher.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  toggleBtn.addEventListener("click", function () {
    var collapsed = panel.getAttribute("data-collapsed") === "true";
    panel.setAttribute("data-collapsed", collapsed ? "false" : "true");
    toggleBtn.innerHTML = collapsed ? ic('<path d="M5 12h14"/>') : ic('<path d="m4 14 8-8 8 8"/>');
    toggleBtn.setAttribute("aria-label", collapsed ? "Minimize" : "Expand");
  });
})();
