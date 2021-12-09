import { Api } from "./../service/service";

export type TPeopleResponse = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

const BASE_URL = "https://swapi.dev/api";

const itemsControllerInternal = () => {
  const getAllPeopleRequest = () =>
    Api.get<TPeopleResponse[]>(BASE_URL + "/people");

  return { getAllPeopleRequest };
};

export const itemsController = itemsControllerInternal();
