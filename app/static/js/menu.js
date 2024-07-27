const menu_open_button = document.getElementById("menu__open-button");

/* Open */
function openMenu() {
	document.getElementById("menu").style.height = "100%";
}

menu_open_button.addEventListener("mouseup", openMenu);

const menu_close_button = document.getElementById("menu__close-button");
/* Close */
function closeMenu() {
	document.getElementById("menu").style.height = "0%";
}

menu_close_button.addEventListener("mouseup", closeMenu);

const menu_list_items = document.querySelectorAll(".menu__list__item");

menu_list_items.forEach((menu_list_item) => {
	menu_list_item.addEventListener("mouseup", closeMenu);
})