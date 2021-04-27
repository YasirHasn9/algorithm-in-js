const DEFAULT_PERSON_OBJECT = {
  name: "Unknown",
  location: "Unknown",
  interests: [],
};
const createPerson = (name, location, interests) => {
  const person = { ...DEFAULT_PERSON_OBJECT, interests: [] };
  if (!!name) person.name = name;
  if (!!location) person.location = location;
  if (!!interests) person.interests = interests;
  return person;
};

const setName = (person, name) => {
  person.name = name;
};

const setLocation = (person, location) => {
  person.location = location;
};
const addInterest = (person, interest) => {
  person.interests.push(interest);
};

const elon = createPerson("Elon", "Mars", ["Tesla"]);
const jeff = createPerson("Jeff", undefined, undefined);
const bill = createPerson("Bill", undefined, ["Microsoft"]);
const mark = createPerson(undefined, undefined, undefined);
const yasir = createPerson(undefined, "Irvine", undefined);

addInterest(elon, "Space");
addInterest(elon, "Renewable Energy");

setLocation(jeff, "Moon");
addInterest(jeff, "Amazon");
addInterest(jeff, "Space");
addInterest(jeff, "Renewable Energy");

setLocation(bill, "Earth");
addInterest(bill, "Renewable Energy");
addInterest(bill, "Medicine");

setName(mark, "Mark");
setLocation(mark, "Earth");
addInterest(mark, "FB");
addInterest(mark, "Medicine");

setName(yasir, "Yasir");
console.log("elon", elon);
console.log("jeff", jeff);
console.log("bill", bill);
console.log("mark", mark);
console.log(yasir);
console.log(2 / 0);
