type ItemProps = {
  name: string;
  isPacked: boolean;
};

function Item({ name, isPacked }: ItemProps) {
  //Condicion simple
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   }
  //   return <li className="item">{name}</li>;

  // Devolución de nada con null
  // if (isPacked) {
  // return null;
  // }
  // return <li className="item">{name}</li>;

  //   Operador condicional (ternario) (? :)
  //   return <li className="item">{isPacked ? name + " ✅" : name}</li>;

  //Operador lógico AND (&&)
  //   return (
  //     <li className="item">
  //       {name} {isPacked && "✅"}
  //     </li>
  //   );

//   Asignación condicional de JSX a una variable solo se ven las que cumplan con la condicional
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = name + " ✅";
//     return <li className="item">{itemContent}</li>;
//   }

//utiliza react.reactNode
let itemContent:React.ReactNode = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name + " ✅"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
  
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
