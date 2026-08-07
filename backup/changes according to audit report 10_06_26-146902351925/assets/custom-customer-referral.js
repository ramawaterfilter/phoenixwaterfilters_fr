(function () {
  const TARGET_URL = "https://phoenixwaterfilters.fr/products/the-phoenix-gravity-filtre-a-eau";
  const BTN_SELECTOR = ".sca_aff_customer_refer_shop_now_button";

  function applyHref() {
    const btn = document.querySelector(BTN_SELECTOR);
    if (!btn) return false;
    btn.setAttribute("href", TARGET_URL);
    return true;
  }

  if (applyHref()) return;

  const observer = new MutationObserver(() => {
    if (applyHref()) observer.disconnect();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 5000);
})();
