class Statistics {
  constructor({
    infected = 0,
    cured = 0,
    fatal = 0,
  }) {
    this.infectedValue = infected;
    this.curedValue = cured;
    this.fatalValue = fatal;
  }

  get infected() {
    return this.infectedValue;
  }

  set infected(infected) {
    this.infectedValue = infected;
  }

  incrementInfected() {
    this.infectedValue += 1;
  }

  get cured() {
    return this.curedValue;
  }

  set cured(cured) {
    this.curedValue = cured;
  }

  incrementCured() {
    this.curedValue += 1;
  }

  get fatal() {
    return this.fatalValue;
  }

  set fatal(fatal) {
    this.fatalValue = fatal;
  }

  incrementFatal() {
    this.fatalValue += 1;
  }
}

export default Statistics;
