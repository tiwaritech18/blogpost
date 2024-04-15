const { getUser } = require("@/lib/data");

// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };
const PostUser = async ({userId}) => {

  // const user = await getData(userId)
  const user = await getUser(userId)
  return (
    <div>
      <p className="text-lg font-semibold text-white"></p>
      <p className="text-gray-400 text-sm">Author</p>
      <p className="text-gray-100 text-sm font-bold">{user.fullName}</p>
    </div>
  );
};

export default PostUser;
