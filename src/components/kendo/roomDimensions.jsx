import React from "react";

const RoomDimensions = (props) => {
  const { dataItem, field } = props;

  if (!dataItem || !dataItem[field]) {
    return <td>Invalid data</td>;
  }

  const roomDimensions = dataItem[field];

  return (
    <td>
      <div>
        {roomDimensions.roomName}: {roomDimensions.width} x{" "}
        {roomDimensions.length}
      </div>
    </td>
  );
};

export default RoomDimensions;
