function ButtonMedium({ content, classElement }) {
  return (
    <button className={`button button_medium ${classElement}`}>
      {content}
    </button>
  );
}

export default ButtonMedium;
