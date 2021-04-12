class WayOne {
  String name;
  // ! its better is initalize variable with final if you are using like this.
  final String age;
  // ! use _ to make private
  final String _batch;

// ? you can pass data like this
  WayOne(this.name, this.age, this._batch);

  void display(String rollNumber) {
    print(
        'data passed thorugh class is $name , $age , $_batch and thorugh function is $rollNumber');
  }
}

main(List<String> args) {
  final WayOne wayOneObj = WayOne('evolvingkid', '22', 'CS');

  wayOneObj.display('22');
}
