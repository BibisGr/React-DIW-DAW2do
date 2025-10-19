type Person = {
  nombre: string;
  idUrl: string;
};

type AvatarProps = {
  person: Person;
  size: number;
};

export function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={person.idUrl}
      alt={person.nombre}
      width={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      person={{ nombre: 'Lin Lanying', idUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
      size={200}
    />
  );
}