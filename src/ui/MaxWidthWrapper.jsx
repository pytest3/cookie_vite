import classes from "./MaxWidthWrapper.module.css";

function MaxWidthWrapper(props) {
  return (
    <div className={`${classes.wrapper} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default MaxWidthWrapper;
