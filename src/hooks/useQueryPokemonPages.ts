import { useQuery } from "@tanstack/react-query";
import { API } from "../config/api";
import { useState } from "react";

export function useQueryPokemonPage() {
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(30);
  const [totalPages, setTotalPages] = useState(0);

  async function getPokemonPages({ page = 1, limit = 30 }) {
    if (page <= 0) page = 1;
    const offset = (page - 1) * limit;
    const { data } = await API.get(`pokemon?limit=${limit}&offset=${offset}`);

    const pokemonPromise = data.results.map(async (pokemon:URL) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const pokemonData = await Promise.all(pokemonPromise);

    const totalPokemon = data.count;
    const totalPagesAPI = Math.ceil(totalPokemon / limit);
    if (totalPages != totalPagesAPI) setTotalPages(totalPagesAPI);

    return pokemonData as Pokemon[];
  }

  const query = useQuery({
    queryKey: [`getPokemonPage${page}-${limit}`, page, limit],
    queryFn: () => getPokemonPages({ page, limit }),
  });

  return {
    ...query,
    page,
    totalPages,
  };
}
