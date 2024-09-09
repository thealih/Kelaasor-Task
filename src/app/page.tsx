// pages/index.tsx
import UserList from "../components/UserList";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
}

interface HomeProps {
  users: User[];
}

const Home: React.FC<HomeProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div className="min-h-screen bg-gray-100 py-1">
      <UserList users={users} />
    </div>
  );
};

export default Home;
