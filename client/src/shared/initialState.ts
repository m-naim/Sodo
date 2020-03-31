const initialState = {
  lists: [
    { id: 1, title: 'Bienvenu' },

  ],
  tasks: [
    {
      listID: 1, id: 1, title: 'Cette liste est crée automatiquement vour toi', done: false,
    },

  ],
  model: {
    open: false,
  },
  selectedList: 1,
};

export default initialState;
