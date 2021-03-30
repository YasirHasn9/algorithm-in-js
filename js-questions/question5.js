const existing_app = {
  100: [121, 400, 517],
  7182: [223, 501, 870, 9001],
};

const getAppEligibility = (candidateId, age, companyId) => {
  if (age < 18) {
    return "Candidate isn't old enough to apply";
  } else if (existing_app[companyId].includes(candidateId)) {
    return "Candidate has already applied";
  } else {
    return "Candidate can apply";
  }
};

const data = {
  person: { id: 517, age: 26, name: "Yarer" },
  company: {
    id: 7182,
    info: {
      field: "Ad",
      headquarterLocation: "Ca",
      humanResource: {
        hasJobOpenings: true,
        numberOfEmployees: 10000,
        recruiterNames: ["Foo", "Foo"],
      },
    },
    name: "google",
  },
  isLooking: true,
  jobTitle: "SW",
};

// its all about destructuring  
const {
  person: { id: personID, age },
  company: { id: companyID },
  company,
  isLooking,
} = data;
// const { id: personID, age } = person;
// const { id: companyID } = company;
if (isLooking && company.info.humanResource.hasJobOpenings) {
  console.log(getAppEligibility(personID, age, companyID));
} else {
  console.log("Whhat ");
}
