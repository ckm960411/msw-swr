import { useIsFetching } from "react-query";

export default function GlobalLoader() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div style={{ color: 'red', fontSize: 30 }}>Queries are fetching in the background...</div>
  ) : null;
}
