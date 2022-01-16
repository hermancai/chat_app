import React from "react";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

function ChannelOption({ title, id, showSidebar, setShowSidebar }) {
  const dispatch = useDispatch();

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
      if (window.innerWidth < 1024) {
        setShowSidebar(!showSidebar);
      }
    }
  };

  return (
    <div onClick={selectChannel} className="sidebarOption">
      <span>#</span> {title}
    </div>
  );
}

export default ChannelOption;
