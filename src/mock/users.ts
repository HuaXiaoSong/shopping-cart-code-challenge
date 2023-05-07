// Define some mock user data

const mockUsers = () => {
  const users = [];

  for (let i = 1; i <= 100; i++) {
    const user = {
      id: i,
      username: `customer${i}`,
      password: `password${i}`,
      role: "Customer",
    };

    users.push(user);
  }
  users.push({ username: "admin", password: "admin", role: "Admin" });
  return users;
};

function fetchUsers() {
  let users: any[] = [];
  const str = localStorage.getItem("ADMIN_USERS");
  if (str && JSON.parse(str) && JSON.parse(str).length > 0) {
    users = JSON.parse(str);
  } else {
    users = mockUsers();
  }
  return users;
}

export function login(username: string, password: string): Promise<string | null> {
  const users = fetchUsers();
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        resolve(user.role); // Return the user's role (either 'Customer' or 'Admin')
      } else {
        resolve(null); // Return null if the username and password don't match any user
      }
    }, 500);
  });
}

export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchUsers());
    }, 500);
  });
}
