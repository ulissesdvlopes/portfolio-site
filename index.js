let nav = document.getElementById('main-navigation');

function changeFocus(event) {
	
	let el = event.target;
	
	if(el.value) {
		if(!el.classList.contains('done')) {
			el.classList.add('done');
		}
	} 
	else {
		if(el.classList.contains('done')) {
			el.classList.remove('done');
		}
	}
	
}

//evento PLACEHOLDER
// capturar pelo scroll usando a intersection observer api
nav.addEventListener('click', (event) => {
	
	let active = document.getElementsByClassName('active');
	
	let el = event.target;
	
	if(el.matches('.active')) return;
	
	if(!el.matches('.nav-item')) return;
	
	document.querySelector('.active').classList.remove('active');
	
	el.classList.add('active');
});