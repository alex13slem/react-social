export default class RestClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${this.baseURL}${path}`);
    }
    return response.json();
  }

  async post(path, data) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to post data to ${this.baseURL}${path}`);
    }
    return response.json();
  }

  async put(path, data) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to put data to ${this.baseURL}${path}`);
    }
    return response.json();
  }

  async delete(path) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete data from ${this.baseURL}${path}`);
    }
    return response.json();
  }

  async patch(path, data) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to patch data at ${this.baseURL}${path}`);
    }
    return response.json();
  }
}
