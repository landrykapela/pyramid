const buttonTalk = document.getElementById("button");

const nav = document.getElementById("top-nav");
const navItems = nav.childNodes;

function fadeOut(element) {
  console.log("start fading...");
  var op = 1; // initial opacity
  var timer = setInterval(function() {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}
function fadeIn(element) {
  console.log("start fading...");
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}
const addEvent = (source, target, navigation) => {
  if (source) {
    source.addEventListener("click", e => {
      e.preventDefault();
      for (let i = 0; i < navigation.length; i++) {
        if (
          navigation[i].tagName === "SPAN" ||
          navigation[i].tagName === "LI"
        ) {
          if (navigation[i].classList.contains("active")) {
            navigation[i].classList.remove("active");
          }
        }
      }
      source.classList.add("active");
      switchMain(target);
    });
  }
};
const switchMain = target => {
  let mains = document.getElementsByTagName("section");
  for (let i = 0; i < mains.length; i++) {
    if (mains[i].id === target) {
      if (mains[i].classList.contains("hidden")) {
        mains[i].classList.remove("hidden");
      }
    } else {
      mains[i].classList.add("hidden");
    }
  }
};
// function to activate and deactive menu button
const activate = id => {
  document.getElementById(id).classList.add("active");
};
const deactivate = id => {
  document.getElementById(id).classList.remove("active");
};

//show contact form
if (buttonTalk) {
  buttonTalk.addEventListener("click", e => {
    switchMain("contacts");
    deactivate("nav-home");
    activate("nav-contacts");
  });
}

let banners = [];
banners.push(document.getElementById("c1"));
banners.push(document.getElementById("c2"));
const switchBanners = target => {
  for (let i = 0; i < banners.length; i++) {
    if (banners[i].id === target) {
      if (banners[i].classList.contains("hidden")) {
        banners[i].classList.remove("hidden");
      }
    } else {
      banners[i].classList.add("hidden");
    }
  }
};

// for (let k = 0; k < banners.length; k++) {
//   let timer = setInterval(switchBanners(banners[k]));
// }

const menuButton = document.getElementById("menu-but");
if (menuButton) {
  menuButton.addEventListener("click", e => {
    let menu = document.getElementById("collapse-nav");
    if (menuButton.textContent === "close") {
      menu.classList.add("hidden");
      menuButton.textContent = "view_headline";
      return;
    }
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menuButton.textContent = "close";
    }
    let menuItems = menu.childNodes;
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].tagName === "LI") {
        addEvent(menuItems[i], menuItems[i].id.split("-")[1], menuItems);
      }
    }
  });
}

for (let i = 0; i < navItems.length; i++) {
  if (navItems[i].tagName === "SPAN")
    addEvent(navItems[i], navItems[i].id.split("-")[1], navItems);
}
