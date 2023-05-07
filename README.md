Describe in words what unit tests you would implement to check the functionality of the authentication service.

- Test user login:

Ensure that a user can log in successfully with valid credentials.
Verify that the login process sets the appropriate authentication token for the user.

- Test authenticated routes:

Check that authenticated routes or endpoints are properly protected and can only be accessed by authenticated users.
Verify that unauthenticated users are redirected to the login page or denied access to protected resources.

- Test user logout:

Ensure that the logout process clears the authentication token or session for the user.
Verify that the user is redirected to the appropriate page after logging out.
