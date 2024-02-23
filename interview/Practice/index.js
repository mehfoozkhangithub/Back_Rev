function main() {
  // here all data append here
  let appendData = document.querySelector("#sections");

  // ! this is api is basically use for single use
  const api = "https://api.github.com/users/";

  //todo:- normally we use this api for dynamically response

  let apiSearch = "https://api.github.com/search/users";

  let inputData = document.querySelector("#input").value;

  // this is where user give space between name

  let originalName = inputData.toLowerCase().split(" ").join("");

  // console.warn(originalName);

  // below normal fetch functionality
  // fetch(api + originalName)
  //   .then((res) => res.json())
  //   .then((data) => console.warn(data))
  //   .catch((err) => console.log("error", err));

  async function fetchData(api, originalName) {
    try {
      const response = await axios.get(apiSearch, {
        params: {
          q: originalName,
        },
      });
      // Process the response data here
      console.log(response.data);
    } catch (error) {
      // Handle the error here
      console.error("An error occurred:", error.message);
    }
  }

  fetchData(api, originalName);
}
