document.getElementById("toggleMenu").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("-translate-x-full")) {
        menu.classList.remove("-translate-x-full");
    } else {
        menu.classList.add("-translate-x-full");
    }
});

document.getElementById("closeMenu").addEventListener("click", function() {
    document.getElementById("menu").classList.add("-translate-x-full");
});

function showEditForm(item, index) {
	document.getElementById('editItem').value = item;
	document.getElementById('editIndex').value = index;
	document.getElementById('editFormContainer').style.display = 'block';
}