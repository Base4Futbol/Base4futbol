#!/usr/bin/env python3

import cgi

# Leer los datos enviados desde el formulario
form = cgi.FieldStorage()
usuario = form.getvalue('usuario')
contrasena = form.getvalue('contrasena')

# Verificar las credenciales del usuario
if usuario == 'David' and contrasena == 'secreto':
	# Si las credenciales son correctas, enviar una respuesta de éxito
	print('Content-Type: text/html')
	print('')
	print('<html><body><h1>Bienvenido, {}!</h1></body></html>'.format(usuario))
else:
	# Si las credenciales son incorrectas, enviar una respuesta de error
	print('Content-Type: text/html')
	print('')
	print('<html><body><h1>Error: credenciales incorrectas.</h1></body></html>')
