import React from "react";
import { Button } from "@mantine/core";
const CreateButton = ({ title, onClick, color, style, disabled }) => {
  return (
    <Button
      style={style}
      disabled={disabled}
      onClick={onClick}
      variant="light"
      color={color}
    >
      {title}
    </Button>
  );
};

export default CreateButton;
