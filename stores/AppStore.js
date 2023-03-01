import Store from ".";

const initialState = {
  isMenuOpen: false,
	animatingProject: undefined,
	isAnimating: false,
};

function useAppStore() {
  const [state, setState] = Store.useStore();

  const setIsMenuOpen = (bool) => {
    setState((draft) => {
      draft.isMenuOpen = bool;
    });
  };
  
	const setAnimatingProject = (obj) => {
    setState((draft) => {
      draft.animatingProject = obj;
    });
  };

	const setIsAnimating = (bool) => {
    setState((draft) => {
      draft.isAnimating = bool;
    });
  };

  return [
    state,
    {
      setIsMenuOpen,
      setAnimatingProject,
      setIsAnimating,
    },
  ];
}

export { initialState, useAppStore };
