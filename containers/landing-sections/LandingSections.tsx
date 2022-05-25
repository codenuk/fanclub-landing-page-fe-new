/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import React from "react";
import { ContentWrapper } from "../../components";
import styles from "./index.module.scss";
import { Carousel } from "react-responsive-carousel";
import { TeamSection, TokenSupply } from "..";
import { useAuth } from "../../hooks";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useRouter } from "next/router";

type LandingSectionsProps = {};

const LandingSections: React.FC<LandingSectionsProps> = () => {
  const { isAuth, isInit } = useAuth();
  const router = useRouter();

  return (
    <section className={styles.container}>
      <section className={styles.getCloserToYourSection}>
        <ContentWrapper>
          <div className={styles.row}>
            <div className={`${styles.column} ${styles.leftBox}`}>
              <div style={{ position: "relative" }}>
                <img src="/images/logo.png" className={styles.image} />
                <div className={styles.line}></div>
              </div>
              <h4>GET CLOSER TO YOUR</h4>
              <h4>FAVOURITE ARTISTS</h4>
              <h2>FREE 100 COIN</h2>
              {!isAuth && isInit && (
                <button
                  className={styles.customButton}
                  style={{ maxWidth: "415px" }}
                  type="button"
                  onClick={() => router.push("/sign-up")}
                >
                  REGISTER NOW!
                </button>
              )}
            </div>
            <div className={`${styles.column} ${styles.rightBox}`}>
              <Carousel
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
              >
                {getCloserToYourSection.map((item, index) => (
                  <div className={styles.wrapperCarousel} key={index}>
                    <h5>{item.name}</h5>
                    <img src={item.img} alt={item.name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className={styles.funToEarnSection}>
        <ContentWrapper>
          <div className={styles.column}>
            <div className={styles.title}>
              <img src="/images/logoBlack.png" className={styles.logo} />
              <h4>{`"fun to earn"`}</h4>
            </div>
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div className={styles.card}>
                <div
                  className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}
                >
                  <div
                    className={`${styles.column} ${styles.imageCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/funToEarnSection1.png"
                      alt={"/images/funToEarnSection1.png"}
                    />
                  </div>
                  <div
                    className={`${styles.column} ${styles.textCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/logoBlack.png"
                      className={styles.logo}
                      style={{ marginBottom: "20px" }}
                    />
                    <h5 style={{ textAlign: "center" }}>
                      Connect artist and fans with the
                    </h5>
                    <h5 style={{ textAlign: "center" }}>new concept</h5>
                    <button
                      className={styles.customButton}
                      type="button"
                      style={{ marginTop: "20px" }}
                    >
                      <h3>{'"fun to earn"'}</h3>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div
                  className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}
                >
                  <div
                    className={`${styles.column} ${styles.textCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/logoBlack.png"
                      className={styles.logo}
                      style={{ marginBottom: "10px" }}
                    />
                    <h5 style={{ marginBottom: "30px" }}>
                      <b>Fans Community</b>
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      Ultimately closed connection
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      with your artist in every moment.
                    </h5>
                  </div>
                  <div
                    className={`${styles.column} ${styles.imageCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/funToEarnSection2.png"
                      alt={"/images/funToEarnSection2.png"}
                    />
                  </div>
                </div>
              </div>
              <CardOnlyImage img="/images/funToEarnSection3.png" />
            </Carousel>

            <div className={styles.title}>
              <img src="/images/logoBlack.png" className={styles.logo} />
              <h4>{`"fun to earn"`}</h4>
            </div>
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div className={styles.card}>
                <div
                  className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}
                >
                  <div
                    className={`${styles.column} ${styles.textCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/logoBlack.png"
                      className={styles.logo}
                      style={{ marginBottom: "10px" }}
                    />
                    <h5 style={{ textAlign: "center" }}>
                      <b>Fun and Earn while you interact</b>
                    </h5>
                    <h5 style={{ marginBottom: "30px", textAlign: "center" }}>
                      <b>with your loved one.</b>
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      Activities for fans to support and
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      get closer to their favorite artists.
                    </h5>
                  </div>
                  <div
                    className={`${styles.column} ${styles.imageCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/funToEarnSection4.png"
                      alt={"/images/funToEarnSection4.png"}
                    />
                  </div>
                </div>
              </div>
              <CardOnlyImage img="/images/funToEarnSection5.png" />
              <CardOnlyImage img="/images/funToEarnSection6.png" />
            </Carousel>

            <div className={styles.title}>
              <img src="/images/logoBlack.png" className={styles.logo} />
              <h4>{`"fun to earn"`}</h4>
            </div>
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div className={styles.card}>
                <div
                  className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}
                >
                  <div
                    className={`${styles.column} ${styles.imageCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/funToEarnSection7.png"
                      alt={"/images/funToEarnSection7.png"}
                    />
                  </div>
                  <div
                    className={`${styles.column} ${styles.textCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/logoBlack.png"
                      className={styles.logo}
                      style={{ marginBottom: "20px" }}
                    />
                    <h5 style={{ marginBottom: "30px", textAlign: "center" }}>
                      <b>Collect artist's unique NFT.</b>
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      Enjoy your happy moment with
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      your favorite artist's NFT
                    </h5>
                  </div>
                </div>
              </div>
              <CardOnlyImage img="/images/funToEarnSection8.png" />
              <CardOnlyImage img="/images/funToEarnSection9.png" />
            </Carousel>

            <div className={styles.title}>
              <img src="/images/logoBlack.png" className={styles.logo} />
              <h4>{`"fun to earn"`}</h4>
            </div>
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div className={styles.card}>
                <div
                  className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}
                >
                  <div
                    className={`${styles.column} ${styles.textCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/logoBlack.png"
                      className={styles.logo}
                      style={{ marginBottom: "10px" }}
                    />
                    <h5 style={{ textAlign: "center" }}>
                      <b>Have a good time with</b>
                    </h5>
                    <h5 style={{ marginBottom: "30px", textAlign: "center" }}>
                      <b>your favorite artist.</b>
                    </h5>
                    <div>
                      <h5
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{ fontSize: "13px", margin: "0 20px 0 0" }}
                        >
                          ◯
                        </span>
                        Watch to earn
                      </h5>
                      <h5
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{ fontSize: "13px", margin: "0 20px 0 0" }}
                        >
                          ◯
                        </span>
                        Play to earn
                      </h5>
                      <h5
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{ fontSize: "13px", margin: "0 20px 0 0" }}
                        >
                          ◯
                        </span>
                        Create to earn
                      </h5>
                    </div>
                  </div>
                  <div
                    className={`${styles.column} ${styles.imageCarouselFuntoEarn}`}
                  >
                    <img
                      src="/images/funToEarnSection10.png"
                      alt={"/images/funToEarnSection10.png"}
                    />
                  </div>
                </div>
              </div>
              <CardOnlyImage img="/images/funToEarnSection11.png" />
              <CardOnlyImage img="/images/funToEarnSection12.png" />
            </Carousel>
          </div>
        </ContentWrapper>
      </section>
      <section className={styles.fandomSection}>
        <ContentWrapper>
          <div className={styles.column}>
            <h2>Fandom</h2>
            <div
              className={styles.row}
              style={{ justifyContent: "center", margin: "20px 0 0" }}
            >
              <div
                className={styles.groupText}
                style={{ justifyContent: "center" }}
              >
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <div>
                    <h5>
                      Ultimately closed connection with your artist in every
                      moment.
                    </h5>
                  </div>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <div>
                    <h5>
                      Fun time with your favorite artist's activity and campaign
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.groupImage}>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  <img
                    alt="/images/fandom1.png"
                    src="/images/fandom1.png"
                    className={styles.imageFandom}
                  />
                  <img
                    alt="/images/fandom2.png"
                    src="/images/fandom2.png"
                    className={styles.imageFandom}
                  />
                </Carousel>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ justifyContent: "center", margin: "40px 0 0" }}
            >
              <div className={styles.groupText}>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>Collect our unique NFT Gamification.</h5>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <div>
                    <h5>
                      First-tier benefits include front-row events, free
                      tickets, private meetings, secret content, and so on.
                    </h5>
                  </div>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <div>
                    <h5>
                      Earn token by using by using the 'watch to earn' and
                      'share to earn' features.
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className={styles.groupImage}
                style={{ justifyContent: "center" }}
              >
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  <img
                    alt="/images/fandom3.png"
                    src="/images/fandom3.png"
                    className={styles.imageFandom}
                  />
                  <img
                    alt="/images/fandom4.png"
                    src="/images/fandom4.png"
                    className={styles.imageFandom}
                  />
                </Carousel>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ justifyContent: "center", margin: "40px 0 0" }}
            >
              <div className={styles.groupText}>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <div>
                    <h5>
                      Find and purchase rare items by your artist (single piece
                      of the world)
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.groupImage}>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  <img
                    alt="/images/fandom5.png"
                    src="/images/fandom5.png"
                    className={styles.imageFandom}
                  />
                  <img
                    alt="/images/fandom6.png"
                    src="/images/fandom6.png"
                    className={styles.imageFandom}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className={styles.artistsSection}>
        <ContentWrapper>
          <div className={styles.colunm}>
            <h2>Artists - Idol - Superstar</h2>

            <div
              className={styles.row}
              style={{ justifyContent: "center", margin: "20px 0 0" }}
            >
              <div className={styles.groupImage}>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  <div className={styles.card}>
                    <img
                      src={"/images/artistsSection1.png"}
                      alt={"/images/artistsSection1.png"}
                      className={styles.fitImage}
                    />
                  </div>
                  <div className={styles.card}>
                    <img
                      src={"/images/artistsSection2.png"}
                      alt={"/images/artistsSection2.png"}
                      className={styles.fitImage}
                    />
                  </div>
                </Carousel>
              </div>
              <div className={styles.groupText}>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>
                    Get closer to your fans and improve communication. Pay
                    attention to your lover's wishes.
                  </h5>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>
                    Make use of the influence of your fan base. Know your fan's
                    rank and level; who is your true and supportive fan?
                  </h5>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>Creating a strong and long-lasting fan base.</h5>
                </div>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ justifyContent: "center", margin: "40px 0 0" }}
            >
              <div className={styles.groupImage}>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showThumbs={false}
                >
                  <div className={styles.card}>
                    <img
                      src={"/images/artistsSection3.png"}
                      alt={"/images/artistsSection3.png"}
                      className={styles.fitImage}
                    />
                  </div>
                  <div className={styles.card}>
                    <img
                      src={"/images/artistsSection4.png"}
                      alt={"/images/artistsSection4.png"}
                      className={styles.fitImage}
                    />
                  </div>
                </Carousel>
              </div>
              <div
                className={styles.groupText}
                style={{ justifyContent: "center" }}
              >
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>
                    Earn unseen revenue forever with our NFT Gamification.
                  </h5>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>
                    Peronalize NFT to fit your lifestyle and preferences (not
                    like traditional NFT)
                  </h5>
                </div>
                <div className={styles.wrapperText}>
                  <span>◯</span>
                  <h5>Usege-base billing models for a copyright license</h5>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className={styles.decentralizedSection}>
        <ContentWrapper>
          <div className={styles.column}>
            <h1>Decentralized and</h1>
            <h2>secured platform</h2>
            <h5 style={{ textAlign: "center" }}>
              <strong>
              Decentralized Peer-to-Peer entertainment and gamification platform{" "}
              </strong>
              providing digital content, digitized activities between various artists and fans with secured digital assets via blockchain technology
            </h5>
            <Carousel
              showArrows={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div style={{ display: "flex" }}>
                <img
                  alt="/images/decentralizedSection1.png"
                  src="/images/decentralizedSection1.png"
                  className={styles.imageDecentralized}
                />
              </div>
              <div style={{ display: "flex" }}>
                <img
                  alt="/images/decentralizedSection2.png"
                  src="/images/decentralizedSection2.png"
                  className={styles.imageDecentralized}
                />
              </div>
              <div style={{ display: "flex" }}>
                <img
                  alt="/images/decentralizedSection3.png"
                  src="/images/decentralizedSection3.png"
                  className={styles.imageDecentralized}
                />
              </div>
            </Carousel>
          </div>
        </ContentWrapper>
      </section>
      <section className={styles.totalSupplySection}>
        <ContentWrapper>
          <div className={styles.column}>
            <h2>Total Supply</h2>
            <h3>Tokennomics</h3>
          </div>
          <TokenSupply />
        </ContentWrapper>
      </section>
      <section className={styles.teamSection}>
        <ContentWrapper>
          <div className={styles.column}>
            <h2>Team</h2>
          </div>
          <TeamSection />
        </ContentWrapper>
      </section>
      <section className={styles.roadmapSection}>
        <ContentWrapper>
          <div className={styles.column}>
            <img
              src="/images/road-map.png"
              className={styles.imageRoadMap}
              alt="roadmap-banner"
            />
          </div>
        </ContentWrapper>
      </section>
    </section>
  );
};

LandingSections.defaultProps = {};

export default LandingSections;

const getCloserToYourSection = [
  {
    name: "Fans community",
    img: "/images/getCloserToYourSection1.png",
  },
  {
    name: "Collect artist's unique NFT",
    img: "/images/getCloserToYourSection2.png",
  },
];

const CardOnlyImage = ({ img }: any) => (
  <div className={styles.card}>
    <div className={`${styles.wrapperCarouselFuntoEarn} ${styles.row}`}>
      <img src={img} alt={img} className={styles.fitImage} />
    </div>
  </div>
);
