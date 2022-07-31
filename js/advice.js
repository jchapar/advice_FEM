class HTTP {
  // Make HTTP Request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
}
