import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/User";

const initaialForm = {
  id: null,
  name: "",
  username: "",
};
const Redux2 = () => {
  const userList = useSelector((state) => state.users.value);
  const [form, setform] = useState(initaialForm);
  const [formUpdate, setFormUpdate] = useState(initaialForm);

  const onChange = ({ target: { name, value } }) => {
    setform((prev) => ({ ...prev, [name]: value }));
  };
  const onChangeUpdate = ({ target: { name, value } }) => {
    setFormUpdate((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();

  const addUserDispatch = () => {
    dispatch(
      addUser({
        ...form,
        id: userList.length > 0?userList[userList.length - 1].id + 1:1,
      })
    );
  };
  return (
    <div>
      <div className="addUser">
        <input
          type="text"
          placeholder="Name......"
          name="name"
          onChange={onChange}
          value={form.name}
        />
        <input
          type="text"
          placeholder="username......"
          name="username"
          onChange={onChange}
          value={form.username}
        />
        <button onClick={addUserDispatch}>Add user</button>
      </div>
      <div className="displayUsers">
        {userList?.map((i) => (
          <div key={i.id}>
            <h4>{i.id} {i.name}</h4>
            <h4> {i.username}</h4>
            <input
              type="text"
              placeholder="Name......"
              name="name"
              onChange={onChangeUpdate}
              // value={formUpdate.name}
            />
            <input
              type="text"
              placeholder="username......"
              name="username"
              onChange={onChangeUpdate}
              // value={formUpdate.username}
            />
            <button onClick={() => dispatch(deleteUser({ id: i.id }))}>
              delete user
            </button>{" "}
            <button
              onClick={() => {
                dispatch(
                  updateUser({
                    id: i.id,
                    name: formUpdate.name,
                    username: formUpdate.username,
                  })
                );
                // setFormUpdate(initaialForm)
              }}
            >
              update user
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Redux2;
