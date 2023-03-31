import classes from "./SectionWrapper.module.css";
function SectionWrapper({ id, className, children }) {
  return (
    <section className={`${classes.sectionWrapper} ${className}`} id={id}>
      {children}
    </section>
  );
}
export default SectionWrapper;
