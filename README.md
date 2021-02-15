### ID.me test authentication 

Once the user authenticates using their email and password, the site is granted an access code and redirects to receive the access token in the window’s URL. In the backend, the app retrieves the access token from the URL and passes it to another API call `(/attributes)` to retrieve the user’s credentials, such as their first/last name, email,zip code, and service group. These variables are stored in an object variable which can be later accessed in the app.  

If the user’s verification returns as true, the app will then display the user’s first name and their service group. 
