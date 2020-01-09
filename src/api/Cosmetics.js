const fetch = require('node-fetch');

export default class Cosmetics {
  async getListData() {
    const response = await fetch('http://localhost:6626/cosmetcis')
      .then(response => response.json());

    return {
      data: response
    }
  }
  async getItemData(id) {
    const response = await fetch(`http://localhost:6626/cosmetcisItem?id=${id}`).then(response => response.json());

    return {
      data: response
    }
  }
}
