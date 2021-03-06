const fetch = require('node-fetch');

const API_URL = process.env.VUE_APP_API_URL;

export default class Cosmetics {
  async getListData() {
    const response = await fetch(`${API_URL}/cosmetcis`)
      .then(response => response.json());

    return {
      data: response
    }
  }
  async getItemData(id) {
    const response = await fetch(`${API_URL}/cosmetcisItem?id=${id}`).then(response => response.json());

    return {
      data: response
    }
  }
}
