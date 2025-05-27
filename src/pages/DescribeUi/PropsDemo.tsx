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

function Profile(props: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

export default function PropsDemo() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Profile
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
    </div>
  );
}
