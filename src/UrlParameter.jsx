import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  //const location = useLocation();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  // ?name=hogehoge から hogehogeを取得できる
  // search は ?の後ろ全体
  return (
    <div>
      <h1>Here is UrlParameter Page</h1>
      <p>URL Parameter は {id}です</p>
      <p>Query Parameter は　{query.get("name")} です</p>
    </div>
  );
};
