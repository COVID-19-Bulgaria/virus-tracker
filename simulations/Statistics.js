class Statistics {
  constructor({
    infected = 0,
    cured = 0,
    fatal = 0,
  }) {
    this.infectedValue = infected;
    this.curedValue = cured;
    this.fatalValue = fatal;

    this.infectedTimelineValue = [];
    this.curedTimelineValue = [];
    this.fatalTimelineValue = [];
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

  get infectedTimeline() {
    return this.infectedTimelineValue;
  }

  get curedTimeline() {
    return this.curedTimelineValue;
  }

  get fatalTimeline() {
    return this.fatalTimelineValue;
  }

  recordInfectedTimeline() {
    this.infectedTimelineValue.push(this.infectedValue);
  }

  recordCuredTimeline() {
    this.curedTimelineValue.push(this.curedValue);
  }

  recordFatalTimeline() {
    this.fatalTimelineValue.push(this.fatalValue);
  }
}

export default Statistics;
