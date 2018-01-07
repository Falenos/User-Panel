// When moving to production we can skip this directory and add it as npm package

class StateApi {

  constructor(rawData) {
    this.data = {
      users: this.mapIntoObject(rawData)
    }
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupUser = userId => this.data.users[userId];

  getState = () => {
    return this.data;
  }

}

export default StateApi;
