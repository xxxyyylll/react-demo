import { JSX } from "react";

function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

function Item2({ name, isPacked }: { name: string; isPacked: boolean }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return null;
}

function Item3({ name, isPacked }: { name: string; isPacked: boolean }) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

function Item4({ name, isPacked }: { name: string; isPacked: boolean }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

function Item5({ name, isPacked }: { name: string; isPacked: boolean }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return <li className="item">{itemContent}</li>;
}

function Item6({ name, isPacked }: { name: string; isPacked: boolean }) {
  let itemContent: string | JSX.Element = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
      <br />
      <ul>
        <Item2 isPacked={true} name="宇航服" />
        <Item2 isPacked={true} name="带金箔的头盔" />
        <Item2 isPacked={false} name="Tam 的照片" />
      </ul>
      <br />
      <ul>
        <Item3 isPacked={true} name="宇航服" />
        <Item3 isPacked={true} name="带金箔的头盔" />
        <Item3 isPacked={false} name="Tam 的照片" />
      </ul>
      <br />
      <ul>
        <Item4 isPacked={true} name="宇航服" />
        <Item4 isPacked={true} name="带金箔的头盔" />
        <Item4 isPacked={false} name="Tam 的照片" />
      </ul>
      <br />
      <ul>
        <Item5 isPacked={true} name="宇航服" />
        <Item5 isPacked={true} name="带金箔的头盔" />
        <Item5 isPacked={false} name="Tam 的照片" />
      </ul>
      <br />
      <ul>
        <Item6 isPacked={true} name="宇航服" />
        <Item6 isPacked={true} name="带金箔的头盔" />
        <Item6 isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}
