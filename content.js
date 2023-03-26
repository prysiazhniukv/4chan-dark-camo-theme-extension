function applyTheme(cssRules) {
  const styleElement = document.createElement('style');
  styleElement.id = 'my-theme-changer';
  styleElement.innerHTML = cssRules;
  document.head.appendChild(styleElement);
}

function removeTheme() {
  const styleElement = document.getElementById('my-theme-changer');
  if (styleElement) {
    styleElement.remove();
  }
}

// Update this CSS with your desired theme styling targeting 4chan's elements and classes
const themeCss = `
  /* Dark theme CSS rules for 4chan */
  .boardBanner, .navLinks, .boardTitle, .thread, .reply, .linkButton, .pageSwitch, .box-outer, .boxcontent, #ft, #whatis, #header {
    background-color: #1d1f21 !important;
    color: #c5c8c6 !important;
  }

    body {
    background: #1d1f21 url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F26%2F54%2FGwz10q.jpg&f=1&nofb=1&ipt=51056c71b81332ee3250b366a7e52bbd50c0f007f95fa60877a8e8218db0f607&ipo=images) top repeat-x !important;
    color: #c5c8c6 !important;
  }

  #header .bg {
    background: linear-gradient(to right, #1d1f21, #2f343b) !important;
  }

  .linkButton:hover, .pageSwitch > a:hover, .navLinks > a:hover {
    background-color: #373b41 !important;
  }

  a, a:visited, #boards a, #ft li a {
    color: #d5c5f5 !important;
  }

  a:hover, #boards a:hover, #ft li a:hover {
    color: #b9a6e8 !important;
  }

  #logo, #logo h1, #logo h2, h1 a {
    color: #f8b8e8 !important;
  }

  .boxbar, #announce .boxbar {
    background-color: #373b41 !important;
    color: #f8b8e8 !important;
  }

  #disclaimer-dialog .container-close, .closebutton {
    background-color: #373b41 !important;
  }

  .top-box {
    background-color: #1d1f21 !important;
  }

  #ft ul {
    border-top-color: #373b41 !important;
  }

  #ft li {
    background-color: #2f343b !important;
  }

  #ft li.current, #ft li.fill {
    background-color: #1d1f21 !important;
    color: #c5c8c6 !important;
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = themeCss;
document.head.appendChild(styleElement);


