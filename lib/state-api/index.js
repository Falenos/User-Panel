// When moving to production we can skip this directory and add it as npm package

class DataApi {

  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getUsers() {
    return this.mapIntoObject(this.rawData);
  }

}

export default DataApi;
