import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function AdminContact() {
  const [contacts, setContacts] = useState(null);

  // =========================================
  // -- Toastify
  // =========================================
  const showErrorToast = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const showSuccessToast = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  // =========================================
  // -- Get All contacts
  // =========================================
  const getAllCotnact = async () => {
    const URL = "http://localhost:3000/api/admin/contacts";
    if (contacts) return;

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);
    console.log("response", response);

    if (response.ok) {
      setContacts(data.data);
      console.log(contacts);
    } else {
      console.log(data.message);
      showErrorToast(data.message);
    }
    try {
    } catch (error) {
      console.error(error);
      console.log("error while fetching all contacts");
      showErrorToast("Something went wrong");
    }
  };
  useEffect(() => getAllCotnact, []);

  // =========================================
  // -- Delete a contact
  // =========================================

  const deleteUser = async (id) => {
    const URL = `http://localhost:3000/api/admin/contacts/delete/${id}`;

    if (!id) return console.log("no Id found");

    try {
      const response = await fetch(URL, {
        method: "DELETE",
      });

      if (response.ok) {
        setContacts(contacts.filter((cntnct) => cntnct._id !== id));
        showSuccessToast("Deleted successfully");
      } else {
        console.log(await response.json());
        showErrorToast("Could not deleted contact");
      }
    } catch (error) {
      console.log("Error While Deleting the contact :", error);
      showErrorToast("Could not deleted contact");
    }
  };

  return (
    <div className="overflow-y-auto h-[calc(100vh-66px)]  w-full">
      <div className="flex h-full w-full flex-wrap p-4 justify-center gap-x-7 gap-y-4 ">
        {contacts ? (
          contacts.map((contact) => (
            <article className="rounded-xl w-[400px] border border-gray-600 bg-gray-700 p-4">
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-M0nVMzpCwEDhb-uCQe5T4GNTC5W97z-VWg&s"
                  className="size-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-medium text-white">
                    {contact.username.toUpperCase()}
                  </h3>

                  <ul className="-m-1 flex flex-wrap">
                    <li className="p-1 leading-none">
                      <span
                        href="#"
                        className="text-xs font-medium text-gray-300">
                        {contact.email}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div
                  href="#"
                  className="block h-full rounded-lg border border-gray-600 p-3 ">
                  <p className="mt-1 text-sm font-medium text-gray-300">
                    {contact.message}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => deleteUser(contact._id)}
                  className="text-[16px] py- px-4 rounded-lg border bg-gray-500 border-gray-700 hover:border-pink-600">
                  Delete
                </button>
              </div>
            </article>
          ))
        ) : (
          <div>
            <div className=" w-full h-full flex justify-center items-center ">
              <h3 className="text-3xl text-gray-300">
                No contacts availabale!
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
