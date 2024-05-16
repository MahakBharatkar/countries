const formatCurrencies = (currencies) => {
    return Object.values(currencies)
      .map((currency) => `${currency.name}`)
      .join(", ");
  };

export default formatCurrencies;