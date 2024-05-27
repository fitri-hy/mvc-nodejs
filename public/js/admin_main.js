const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
menuBtn.addEventListener('click', () => {
	sideNav.classList.toggle('hidden');
});