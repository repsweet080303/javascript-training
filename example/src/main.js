const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return 132;
    });
  console.log(data);
};

getUsers();

// res.then((data) => {
//   console.log(data);
// });

try {
  // fetch("https://jsonplaceholder.typicode.com/users");
  parseInt("xddddd");
  console.log(x);
} catch (error) {
  throw new Error("123321");
}
