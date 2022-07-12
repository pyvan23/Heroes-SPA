import { heroes } from "../data/heroe";

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id); //si no lo encuentra devuel undefined
};
