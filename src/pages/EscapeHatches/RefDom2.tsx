import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    if (firstCatRef.current != null)
      firstCatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }

  function handleScrollToSecondCat() {
    if (secondCatRef.current != null)
      secondCatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }

  function handleScrollToThirdCat() {
    if (thirdCatRef.current != null)
      thirdCatRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://pic.rmb.bdstatic.com/bjh/down/eiqVnM2-WGWq_WNPb34hCQc7da3f4256e3676fc60346c911ec951d.jpg"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://pic.rmb.bdstatic.com/bjh/down/eiqVnM2-WGWq_WNPb34hCQc7da3f4256e3676fc60346c911ec951d.jpg"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://pic.rmb.bdstatic.com/bjh/down/eiqVnM2-WGWq_WNPb34hCQc7da3f4256e3676fc60346c911ec951d.jpg"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
