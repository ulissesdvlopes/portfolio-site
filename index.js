let nav = document.getElementById('main-navigation');

function animateBar(oldActiveEl, newActiveEl) {
	
	oldActiveEl.classList.add('removing-bar');
	setTimeout(() => {
		oldActiveEl.classList.remove('removing-bar');
		oldActiveEl.classList.remove('active');
		newActiveEl.classList.add('active')
	}, 500)
	
}

nav.addEventListener('click', (event) => {
	
	let active = document.getElementsByClassName('active');
	
	let el = event.target;
	
	if(el.matches('.active')) return;
	
	if(!el.matches('.nav-item')) return;
	
	animateBar(active[0], el);
})