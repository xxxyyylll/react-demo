import { JSX } from "react";

const AlertButton = ({
  message,
  children,
}: {
  message: string;
  children: string;
}) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

function Button({ onClick, children }: { onClick: () => void; children: any }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName = "" }) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}！`);
  }

  return <Button onClick={handlePlayClick}>播放 "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("正在上传！")}>上传图片</Button>;
}

function Button2({
  onSmash,
  children,
}: {
  onSmash: () => void;
  children: any;
}) {
  return <button onClick={onSmash}>{children}</button>;
}

function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}) {
  return (
    <div>
      <Button3 onClick={onPlayMovie}>播放电影</Button3>
      <Button3 onClick={onUploadImage}>上传图片</Button3>
    </div>
  );
}

function Button3({
  onClick,
  children,
}: {
  onClick: () => void;
  children: any;
}) {
  return <button onClick={onClick}>{children}</button>;
}

export default function RespondEvent() {
  function onClick() {
    alert("clicked!");
  }

  return (
    <>
      <button onClick={onClick}>绑定事件</button>
      <br />
      <button
        onClick={function handleClick() {
          alert("你点击了我！");
        }}
      >
        222
      </button>
      <br />
      <button
        onClick={() => {
          alert("你点击了我！");
        }}
      >
        333
      </button>
      <br />
      <AlertButton message="playing!">playing movies</AlertButton>
      <br />
      <AlertButton message="uploading!">upload image</AlertButton>
      <br />
      <PlayButton movieName="test" />
      <br />
      <UploadButton />
      <br />
      <Button2 onSmash={() => alert("uploading!")}>666666</Button2>
      <br />
      <Toolbar
        onPlayMovie={() => alert("正在播放！")}
        onUploadImage={() => alert("正在上传！")}
      />
    </>
  );
}
