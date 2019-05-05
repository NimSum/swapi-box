import { fetchRandomMovie, fetchCategory, fetchItem } from "../../ApiCalls/apiFetches";

describe('Api Fetches', () => {  
  const mockReject = jest.fn().mockImplementation(() => 
    Promise.resolve({ ok: false }));

  const mockResolve = (response) => jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response)
    }));


  describe('Fetch film', () => {
    const mockFilmResponse = { film: 'The Force Awakens' };
    const mockFilmUrl = 'https://swapi.co/api/films/1';
    const mockFilmId = 1;

    it('Should fetch with the correct params', () => {
      window.fetch = mockResolve(mockFilmResponse);

      fetchRandomMovie(mockFilmId);
      expect(window.fetch).toHaveBeenCalledWith(mockFilmUrl);
    })
  
    it('Should return parsed response if response "ok"', async () => {
      window.fetch = mockResolve(mockFilmResponse);
      const result = await fetchRandomMovie(mockFilmId)

      expect(result).toEqual(mockFilmResponse);
    })
  
    it('Should return an error if request fails', async () => {
      window.fetch = mockReject;
      
      await expect(fetchRandomMovie(mockFilmId)).rejects.toEqual(Error('Error fetching movies'));
    })
  });

  describe('Fetch category', () => {
    const mockCategory = 'people';
    const mockCategoryUrl = 'https://swapi.co/api/people';
    const mockCategoryResult = {
      results: [
        { name: "Luke Skywalker" },
        { name: "Obi-wan Kenobi" } 
      ] 
    };

    it('Should fetch using the correct parameter', () => {
      window.fetch = mockResolve(mockCategoryResult);

      fetchCategory(mockCategory);
      expect(window.fetch).toHaveBeenCalledWith(mockCategoryUrl);
    })

    it('Should return result array if response "ok"', async () => {
      window.fetch = mockResolve(mockCategoryResult);

      const result = await fetchCategory(mockCategory);
      expect(result).toEqual(mockCategoryResult.results);
    })

    it('Should return error if request fails', async () => {
      window.fetch = mockReject;

      await expect(fetchCategory(mockCategory)).rejects.toEqual(Error('Error fetching category items'));
    })
  });

  describe('Fetch item(url based)', () => {
    const mockUrl = 'https://swapi.co/api/vehicles/42/';
    const mockFetchedResult = { name: 'Sith speeder' , model: 'FC-20 speeder bike' }
    
    it('Should fetch item using the correct parameter', () => {
      window.fetch = mockResolve(mockFetchedResult);
      
      fetchItem(mockUrl);
      expect(window.fetch).toHaveBeenCalledWith(mockUrl);
    })

    it('Should return fetched data back if response "ok"', async () => {
      window.fetch = mockResolve(mockFetchedResult);

      const result = await fetchItem(mockUrl);
      expect(result).toEqual(mockFetchedResult);
    })

    it('Should return an error if request fails', async () => {
      window.fetch = mockReject;

      expect(fetchItem(mockUrl)).rejects.toEqual(Error('Error fetching item'))
    })
  })
})