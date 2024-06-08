import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./users.css";

const Users = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(12);

  useEffect(() => {
    console.log("useEffect");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleLoadMore = () => {
    setShow((prev) => prev + 12);
  };

  return (
    <div className="users__container">
      <div className="users__cards">
        {users.slice(0, show).map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <button
        onClick={handleLoadMore}
        className="users__button"
        disabled={show >= 100}
      >
        Load More
      </button>
    </div>
  );
};

export default Users;
