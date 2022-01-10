import React from "react";

const Errors = ({ errors }) => {
//   console.log(errors);
  return (
    <>
      {Object.keys(errors).map((key, error) => {
        return (
          <div key={key} className="d-flex flex-column text-danger">
            <ul>
              <li>
                {`${Object.keys(errors)[error]}: ${Object.values(errors)[error].message}`}
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Errors;
