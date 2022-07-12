import { heroes } from "../data/heroe";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

   if (!validPublishers.includes(publisher)) {
     throw new Error(`${publisher} does not exist`);
  }

  return  heroes.filter(heroe => heroe.publisher === publisher);
};
