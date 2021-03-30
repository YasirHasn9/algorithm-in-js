const fooObj = { name: "foo" };
const barObj = { name: "bar" };

const getFoo = () => Promise.resolve(fooObj);
const getBar = () =>
  new Promise((res) => {
    seyTimeout(() => {
      res(barObj);
    }, 3000);
  });

Promise.all([getFoo(), getBar()])
  .then((foo, bar) => {
    // console.log(getBar, getFoo);
    // console.log(foo, bar);
    foo.isOn = foo.name.includes("on");
    bar.isOn = bar.name.includes("on");

    return [foo, bar];
  })
  .then((foo, bar) => {
    console.log(getBar, getFoo);
    console.log(foo, bar);
  })
  .catch((err) => console.log("there was an error"));

fooObj.name += "On";
barObj.name += "On";
console.log(fooObj, barObj);
