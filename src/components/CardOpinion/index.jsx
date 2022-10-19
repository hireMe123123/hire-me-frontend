function CardOpinion({ img, name, profession, desc }) {
  return (
    <div className="card-opinion">
      <div className="img-card rounded-circle m-auto">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <h3 className="fs-3 fw-semibold color-bold mt-4">{name}</h3>
      <p className="fs-18px color-gray">{profession}</p>
      <p className="fs-18px m-auto" style={{ width: "187px" }}>
        {desc}
      </p>
    </div>
  );
}

export default CardOpinion;
