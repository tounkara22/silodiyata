import styles from "./form.module.css";

const inputTagBuilder = (ctrl: any) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={ctrl.inputId}>{ctrl.inputLabel}</label>
      <input
        type={ctrl.inputType}
        id={ctrl.inputId}
        onChange={ctrl.inputChangeHandler}
        value={ctrl.inputValue}
      />
    </div>
  );
};

const Form = (props: any) => {
  const { formHeader, formControl, formActions } = props.formData;
  let formControlList: any = [];

  formControl.map((ctrl: any) => {
    if (ctrl.inputTag === "input") {
      formControlList.push(inputTagBuilder(ctrl));
    }
  });

  return (
    <form className={styles.form} onSubmit={formActions.submitHandler}>
      <div className={styles.formDetails}>
        {formHeader.title && <h2>{formHeader.title}</h2>}
        {formHeader.description && <p>{formHeader.description}</p>}
      </div>
      <div className={styles.formControlContainer}>
        {formControlList.map((ctrl: any) => ctrl)}
      </div>
      <div className={styles.formActions}>
        {formActions.submit && (
          <button className={styles.mainBtn}>{formActions.submit}</button>
        )}
      </div>
    </form>
  );
};

export default Form;
