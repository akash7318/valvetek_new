import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBtn = () => {
    
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
    }

  return (
    <Switch onChange={handleChange} checked={!checked} />
  )
}

export default SwitchBtn
