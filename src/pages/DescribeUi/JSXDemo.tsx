function JSXDemo1() {
  return (
    <div>
      <h1>海蒂·拉玛的待办事项</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>...</ul>
    </div>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
}

function JSXDemo2() {
  const src = "https://i.imgur.com/yXOvdOSs.jpg";
  const alt = "Hedy Lamarr";
  const today = new Date();
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div>
      <h1>海蒂·拉玛的待办事项</h1>
      <img src={src} alt={alt} className="photo" />
      <ul
        style={{
          backgroundColor: "pink",
          color: "white",
        }}
      >
        <li>{formatDate(today)}</li>
        <li>{person.name}</li>
        <li>{person.theme.color}</li>
      </ul>
    </div>
  );
}

export default function JSXDemo() {
  return (
    <>
      <JSXDemo1 />
      <JSXDemo2 />
    </>
  );
}
