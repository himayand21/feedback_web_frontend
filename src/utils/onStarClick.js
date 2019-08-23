const onStarClick = (state, nextValue, name) => {
  console.log(nextValue);
  let store = { ...state };
  let rating = { ...state.rating };
  rating[name] = nextValue;
  store = {
    ...store,
    rating
  };
  return store;
};
export default onStarClick;
