import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim.length === 5;

const Checkout = (props) => {
  const [formInputsValidty, setFormInputsValidty] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCitytIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputsValidty({
      name: enteredCitytIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCitytIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCitytIsValid &&
      enteredPostalIsValid;

    // if (!formIsValid) {
    //   // Submit the cart data
    //   return;
    // }
    // console.log('jo')
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidty.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidty.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidty.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputsValidty.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidty.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputsValidty.postal && <p>Please enter a valid postal code</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidty.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputsValidty.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
