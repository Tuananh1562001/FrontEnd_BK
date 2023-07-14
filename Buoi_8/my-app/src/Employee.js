function Employee(props) {
  const name = props.name;
  const employee = props.employee;
  let styleName = {};
  if (name === "Tuấn Anh") {
    styleName = { color: "red" };
  } else {
    styleName = { color: "green" };
  }
  return (
    <div>
      <p style={styleName}>My name is {name}</p>
      <p>My employee is {employee}</p>
    </div>
  );
}
export default Employee;
