const obj = {
  name: "Duong",
  nick: "Hoa",
  method() {
    return {
      age: "20",
      newMethod: () => {
        console.log(obj.method().age);
      },
    };
  },
};

obj.method().newMethod();
