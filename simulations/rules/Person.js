class Person {
  static get radius() {
    return 5;
  }

  static get speed() {
    return 1;
  }

  constructor({
    x,
    y,
    state,
    p5,
  }) {
    this.x = x;
    this.y = y;
    this.state = state;
    this.p5 = p5;

    this.horizontalSpeed = p5.random(-1, 1) * Person.speed;
    this.verticalSpeed = p5.random(-1, 1) * Person.speed;
  }

  render() {
    this.p5.fill(this.state.color);
    this.p5.noStroke();
    this.p5.ellipse(this.x, this.y, Person.radius);
  }

  move() {
    if ((this.x - Person.radius < 0 && this.horizontalSpeed < 0)
      || (this.x + Person.radius > this.p5.width && this.horizontalSpeed > 0)) {
      this.horizontalSpeed *= -1;
    }

    if ((this.y - Person.radius < 0 && this.verticalSpeed < 0)
      || (this.y + Person.radius > this.p5.height && this.verticalSpeed > 0)) {
      this.verticalSpeed *= -1;
    }

    this.x += this.horizontalSpeed;
    this.y += this.verticalSpeed;
  }
}

export default Person;
