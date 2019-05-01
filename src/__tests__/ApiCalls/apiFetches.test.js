import { fetchRandomMovie } from "../../ApiCalls/apiFetches";

describe('Api Fetches', () => {
  const mockResponse = { movie: 'The Force Awakens' };
  const mockFilmUrl = 'https://swapi.co/api/films/1'

  window.fetch = jest.fn().mockImplementation(()=> 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    }))

  it('Should fetch with the correct params', () => {
    fetchRandomMovie(1);
    expect(window.fetch).toHaveBeenCalledWith(mockFilmUrl);
  })

  it('Should return parsed response if response "ok"', async () => {
    const result = await fetchRandomMovie(1)
    expect(result).toEqual(mockResponse);
  })

  it('Should return an error if response fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({ ok: false }))
    await expect(fetchRandomMovie(1)).rejects.toEqual(Error('Error fetching movies'));
  })

})