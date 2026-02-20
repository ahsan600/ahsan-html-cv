window.onload = function () {
	document.getElementById("download")
			.addEventListener("click", () => {
					const invoice = this.document.getElementById("resume-download");
					console.log(invoice);
					console.log(window);
					var opt = {
							filename: 'Mohsin-CV.pdf',
							// add best quality image
							output: 'pdf',
							// padding in bottom
							margin: 2,
							
							
							
					
					};
					html2pdf().from(invoice).set(opt).save();
			})
}