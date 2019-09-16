describe('Mutating closure', () => {
  it('It prints same value', () => {
    let i = 0;
    const print0 = () => {
      console.log(i);
    };
    i = i + 1;
    const print1 = () => {
      console.log(i);
    };
    i = i + 1;
    const print2 = () => {
      console.log(i);
    };

    print0();
    print1();
    print2();
  });

  it('It prints different values', () => {
    let i = 0;
    const print0 = createPrint(i);

    i = i + 1;
    const print1 = createPrint(i);

    i = i + 1;
    const print2 = createPrint(i);

    print0();
    print1();
    print2();
  });
});

function createPrint(i) {
  return () => {
    console.log(i);
  };
}
