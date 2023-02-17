/** funcion para incluir mi plantilla html en las demas */
fetch('header.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('header').innerHTML = data;
	})
	.catch(error => console.log(error));
