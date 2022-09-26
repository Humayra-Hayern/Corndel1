myName = "a global";

hello = function (who) {
  console.log("Hello " + who + " I am " + this.myName);
};

// 1). 4 different ways to call in a global context
hello("dave");

globalThis.hello("bill");

hello.call(globalThis, "jan");

var helloGlobal = hello.bind(globalThis, "rachel");
helloGlobal();

// 2). one more; "partial": specificy this now, but provide parameter later

var helloGlobalPartial = hello.bind(globalThis);
helloGlobalPartial("Late Arrival");

// 3). call in context of an object
var xxx = {
  greeter: hello,
  myName: "Mr X",
};

var yyy = {
  greeter: hello,
  myName: "Ms Y",
  thex: xxx,
};

xxx.greeter("Arthur");
hello.call(xxx, "Brian");

yyy.greeter("Chris");

// 4). note that last item in nested reference gives the this
yyy.thex.greeter("Derek");

// 5). we can bind y's greeter to x's data!
helloInYBoundToX = yyy.greeter.bind(xxx);
helloInYBoundToX("Ermintrude");
