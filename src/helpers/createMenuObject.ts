type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObject = (active: MenuOptions) => {
  let returnObject = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  };

  if (active !== '') {
    returnObject[active] = true;
  }

  return returnObject;
};
