<script type="text/javascript">
			window.onload = function () {
				var fotos = document.getElementsByClassName("foto");
				for (var i=0; i < fotos.length; i++) {
				  fotos[i].style.display = "none";
				  var legenda = fotos[i].parentElement.getElementsByClassName("legenda")[0];
				  legenda.onclick = function() {
				  	var fotodiv = this.parentElement.getElementsByClassName("foto")[0];
				  	if 	(fotodiv.style.display == "none") 
				  		 fotodiv.style.display = "block";
				  	else fotodiv.style.display =  "none";
				  }
				};
				
				
			};
</script>