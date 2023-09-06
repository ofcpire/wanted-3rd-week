import api from './axios';

const getSearchReco = async (query?: string) => {
  console.log('calling api');
  try {
    const response = await api.get('sick', {
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error();
  }
};

export { getSearchReco };
