class WayTwo {
  // ? the symbol '?'is given to make vaiable as nullable.
  // ! this is only on new version on dart and flutter AKA null safety
  final String? name;
  // ? note that private cannot be used in this type
  final int age;

// * required is used to make that data as required if not pass it will pop error. This is only for new version of dart AKA null safety.
// * flutter have another thing called '@required' which is only for flutter not for dart.
  WayTwo({required this.age, this.name});

  void display({String? batch, int rollNumber = 10}) {
    // ? rollnumber = 10 is used as default parameter.
    print('values are $name, $age, $batch');
  }
}

main(List<String> args) {
  final WayTwo _objOfWayTwo = WayTwo(name: 'evolvingkid', age: 12);
  // ? even though you change it dosnt matter. If you code have soo many data to pass use this method.

  _objOfWayTwo.display();

  _objOfWayTwo.display(batch: 20.toString());
}
