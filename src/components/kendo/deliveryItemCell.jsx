import React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const DeliveryItemsCell = (props) => {
  const { dataItem, field } = props;
  const items = dataItem[field];

  return (
    <td>
      <DropDownList
        data={items.map((item) => item.itemName)}
        defaultValue={items.length > 0 ? items[0].itemName : ""}
        popupSettings={{ height: "auto" }}
      />
    </td>
  );
};

export default DeliveryItemsCell;
