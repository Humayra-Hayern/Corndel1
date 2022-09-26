function whatIs(theName, something) {
  let theType = typeof something;
  console.log(theName + " has type " + theType + " and value " + something);
}

let a;
whatIs("declared a", a);

a = 2;
whatIs("numeric a", a);

let h = 4;
whatIs("defined h", h);

a += h;
whatIs("added h to a ", a);

h = "5";
whatIs("redefined h", h);

a += h;
whatIs("added another h to a ", h);

o = {
  myValue: 75,
  valueOf: function () {
    return this.myValue;
  },
};

a = 5;
a = 5 + o;
whatIs("added an object to numeric a ", a);

whatIs("whatis", whatIs);
