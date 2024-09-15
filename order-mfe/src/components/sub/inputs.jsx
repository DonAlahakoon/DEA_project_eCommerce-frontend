/**
 * Text box component which uses to get a text component with some added classes and with the label.
 * Owner: Demesh Fernando
 * Created Date: 31 August 2024
 * Last updated Date: 01 September 2024
 * @component
 * @returns The Textbox with the provided attributes
 * @example
 * // Example usage:
 * const <TextBox
              id="name"
              labelName="Your Name"
              type="text"
              name="name"
              onChange={setValues}
            />;
 * return the Textbox with the following added properties.
 */
function TextBox(props) {
  const changingTextListener = (e) => {
    props.onChange(props.name, e.target.value);
  };

  const getTextType = () => {
    switch (props.type) {
      case "text":
        return "text";
      case "email":
        return "email";
      case "password":
        return "password";
      default:
        return "text";
    }
  };
  return (
    <>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        className="account-creation-navbar-input"
        type={getTextType()}
        name={props.name}
        id={props.id}
        onChange={changingTextListener}
      />
    </>
  );
}

function TextBoxWithoutLabel(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      className={props.class}
      onChange={(e) => {
        props.getChange(props.name, e.target.value);
      }}
    />
  );
}

/**
 * Button component which uses to get specifically for the account creation nav bar.
 * Owner: Demesh Fernando
 * Created Date: 31 August 2024
 * Last updated Date: 01 September 2024
 * @component
 * @returns The Button with the provided attributes
 * @example
 * // Example usage:
 * const <Button name="Continue" classEditors="continue" />;
 * return the Button with the following added properties.
 */
function Button(props) {
  return (
    <button className={props.classEditors} onClick={() => props.Trigger()}>
      {props.name}
    </button>
  );
}

export { TextBox, Button, TextBoxWithoutLabel };
