import { fetchRandomMovie } from "../../ApiCalls/apiFetches";

describe('Api Fetches', () => {
  describe('It should fetch with the correct params', () => {
    const mockResponse = {};

    window.fetch = jest.fn().mockImplementation(()=> 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      }))
  })
})