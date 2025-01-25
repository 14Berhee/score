import useSWR from "swr";
const url = "https://jsonplaceholder.typicode.com/users";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>Tur huleenuu!!!</p>;
  }
  if (error) {
    return <p>Uuchlaarai aldaa garlaa dahin oroldon uu!!!</p>;
  }

  return (
    <div>
      {data.map((user) => {
        return <User key={user.id} name={user.name} email={user.email} />;
      })}
    </div>
  );
};

export default Page;

const User = (props) => {
  const { name, email } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
