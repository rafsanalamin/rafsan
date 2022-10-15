//MENU
function openMenu() {
    document.getElementById('hp-menu').style.width="100%";
}

function closeMenu() {
    document.getElementById('hp-menu').style.width="0";
}


// MIX IT UP
var mixer = mixitup('.work-grid');

// WOW

wow = new WOW(
    {
    mobile: true
  }
  )
  wow.init();