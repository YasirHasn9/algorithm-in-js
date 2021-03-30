const candidate = {
  isLookingForJob: true,
  location: "foo",
  name: "bar",
  otherInfo: {
    age: 26,
    interests: ["a", "b", "c"],
    isEmployed: false,
  },
  remoteFriendly: true,
};

const getSignedOffer = (candidate) => {
  if (!candidate.isLookingForJob || !candidate.remoteFriendly) {
    return {
      error: "Candidate doest meet requirements",
      candidate,
      offerSigned: false,
    };
  } else {
    return {
      error: null,
      candidate: {
        //   this is not gonna write overwrite the isLookingForJob because we spread the candidate to fix it , we move it after spreading the obj
        // isLookingForJob: false,
        ...candidate,
        isLookingForJob: false,
        otherInfo: {
          ...candidate.otherInfo,
          isEmployed: false,
        },
      },
      offerSigned: true,
    };
  }
};

console.log(getSignedOffer(candidate));
