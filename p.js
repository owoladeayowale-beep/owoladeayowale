// Simple UI behavior: set year, smooth scroll, handle form
document.addEventListener('DOMContentLoaded',function(){
	const y = new Date().getFullYear();
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = y;

	// Smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click',function(e){
			const href = this.getAttribute('href');
			if(href && href.startsWith('#')){
				const target = document.querySelector(href);
				if(target){
					e.preventDefault();
					target.scrollIntoView({behavior:'smooth',block:'start'});
				}
			}
		});
	});

	// Contact form: basic client-side handling
	const form = document.getElementById('contactForm');
	if(form){
		form.addEventListener('submit',function(e){
			e.preventDefault();
			const data = new FormData(form);
			// In a real site we'd POST this to a backend.
			const name = data.get('name')||'Friend';
			alert(`Thanks, ${name}! Your message was received.`);
			form.reset();
		});
	}
});

