import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Here is Page2</h1>
      {/* In real life, 'to' parameter should be given by JS script */}
      {/* 例えば page2/xxx の数値を書き換えてみるとよい */}
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
