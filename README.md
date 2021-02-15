### ID.me test authentication 

Once the user authenticates using their email and password, the site is granted an access code and redirects to receive the `access token` in the window’s URL. In the backend, the app retrieves the access token from the URL and passes it to another API call `(/attributes)` to retrieve the user’s credentials, such as their first/last name, email,zip code, and service group. These variables are stored in an object variable which can be later accessed in the app.  

If the user’s verification returns as true, the app will then display the user’s first name and their service group. 

## Sample Result: 
```
attributes: Array(5)
0: {handle: "email", name: "Email", value: "partner+se-test-mil-200603-f4b4b8@id.me"}
1: {handle: "fname", name: "First Name", value: "Tamika"}
2: {handle: "lname", name: "Last Name", value: "Bernier"}
3: {handle: "zip", name: "Postal Code", value: "30376-1533"}
4: {handle: "uuid", name: "Unique Identifier", value: "ee88404302db40adb43269dee682689e"}
status: Array(1)
0: {group: "military", subgroups: Array(1), verified: true}
```
