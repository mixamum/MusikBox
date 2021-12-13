import { Spinner } from "react-bootstrap";

export default function Loading(props) {
  // if (props.load) {
  return (
    <Spinner className="loadingspin" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  // } else {
  //   return null;
  // }
}
