window.cargar_archivos = function(){
	with(window.doxy.funciones){ // Usando with para mejor facilidad.
		var i=iniciar
		i.b("tampermonkey")
		var carpeta = i.x("carpeta")
		i.b("cargar_archivos")
		i.v("urls_códigos", [
			"utilidades"
			,"activar_herramientas"
			,"colores_arcoiris"
			,"fon"
			,"reales_hacia_texto"
			,"texto_hacia_reales"
			,"programa"
		])
		i.b("cargar_archivos")
		i.x("urls_códigos").map(x=>i.agregar_código(carpeta+x))
		i.definir_esto("cargar_archivos")
	}
}
window.cargar_archivos()

