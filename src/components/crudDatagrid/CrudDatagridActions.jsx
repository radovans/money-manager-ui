import React from "react";
import FlexBetween from "components/FlexBetween";

const CrudDatagridActions = (props) => {
  return (
    <FlexBetween gap="10px">
      {props.createAction}
      {props.updateAction}
      {props.deleteAction}
      {props.downloadAction}
    </FlexBetween>
  );
};

export default CrudDatagridActions;
