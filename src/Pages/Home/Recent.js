import React from "react";
import img1 from "../images/post01.png";

const Recent = () => {
  return (
    <div className="recent">
      <h4>সাম্প্রতিক পোস্ট </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">
          {/* post 0৩ */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h3 className="post-title">ভূমিকা </h3>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৩</h5> <hr />
                <div className="category">
                  <p>বিবিধ </p>
                  <p>১৯ ফেব্রুয়ারি, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  আজ এই আকাশ কালো হয়ে, বৃষ্টি ঝরে , তোকে ধরে। ছন্নছাড়া হয়ে আমি,
                  খুজি তোরে,আপন মনে।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img1} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium debitis neque, tempore, vel similique, consectetur
                cupiditate temporibus repellendus voluptatem facilis adipisci
                magnam exercitationem quo illo et fuga praesentium dolor.
                Recusandae dolorum ipsam expedita reiciendis. Voluptatum
                quisquam ab quidem eos ratione consequatur temporibus! At,
                magnam quis rerum obcaecati quasi nam odio?
              </p>
              <br />
              <a className="read-more" href="/">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>
        {/* post 02 */}
        <div className="post">
            <div className="section">
              <div className="inner">
                <h3 className="post-title">ভূমিকা </h3>
                <h5 className="post-subtitle">পোস্ট নংঃ ০২ </h5> <hr />
                <div className="category">
                  <p>ধর্মীয় </p>
                  <p>১৯ ফেব্রুয়ারি, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium debitis neque, tempore, vel similique,
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img1} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium debitis neque, tempore, vel similique, consectetur
                cupiditate temporibus repellendus voluptatem facilis adipisci
                magnam exercitationem quo illo et fuga praesentium dolor.
                Recusandae dolorum ipsam expedita reiciendis. Voluptatum
                quisquam ab quidem eos ratione consequatur temporibus! At,
                magnam quis rerum obcaecati quasi nam odio?
              </p>
              <br />
              <a className="read-more" href="/">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>
          {/* post no 01 */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h3 className="post-title">ভূমিকা </h3>
              <h5 className="post-subtitle">পোস্ট নংঃ ০১ </h5> <hr />
              <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১৯ ফেব্রুয়ারি, ২০২২</p>
              </div> <hr />
              <p className="details post-details-top">
                আজ এই আকাশ কালো হয়ে, বৃষ্টি ঝরে , তোকে ধরে। ছন্নছাড়া হয়ে আমি, খুজি তোরে,আপন মনে। 
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img1} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis neque, tempore, vel similique, consectetur
              cupiditate temporibus repellendus voluptatem facilis adipisci
              magnam exercitationem quo illo et fuga praesentium dolor.
              Recusandae dolorum ipsam expedita reiciendis. Voluptatum quisquam
              ab quidem eos ratione consequatur temporibus! At, magnam quis
              rerum obcaecati quasi nam odio?
            </p>
            <br />
            <a className="read-more" href="/">বিস্তারিত...  </a>
          </div>
        </div>
        {/* post 02 */}
      </div>
    </div>
  );
};

export default Recent;
