import axios from 'axios';

const baseURL = 'https://api.mercadolibre.com'

const api = axios.create({
  baseURL,
});

export const searchItems = async (query) => {
    try {
        const response = await api.get(`/sites/MLA/search?q=${query}`);
        const categories = response.data.filters
            .find(filter => filter.id === 'category')
            .values[0].path_from_root.map(category => category.name);
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

        return {
            author: {
              name: 'Néstor',
              lastname: 'Guzmán',
            },
            categories,
            items,
          };
    } catch (error) {
        console.error('Error al consultar resultados', error);
        throw error;
    }
}

export const getProductDetails = async (id) => {
    try {
      const [itemResponse, descriptionResponse] = await Promise.all([
        api.get(`/items/${id}`),
        api.get(`/items/${id}/description`),
      ]);
  
      const item = itemResponse.data.item;
      const description = descriptionResponse.data.plain_text;
  
      return {
        author: {
          name: 'TuNombre',
          lastname: 'TuApellido',
        },
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: item.price % 1 !== 0 ? Math.round((item.price % 1) * 100) : 0,
          },
          picture: item.pictures[0].url,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description,
        },
        }
    } catch (error) {
      console.error('Error al consultar el detalle del producto', error);
      throw error;
    }
  };

export default api;
