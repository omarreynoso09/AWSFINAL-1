import * as React from "react";
import Stack from "@mui/material/Stack";

export default function Error404() {
  return (
    <>
      <br></br>
      <h1> 404 page</h1>
      <h3> This page could not be found click the next link</h3>
      <br></br>
      <Stack direction="row" spacing={2}></Stack>
    </>
  );
}

// export default function Error404() {
//   return (
//     <div id="wrapper">

//       <button className="button1" link to="/">
//         {" "}
//         Go Back Home
//       </button>
//     </div>
//   );
// }
