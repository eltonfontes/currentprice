const INITIAL_CURRENT = {
  loaded: false,
  item: {
    code: "USD",
    symbol: "&#36;",
    rate: "39,876.2433",
    description: "United States Dollar",
    rate_float: 39876.2433,
  },
  current: {
    time: {
      updated: "Apr 13, 2022 11:02:00 UTC",
      updatedISO: "2022-04-13T11:02:00+00:00",
      updateduk: "Apr 13, 2022 at 12:02 BST",
    },
    disclaimer:
      "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    chartName: "Bitcoin",
    bpi: {
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "39,876.2433",
        description: "United States Dollar",
        rate_float: 39876.2433,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "30,645.1721",
        description: "British Pound Sterling",
        rate_float: 30645.1721,
      },
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "36,803.8585",
        description: "Euro",
        rate_float: 36803.8585,
      },
    },
  },
};

export default function currencyPrice(state = INITIAL_CURRENT, action) {
  if (action.type === "SHOW_ITEM_IN_PREVIEW") {
    return {
      ...state,
      item: action.item,
      loaded: true,
    };
  }

  if (action.type === "ON_LOAD") {
    let item = "";
    if (state.item.code === "USD") {
      item = action.current.bpi.USD;
    } else if (state.item.code === "GBP") {
      item = action.current.bpi.GBP;
    } else if (state.item.code === "EUR") {
      item = action.current.bpi.EUR;
    }

    return {
      current: action.current,
      item,
      loaded: true,
    };
  }

  if (action.type === "SET_LOADED") {
    return {
      ...state,
      loaded: action.val,
    };
  }
  return state;
}
