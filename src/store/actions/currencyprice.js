export function showItem(item) {
  return {
    type: "SHOW_ITEM_IN_PREVIEW",
    item,
  };
}

export function onLoad(current) {
  return {
    type: "ON_LOAD",
    current,
  };
}

export function setLoaded(val) {
  return {
    type: "SET_LOADED",
    val,
  };
}
