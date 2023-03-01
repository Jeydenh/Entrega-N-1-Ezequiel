function mostrarNombre(){
   document.getElementById('nombre').value = sessionStorage.getItem('nombre');
}
function guardarApellido2(){
   document.getElementById('boton_guardar').onclick = function(){
      var nombre = document.getElementById('nombre').value;
      sessionStorage.setItem('nombre', apellidnombre);
      alert('El nombre ha sido guardado.');
   }
}
function borrarApellido2(){
   document.getElementById('boton_borrar').onclick = function(){
      document.getElementById('nombre').value = '';
      sessionStorage.removeItem('nombre');
   }
}
function recargarPagina2(){
   document.getElementById('boton_recargar').onclick = function(){
      location.href = '';
   }
}
window.onload = function(){
   mostrarNombre();
   guardarNombre();
   borrarNombre();
   recargarPagina();
}

       function mostrarApellido2(){
         document.getElementById('apellido').value = sessionStorage.getItem('apellido');
      }
      function guardarApellido2(){
         document.getElementById('boton_guardar2').onclick = function(){
            var apellido = document.getElementById('apellido').value;
            sessionStorage.setItem('apellido', apellido);
            alert('El apellido ha sido guardado.');
         }
      }
      function borrarApellido2(){
         document.getElementById('boton_borrar2').onclick = function(){
            document.getElementById('apellido').value = '';
            sessionStorage.removeItem('apellido');
         }
      }
      function recargarPagina2(){
         document.getElementById('boton_recargar2').onclick = function(){
            location.href = '';
         }
      }
      window.onload = function(){
         mostrarApellido2();
         guardarApellido2();
         borrarApellido2();
         recargarPagina2();
      }