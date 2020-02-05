class human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.spokenwords = [];
  }

  speak(words) {
    this.spokenwords.push(words);
    console.log(words);
  }

}

const san = new human("sanath", 20);
console.log(san.name); //console.log(san.spokenwords);

console.log(san.age);
san.speak("hi how are you");