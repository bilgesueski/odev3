import Choice from "../atoms/Choice";


const Choices = (props) => {
 
  return (
    <div className="choices">
      <Choice className="choices1" onClick={props.onClick}>
        {props.choices && props.choices[0]}{" "}
      </Choice>
      <Choice className="choices2" onClick={props.onClick}>
        {props.choices && props.choices[1]}{" "}
      </Choice>
      <Choice className="choices3" onClick={props.onClick}>
        {props.choices && props.choices[2]}{" "}
      </Choice>
    </div>
  );
};

export default Choices;
