const users = [
 { name: "Moore Hensley" },
  { name: "Sharlene Bush"} ,
  { name: "Ross Vazquez" },
  { name: "Elma Head"} ,
  {name: "Carey Barr" },
  { name: "Blackburn Dotson" },
  { name: "Sheree Anthony"}
 ];
const {name} = users;
const getUserNames = (array) => array.map(({ name }) => name);
console.log(getUserNames(users));
