function parent() {
  var a = 20;
  console.log(a);

  function child() {
    a = 30;

    function child2() {
      console.log(a);
    }

    child2();
  }
  child();
}

parent();
