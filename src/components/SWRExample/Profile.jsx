import axios from "axios";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(
    `https://localhost:3000/api/user/${id}`,
    fetcher,
    // { refreshInterval: 1000 } // 인터벌 시 갱신주기 (ms)
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Profile() {
  const { user, isLoading, isError } = useUser(123);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 데이터 렌더링
  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id="456" />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load (Avatar)</div>;
  if (isLoading) return <div>loading... (Avatar)</div>;

  // 데이터 렌더링
  return <div>hello {user.name}! (Avatar)</div>;
}
