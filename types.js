function whatIs(theName, something) {
  let theType = typeof something;
  console.log(theName + " has type " + theType + " and value " + something);
}

let h;
whatIs("declared h", h);

h = 2;
whatIs("numeric h", h);

let j = 4;
whatIs("defined j", j);

h += j;
whatIs("added j to h ", h);

j = "5";
whatIs("redefined j", j);

h += j;
whatIs("added another j to h ", h);

o = {
  myValue: 75,
  valueOf: function () {
    return this.myValue;
  },
};

h = 5;
h = 5 + o;
whatIs("added an object to numeric h ", h);

whatIs("whatis", whatIs);
