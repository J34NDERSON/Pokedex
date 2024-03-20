import { useQuery } from "@tanstack/react-query";

export function useQueryPokemonPage() {
  function getPokemonPages() {
    return "Get Pokemon Page";
  }

  const query = useQuery({
    queryKey: [`getPokemonPage`],
    queryFn: () => getPokemonPages(),
  });

  return {
    ...query,
  };
}
