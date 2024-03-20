import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPages";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryPokemonPage();
  return (
    <Container>
      <h1>Home</h1>
      <p>{data}</p>
    </Container>
  );
}
