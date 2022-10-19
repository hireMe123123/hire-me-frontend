import { Icon } from "@iconify/react";

function ButtonOpinion({ icon, classElement }) {
  return (
    <button
      className={`position-absolute translate-middle rounded-circle d-flex justify-content-center align-items-center border-0 background-purple text-white ${classElement}`}
      style={{
        width: "50px",
        height: "50px",
        boxShadow: "0px 8px 16px rgba(204, 204, 204, 0.75)",
      }}
    >
      <Icon icon={icon} className="fs-1" />
    </button>
  );
}

export default ButtonOpinion;
