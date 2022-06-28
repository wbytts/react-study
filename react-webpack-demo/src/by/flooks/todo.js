import create from 'flooks';

export default create(({ get, set }) => ({
  todos: [],

  add(item) {
    console.log(item);
    const { todos } = get();
    set({todos: [...todos, item]})
  },

}));

