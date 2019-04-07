const INITIAL_STATE = {
  comments: ['First Comment', 'Second Comment']
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state.comments;
  }
}
