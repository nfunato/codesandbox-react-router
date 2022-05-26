import { Link } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <div>
      <h1>Here is Page1</h1>
      {/*　ページ遷移時にpathnameと一緒に状態情報を渡すことができる */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Detail A</Link>
      <br />
      {/*to に文字列を直接指定するのはオブジェクトを指定する場合の
         shorthandと考えることができる */}
      <Link to="/page1/detailB">Detail B</Link>
    </div>
  );
};
