export let USERS = [
  {
    id: 1,
    name: "Amogh Mehƌam",
    email: "decent10cs@gmail.com",
    favorites: ["Politics", "Technology", "Memes"],
    subscribe: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Rashid 12 Ahmad",
    email: "decent10cs@gmail.com",
    favorites: ["Movies", "Technology", "Programming"],
    subscribe: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Rashid Ahmad",
    email: "decent10cs@gmail.com",
    favorites: ["Movies", "Technology", "Programming"],
    subscribe: true,
    createdAt: new Date(),
  },
];

const removeItem = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

export const updateUser = (user) => {
  const userIndex = USERS.findIndex((us) => us.id == user.id);
  let newUserArray = [...USERS];
  newUserArray[userIndex] = { ...newUserArray[userIndex], ...user };
  USERS = newUserArray;
  return USERS.find((us) => us.id == user.id);
};
export const addUser = (user) => {
  USERS.push(user);
  return USERS.find((us) => us.id == user.id);
};

export const addFavorites = (userId, favorites) => {
  const userIndex = USERS.findIndex((us) => us.id == userId);
  let newUserArray = [...USERS];
  newUserArray[userIndex] = {
    ...newUserArray[userIndex],
    favorites: [...newUserArray[userIndex].favorites, ...favorites],
  };
  USERS = newUserArray;
  return USERS.find((us) => us.id == userId);
};
export const removeFavorite = (userId, favorite) => {
  const userIndex = USERS.findIndex((us) => us.id == userId);
  let newUserArray = [...USERS];
  const newFavArr = removeItem(newUserArray[userIndex].favorites, favorite);
  newUserArray[userIndex] = {
    ...newUserArray[userIndex],
    favorites: [...newFavArr],
  };
  USERS = newUserArray;
  return USERS.find((us) => us.id == userId);
};

export const subscribe = (userId) => {
  const userIndex = USERS.findIndex((us) => us.id == userId);
  let newUserArray = [...USERS];
  newUserArray[userIndex] = { ...newUserArray[userIndex], subscribe: true };
  USERS = newUserArray;
  return USERS.find((us) => us.id == userId);
};
export const unSubscribe = (userId) => {
  const userIndex = USERS.findIndex((us) => us.id == userId);
  let newUserArray = [...USERS];
  newUserArray[userIndex] = { ...newUserArray[userIndex], subscribe: false };
  USERS = newUserArray;
  return USERS.find((us) => us.id == userId);
};
