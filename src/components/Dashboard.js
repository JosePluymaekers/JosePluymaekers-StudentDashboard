import React from "react";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const options = props.students.map((student) => {
    return (
      <option key={student.id} value={student.firstName}>
        {student.firstName}
      </option>
    );
  });

  const studentSelectHandleChange = (event) => {
    props.history.push(`${event.target.value}`);
  };

  const buttonHandleChange = (event) => {
    props.history.push("/Container");
  };

  return (
    <div className="filter-div" style={{ position: "relative", zIndex: "2" }}>
      <button id="selectAllStudents" onClick={buttonHandleChange}>
        See all results
      </button>
      <label>
        <select
          name="select-student"
          id="selectStudent"
          onChange={studentSelectHandleChange}
        >
          <option value="container">Select single student</option>
          {options}
        </select>
      </label>
    </div>
  );
}

export default withRouter(Dashboard);
