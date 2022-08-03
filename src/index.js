import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const facultydetails = [
  {
    img: "https://darshan.ac.in/U01/Faculty-Photo/5---21-06-2021-10-50-15.jpg",
    name: "Dr. Gopi Sanghani New",
    post: "Dean - School of Computer Science",
    dept: "CE",
    Experience: "22+ years"
  },
  {
    img:
      "https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",
    name: "Dr Nilesh Gambhava",
    post: "Professor",
    dept: "CE",
    Experience: "19+ years"
  },
  {
    img:
      "https://darshan.ac.in/U01/Faculty-Photo/02CEPUJ_19042019_063653AM.jpg",
    name: "Dr Pradhyumansinh Jadeja",
    post: "Assosciate Professor",
    dept: "CE",
    Experience: "17+ years"
  },
  {
    img:
      "https://darshan.ac.in/U01/Faculty-Photo/CEMDT01_25042019_022618PM.jpg",
    name: "Prof. Maulik Trivedi ",
    post: "Assistant Professor",
    dept: "CE",
    Experience: "14+ years"
  }
];
root.render(
  // <StrictMode>
  <>
    {/* <table >
        <tr> */}
    {facultydetails.map((fac, index) => {
      return (
        <td>
          <img
            src={fac.img}
            style={{ height: 100 + "px", width: 100 + "px" }}
          />
          <br />
          {fac.name}
          <br />
          {fac.post}
          <br />
          {fac.dept}
          <br />
          {fac.Experience}
        </td>
      );
      // <div id={index} class='card'><img src={fac.img}><div class='details'><h2>{fac.name}</h2><h4 style={{color:blue}}>{fac.post}</h4></div></div>
    })}
    {/* </tr>
      </table> */}
  </>
  // </StrictMode>
);
