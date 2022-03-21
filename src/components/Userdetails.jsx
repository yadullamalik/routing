import { useParams } from "react-router-dom";

export const Userdetails = () => {
  const { userid } = useParams();
  return <div>Userdetails: {userid}</div>;
};
