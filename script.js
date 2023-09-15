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
  const newArr = arr.map((item) => {
    return {
      postsId: item.id,
      postsCreated: item.createdBy,
    };
  });
  console.log(newArr);
};

newPostArr(postsArray);

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

  const newArr = people.filter((item) => {
    return item.height > 166;
  });
  return newArr;
};

heightFilter();

// CHALLENGE 3
// Fetch all starships from the API. Create a function that takes in a the results array and returns a new array with all starships, but only the name, model and people property for each object.

const starShips = async () => {
  const ships = await fetchData("starships");
  const newArr = ships.map((ship) => {
    return { name: ship.name, model: ship.model, pilots: ship.pilots };
  });
  console.log(newArr);
  return newArr;
};

starShips();

// CHALLENGE 4
// Fetch all the films from the swapi API, create a function that returns only movies made after 1990

const filmDates = async () => {
  const films = await fetchData("films");

  const newArr = films.filter((film) => {
    return film.release_date.slice(0, 4) > 1990;
  });
  console.log(newArr);
};

filmDates();

// CHALLENGE 5
// Fetch all starships, create a function that returns the sum of number of passengers all ships can take on.

const starshipPassengers = async () => {
  const ships = await fetchData("starships");
  const passengerShips = ships.filter((ship) => ship.passengers > 0);
  const passengers = passengerShips.reduce((total, ship) => {
    return parseInt(total) + parseInt(ship.passengers);
  }, 0);
  console.log(passengers);
};
starshipPassengers();
