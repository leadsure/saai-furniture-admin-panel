export function scrollOnHide(navbar: HTMLDivElement) {
  let previousScroll = window.scrollY;
  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    if (navbar) {
      if (previousScroll > currentScroll) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100px";
      }
    }

    previousScroll = currentScroll;
  });
}

export function changeBgAndColorOnScroll(setChangeBg: any) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  });
}
