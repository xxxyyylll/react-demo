import { JSX } from "react";

function getImageUrl(person: { imageId: string }, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar({
  person,
  size,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt="Lin Lanying"
      width={size}
      height={size}
    />
  );
}

function Card({ children }: { children: JSX.Element }) {
  return <div className="card">{children}</div>;
}

export default function PropsChildrenDemo() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
