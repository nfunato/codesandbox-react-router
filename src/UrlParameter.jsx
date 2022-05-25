import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Here is UrlParameter Page</h1>
      <p>Parameter は {id}です</p>
    </div>
  );
};
