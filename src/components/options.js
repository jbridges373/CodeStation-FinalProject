// list of object [{Event, Status}, {Event, Status}]

import { useState } from "react";

const Options = () => {
  const optionButtons = [
    { Status: "Going" },
    { Status: "Maybe" },
    { Status: "Not Going" },
  ];
  //   DRY

  const [status, setStatus] = useState([]);
  const handleClick = () => {
    console.log();
  };

  return (
    <div>
      <div>
        {optionButtons.map((optionButton) => {
          return (
            <button value={optionButton.Status} onClick={handleClick}>
              {optionButton.Status}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
