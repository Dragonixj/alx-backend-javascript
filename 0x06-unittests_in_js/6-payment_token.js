const getPaymentTokenFromAPI = (sucess) =>
  new Promise((resolve, _reject) => {
    if (sucess) {
      resolve({ data: 'Successful response from the API' });
    }
  });

module.exports = getPaymentTokenFromAPI;
