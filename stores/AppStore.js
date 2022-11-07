import Store from ".";

const initialState = {
  isMenuOpen: false,
};

function useAppStore() {
  const [state, setState] = Store.useStore();

  const setIsMenuOpen = (bool) => {
    setState((draft) => {
      draft.isMenuOpen = bool;
    });
  };

  return [
    state,
    {
      setIsMenuOpen,
    },
  ];
}

export { initialState, useAppStore };
