const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const results = this.journeys.map(function(journey){
    return journey.startLocation;
  });
  return results;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map(function(journey){
    return journey.endLocation;
  });
  return results;
};

Traveller.prototype.getModesOfTransport = function () {
  const results = this.journeys.map(function(journey){
    return journey.transport;
  });
  return results;
};

Traveller.prototype.getJourneysByTransport = function (wantedTransport) {
  const results = this.journeys.filter(function(journey){
    return journey.transport === wantedTransport;
  });
  return results;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter(function(journey){
    return journey.distance >= minDistance;
  });
  return results;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce(function(runningTotal, journey){
    return runningTotal + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportObject = {};
  const results = [];
  for(const eachTransport of this.getModesOfTransport()){
    transportObject[eachTransport] = null;
  };
  for(const eachTransport in transportObject){
    results.push(eachTransport);
  };
  return results;
};


module.exports = Traveller;
