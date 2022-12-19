let dataApi = [];
async function fecthData() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    console.log(data.avatar_url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

fecthData().then(function (data) {
  console.log(data.login);
});
