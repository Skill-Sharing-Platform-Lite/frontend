import React from "react";

const Users = () => {
  return (
    <div className="text-black bg-gray-200 py-5 px-3 rounded-sm">
      <h2 className="text-xl font-bold">Members</h2>
      <div className="mt-4 bg-white shadow rounded-lg">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-none">
            <thead>
              <tr className="border-none">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {new Array(5).fill().map((_, i) => (
                <tr key={i} className="">
                  <td className="px-4 py-2">Jhon Novel</td>
                  <td className="px-4 py-2">jhonnovel@gmail.com</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="px-3 py-1 text-white bg-blue-500 rounded">
                      View Profile
                    </button>

                    <button className="px-3 py-1 text-white bg-red-500 rounded">
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
