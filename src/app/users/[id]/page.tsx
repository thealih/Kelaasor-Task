interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
  website: string;
  username: string;
}

const UserPanel = async ({ params }: { params: { id: number } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user: User = await res.json();
  console.log(user);

  return (
    <div className="lg:mt-5 lg:mx-10">
      <div className="flex items-center justify-center font-bold text-4xl bg-blue-950  lg:rounded-md py-6 text-white ">
        {user.name}
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10">
          <li className="flex justify-center">Username: {user.username}</li>
          <li className="flex justify-center">Email: {user.email}</li>
          <li className="flex justify-center">
            Address:{user.address.city}, {user.address.street}
          </li>
          <li className="flex justify-center">Phone: {user.phone}</li>
          <li className="flex justify-center">Website: {user.website}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserPanel;
