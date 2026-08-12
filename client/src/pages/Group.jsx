import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { search } from '../services/userservice';

const Group = () => {
  const [usersearch, setUsersearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (usersearch.trim() === "") {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      search(usersearch)
        .then(data => setResults(data))
        .catch(err => console.error(err));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [usersearch]);

  const handleSelect = (user) => {
    if (!selectedUsers.find(u => u._id === user._id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    setUsersearch("");
    setResults([]);
  };

  return (
    <div>
      <input
        type="text"
        value={usersearch}
        onChange={(e) => setUsersearch(e.target.value)}
        placeholder="Search users..."
      />

      {Array.isArray(results) && results.length > 0 && (
        <ul>
          {results.map(user => (
            <li key={user._id} onClick={() => handleSelect(user)}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}

      <div>
        <h4>Selected:</h4>
        {selectedUsers.map(u => (
          <span key={u._id}>{u.name} </span>
        ))}
      </div>
    </div>
  );
};

export default Group;