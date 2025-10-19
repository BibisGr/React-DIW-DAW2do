type RecipeProps = {
  drinkers: number;
};
export function Recipe({ drinkers}: RecipeProps) {
  return (
    <ol>    
      <li>Hervir {drinkers} tazas de agua.</li>
      <li>Añadir {drinkers} cucharadas de té y {0.5 * drinkers} cucharada de especias.</li>
      <li>Añadir {0.5 * drinkers} tazas de leche hirviendo y azúcar a gusto.</li>
    </ol>
  );
}

export  function Recetas() {
  return (
    <section>
      <h1>Receta de té Chai especiado</h1>
      <h2>Para dos</h2>
      <Recipe drinkers={2} />
      <h2>Para una reunión</h2>
      <Recipe drinkers={4} />
    </section>
  );
}


type Guest = {
  guest: number;
};
function Cup({ guest }:Guest) {
  return <h2>Taza de té para invitado #{guest}</h2>;
}

export function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 5; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
