import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPages";
import { Container } from "./style";

export function App() {
  const { data } = useQueryPokemonPage();
  return (
    <Container>
      <h1>App</h1>
      <p>{data}</p>
    </Container>
  );
}
