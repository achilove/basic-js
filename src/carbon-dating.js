const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let parsedSampleActivity = parseFloat(sampleActivity);
  let validator = (isNaN(parsedSampleActivity)
    || parsedSampleActivity <= 0
    || parsedSampleActivity > MODERN_ACTIVITY
    || typeof sampleActivity !== "string");
  return validator ? false : Math.ceil(Math.log(MODERN_ACTIVITY / parsedSampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};
