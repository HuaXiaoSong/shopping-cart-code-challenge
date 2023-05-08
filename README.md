# How to run

- Install dependencies with yarn install (check https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable for yarn
  install )
  ```yarn install```
- Run the project (use port 3000)
  ```yarn dev --port 3000```
- Page links
  http://localhost:3000/products - customer products
  http://localhost:3000/checkout - customer checkout
  http://localhost:3000/login - customer login
  http://localhost:3000/admin/login - admin login
- user credential for customer:
  **username**: "customer1",
  **password**: "password1",
- user credential for admin:
  **username**: "admin",
  **password**: "admin",

# Unit test

## Describe in words what unit tests you would implement to check the functionality of the authentication service.

- Test user login:

Ensure that a user can log in successfully with valid credentials.
Verify that the login process sets the appropriate authentication token for the user.

- Test authenticated routes:

Check that authenticated routes or endpoints are properly protected and can only be accessed by authenticated users.
Verify that unauthenticated users are redirected to the login page or denied access to protected resources.

- Test user logout:

Ensure that the logout process clears the authentication token or session for the user.
Verify that the user is redirected to the appropriate page after logging out.
