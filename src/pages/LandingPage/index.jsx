import { Container } from "react-bootstrap";
import bgHero from "../../assets/img/bg-hero.png";
import ButtonMedium from "../../components/Buttons/ButtonMedium";
import bgSection1 from "../../assets/img/bg-section1.png";
import bgSection2 from "../../assets/img/bg-section2.png";
import { Icon } from "@iconify/react";
import CardOpinion from "../../components/CardOpinion";
import imgOpinion1 from "../../assets/img/img-opinion1.png";
import imgOpinion2 from "../../assets/img/img-opinion2.png";
import imgOpinion3 from "../../assets/img/img-opinion3.png";
import ButtonOpinion from "../../components/Buttons/ButtonOpinion";
import NavbarHeader from "../../components/Navbar";
import Footer from "../../components/Footer";

function LandingPage() {
  const isLogin = localStorage.getItem("token");
  return (
    <>
      <header>
        <NavbarHeader isLogin={isLogin} />
      </header>

      <main className="mt-5 main-landing">
        <Container>
          <section className="row align-items-center">
            <div className="col-12 col-xxl-5 order-2 order-xxl-1">
              <h1 className="fs-44px lh-base fw-semibold color-bold">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h1>
              <p className="fs-18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <ButtonMedium
                content={"Mulai Dari Sekarang"}
                classElement={`background-purple text-white fw-bold mt-3`}
              />
            </div>
            <div className="col-12 col-xxl-7 order-1 order-xxl-2 text-center">
              <img src={bgHero} height={580} alt="" className="img-fluid" />
            </div>
          </section>

          <section className="row" style={{ marginTop: "115px" }}>
            <div className="col-12 col-xxl-6">
              <img src={bgSection1} height={580} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-xxl-6 mt-5">
              <h2 className="fs-1 lh-base mb-4 fw-semibold color-bold">
                Kenapa harus mencari talent <br /> di peworld
              </h2>

              <div>
                <div className="d-flex align-items-start mb-2">
                  <Icon
                    icon={"akar-icons:circle-check-fill"}
                    className={`fs-3 color-purple me-4`}
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="d-flex align-items-start mb-2">
                  <Icon
                    icon={"akar-icons:circle-check-fill"}
                    className={`fs-3 color-purple me-4`}
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="d-flex align-items-start mb-2">
                  <Icon
                    icon={"akar-icons:circle-check-fill"}
                    className={`fs-3 color-purple me-4`}
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="d-flex align-items-start mb-2">
                  <Icon
                    icon={"akar-icons:circle-check-fill"}
                    className={`fs-3 color-purple me-4`}
                  />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="row" style={{ marginTop: "150px" }}>
            <div
              className="col-12 col-xxl-6 order-2 order-xxl-1 mt-5 section2"
              // style={{ paddingLeft: "150px" }}
            >
              <h2 className="fs-1 lh-base mb-4 fw-semibold color-bold">
                Skill Talent
              </h2>
              <p className="fs-18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <div className="row mt-4">
                <div className="col-5">
                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>Java</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>Kotlin</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>PHP</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>JavaScript</p>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>Golang</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>C++</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>Ruby</p>
                  </div>

                  <div className="d-flex align-items-start mb-2">
                    <Icon
                      icon={"akar-icons:circle-check-fill"}
                      className={`fs-3 color-yellow me-4`}
                    />
                    <p>10+ Bahasa lainnya</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-6 order-1 order-xxl-2">
              <img src={bgSection2} className={`img-fluid`} alt="" />
            </div>
          </section>

          <section style={{ marginTop: "150px" }}>
            <h2 className="fs-1 lh-base mb-4 fw-semibold color-bold text-center">
              Their opinion about peworld
            </h2>

            <div
              className="d-flex flex-column flex-xxl-row justify-content-center"
              style={{ marginTop: "70px" }}
            >
              <div className="d-flex flex-column flex-xxl-row align-items-center gap-4 position-relative">
                <ButtonOpinion
                  icon={"dashicons:arrow-left-alt2"}
                  classElement={"start-0 top-50 button-opinion"}
                />
                <ButtonOpinion
                  icon={"dashicons:arrow-right-alt2"}
                  classElement={"start-100 top-50 button-opinion"}
                />
                <CardOpinion
                  img={imgOpinion1}
                  name={"Harry Styles"}
                  profession={"Web Developer"}
                  desc={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
                  }
                />
                <CardOpinion
                  img={imgOpinion2}
                  name={"Niall Horan"}
                  profession={"Web Developer"}
                  desc={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                  }
                />
                <CardOpinion
                  img={imgOpinion3}
                  name={"Louis Tomlinson"}
                  profession={"Web Developer"}
                  desc={"Lorem ipsum dolor sit amet, consectetur "}
                />
              </div>
            </div>
          </section>
          <section style={{ marginTop: "150px" }}>
            <div className="last-section background-purple m-auto row align-items-center px-5">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="fs-1 lh-base mb-4 fw-semibold color-bold text-white">
                  Lorem ipsum <br /> dolor sit amet
                </h2>

                <ButtonMedium
                  content={"Mulai Dari Sekarang"}
                  classElement={`bg-white color-purple fw-bold mt-3`}
                />
              </div>
            </div>
          </section>
          <section style={{ marginTop: "150px" }}></section>
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
