// CHALLENGE 1
// `// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example. Original array of posts should not be mutated.`

// `// @param {{id: number, createdBy: number, commentNo: number}[]}`

// `// @returns {{postId: number, postCreatedBy: number }[]}`

const postsArray = [
  {
    id: 123,
    createdBy: "user16",
    commentNo: 5,
  },
  {
    id: 456,
    createdBy: "user20",
    commentNo: 5,
  },
  {
    id: 789,
    createdBy: "user32",
    commentNo: 5,
  },
];

const newPostArr = (arr) => {
  [...arr].map((item) => {
    return {
      postsId: item.id,
      postsCreated: item.createdBy,
    };
  });
};

// Challenges using the SWAPI API: https://swapi.dev/

// CHALLENGE 2
// Fetch all people from the API, create a function that takes in the results array and returns a new array only with people with height above 166

const fetchData = async (searchTerm) => {
  const response = await fetch(`https://swapi.dev/api/${searchTerm}/`);

  const data = await response.json();
  return data.results;
};

const heightFilter = async () => {
  const people = await fetchData("people");
  let newArr = [];

  people.map((item) => {
    if (item.height > 166) {
      newArr.push(item);
    }
  });
  console.log(newArr);
  return newArr;
};

// heightFilter();

// CHALLENGE 3
// Fetch all starships from the API. Create a function that takes in a the results array and returns a new array with all starships, but only the name, model and people property for each object.

const startShips = async () => {
  const ships = await fetchData("starships");
  let newArr = [];
  ships.map((ship) => {
    newArr.push({ name: ship.name, model: ship.model, pilots: ship.pilots });
  });
  console.log(newArr);
};

// startShips();

// CHALLENGE 4
// Fetch all the films from the swapi API, create a function that returns only movies made after 1990

// CHALLENGE 5
// Fetch all starships, create a function that returns the sum of number of passengers all ships can take on.
