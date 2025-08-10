import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../utilities/firebase";
import { addUser, removeUser } from "../../utilities/userSlice";
import { LOGO } from "../../utilities/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full px-8 py-2 absolute bg-gradient-to-tl from to-black z-10 flex justify-between align-middle">
      <img src={LOGO} alt="Logo" className="w-44"></img>
      {user && (
        <div className="flex justify-center items-center">
          <img
            alt="user-icon"
            src={user?.photoURL}
            className="rounded-full w-12"
          ></img>
          <button
            className="bg-red-700 text-lg text-white px-4 m-2 rounded-lg cursor-pointer w-28 h-12"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
