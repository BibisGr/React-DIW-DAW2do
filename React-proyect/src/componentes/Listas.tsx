// export function Listas() {
//   const people = [
//     "Creola Katherine Johnson: matemática",
//     "Mario José Molina-Pasquel Henríquez: químico",
//     "Mohammad Abdus Salam: físico",
//     "Percy Lavon Julian: químico",
//     "Subrahmanyan Chandrasekhar: astrofísico",
//   ];
// const listItems = people.map(person => <li>{person}</li>);
//   return (
//     <>
//     <h2>Componente Listas</h2>
//     <ul>{listItems}</ul>
//     </>
//   )

// }

// mapeo por profesion
export function Listas() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "matemática",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "químico",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "físico",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "químico",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrofísico",
    },
  ];

  const chemists = people.filter((person) => person.profession === "químico");
  const listItems = chemists.map((person) => (
    // Mantener los elementos de una lista en orden con key 
    <li key={person.id}> 
      <p>
        <b>{person.name}:</b>
        conocido/a por ser {person.profession}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
