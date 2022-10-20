function ButtonSmall({ content, classElement }) {
  return (
    <button className={`button button_small ${classElement}`}>{content}</button>
  );
}

export default ButtonSmall;
