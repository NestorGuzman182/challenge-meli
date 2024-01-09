import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

export const searchItems = async (query) => {
    try {
        const response = await api.get(`/sites/MLA/search?q=${query}`);
        console.log('response ', response.data)
        const categories = (response.data.filters || [])
            .find(filter => filter.id === 'category') || { values: []};
            console.log('categories ', categories)
        const items = response.data.results.map(item => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals: item.price % 1 !== 0 ? Math.round((item.price % 1) * 100) : 0,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
        }));
        console.log('items ', items)
        console.log('categories', categories)

        return {
            author: {
              name: 'Néstor',
              lastname: 'Guzmán',
            },
            categories: categories,
            items: items,
          };
    } catch (error) {
        console.error('Error al consultar resultados', error.response?.data || error.message);
        throw error;
    }
}

export const getProductDetails = async (id) => {
    try {
      const [itemResponse, descriptionResponse] = await Promise.all([
        api.get(`/items/${id}`),
        api.get(`/items/${id}/description`),
      ]);
      console.log('Item response:', itemResponse.data);
      console.log('Description response:', descriptionResponse.data);
      const item = itemResponse.data;
      const description = descriptionResponse.data.plain_text;
  
      return {
        author: {
          name: 'Néstor',
          lastname: 'Guzmán',
        },
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: item.price % 1 !== 0 ? Math.round((item.price % 1) * 100) : 0,
          },
          picture: item.pictures[0]?.url,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description,
        },
        }
    } catch (error) {
      console.error('Error al consultar el detalle del producto', error);
      throw error;
    }
  };

export default api;
