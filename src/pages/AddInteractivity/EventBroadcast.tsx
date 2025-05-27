function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("你点击了 toolbar ！");
      }}
    >
      <button onClick={() => alert("正在播放！")}>播放电影</button>
      <button onClick={() => alert("正在上传！")}>上传图片</button>
      <Button onClick={() => alert("正在上传！")}>666666</Button>
    </div>
  );
}
