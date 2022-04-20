import React from "react";
import img1 from "../images/post01.png";
import img2 from "../images/post02.png";
import img3 from "../images/post03.png";
import img4 from "../images/post04.png";
import img5 from "../images/post05.png";

const Recent = () => {
  return (
    <div className="recent">
      <h4>সাম্প্রতিক পোস্ট </h4>
      <hr />
      <br />
      <br />
      <br />
      <div className="all-posts">
        {/* post no 05  */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">ভর্তি যুদ্ধের অভিজ্ঞতা (২০১৮) </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ০5 </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>20 এপ্রিল, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                এইচ,এস,সি শেষ হওয়ার পর থেকেই ভর্তি প্রস্তুতির পালা শুরু।
                উদ্ভাসেই ভর্তি হবো, এতটুকু নিশ্চিত। কিন্তু ফার্মগেট নাকি
                সাইন্সল্যাব ব্রাঞ্চে ভর্তি হবো, তা নিয়ে প্রথমে কনফিউশন ছিল।
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img5} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              পরে হিসেব করে দেখলাম, কোথায় সময়ের অপচয় কম, সেখানে ভর্তি হবো।
              সাইন্সল্যাব আমার জন্যে কাছে ছিল, তাই সময় অপচয় হবে কম, তাই এখানেই
              ভর্তি হই। সময় টা বাছাই এর সময়ও চেষ্টা করলাম, এমন সময় বেছে নিতে,
              যখন আমি সাধারণত পড়বো না। নিজের পড়ার সময় এর সাথে যেনো কোচিং এর সময়
              ওভারলেপ না করে। দুপুর ১২টার ব্যাচ পছন্দ করলাম।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/05">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post no 04  */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">
                কলেজ জীবনের সারসংক্ষেপ (২০১৬- ২০১৮){" "}
              </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ০৪ </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>১৮ এপ্রিল, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                কলেজ ভর্তির পালা আসলো, কোথায় ভর্তি হবো তা নিয়ে এক একজন একেক রকম
                পরামর্শ দিলো। অনেকেই বললো নিজ জেলায় ভর্তি হতে।
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img4} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              কিন্তু আমার মা এই ব্যাপারে অনড় যে, আমাকে লক্ষ্মীপুর ভর্তি করবেন
              না, ঢাকায় পাঠিয়ে দিবেন। এখানে থাকলে ভালো কোন প্রতিযোগী পাবো না,
              ভর্তি পরীক্ষায় পিছিয়ে যাবো। যাই হোক, আব্বুর এর বন্ধু, বাহার আঙ্কেল
              আম্মু কে বললেন, পিলখানায় কোন এক কলেজে উনি আমাকে ভর্তি করিয়ে দিবেন,
              আর ওনার বাসা জিগাতলায় থাকবো আমি। আমার মা অন্যদের সাথে পরামর্শ করে
              রাজি হলেন।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/04">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post no 03  */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">
                মাধ্যমিক স্কুলজীবনের সারসংক্ষেপ (২০১০- ২০১৬){" "}
              </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ০৩ </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>১৭ এপ্রিল, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                <b>
                  {" "}
                  (Disclaimer: প্রচুর ব্যক্তিগত কথায় ভরপুর, অনেকেরই বিরক্তির
                  উদ্রেগ হতে পারে। তাই আগ্রহী না হলে, স্কিপ করতে পারেন। ){" "}
                </b>
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img3} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              প্রাথমিক শিক্ষা সমাপনী পরীক্ষা শেষ করে ঢাকায় ঘুরতে চলে আসলাম। জেলা
              বয়েজ স্কুলের ভর্তি পরীক্ষার ৪/৫ দিন আগে বাসায় এসে ভর্তি পরীক্ষার
              প্রস্তুতি নেয়া শুরু করলাম। এদিকে শুনি আমার বন্ধু বান্ধব রা সবাই
              কোচিং করে একাকার। আমি ভয় পাওয়া শুরু করে দিলাম। তারপরেও সেরাটা দিয়ে
              প্রিপারেশন নিলাম। ফলাফল আমি ভর্তি পরীক্ষায় সম্মিলিতভাবে প্রথম।
              এখনো মনে আছে, ট্রাপিজিয়ামের একটা অংক এসেছিল, কেউ পারে নি, কিন্তু
              আমি পেরেছিলাম। তার কারনেই ফলাফলে আমি বাকিদের চেয়ে এগিয়ে যাই।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/03">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post 02 */}

        <div className="post">
          <div className="section">
            <div className="inner">
              <h4 className="post-title">
                প্রাইমারি স্কুল জীবনের সার-সংক্ষেপ (২০০৬-২০১০){" "}
              </h4>
              <h5 className="post-subtitle">পোস্ট নংঃ ০২ </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>১৪ এপ্রিল, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                আমার ফ্যামিলি ২০০৫ এর মার্চ এর দিকে কমলনগর থেকে জেলা সদরে আসে।
                আমরা তখন হাসপাতাল রোডে একতলা এক বাসায় ভাড়া থাকতাম।
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img2} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              বছরের মাঝামাঝি হওয়ায় এক সরকারি প্রাইমারি স্কুলে ভর্তি হই। তখনকার
              দৈনন্দিন জীবন ছিল এমন- আব্বু প্রত্যেক দিন পৌছায়ে দিতো স্কুলে, আর
              ৫টাকা দিয়ে দিতো রিক্সা দিয়ে চলে আসার জন্যে।আমি রিক্সা দিয়ে না এসে
              ঐ টাকা জমাতে থাকলাম। একসময় আমার অনেক টাকা জমে গেলো। মাটির এক
              ব্যাংক ছিল। সেটা অর্ধেক পর্যন্ত টাকা জমিয়েছিলাম। একদিন দুর্ঘটনাবশত
              মাটির ব্যাংক ভেঙে যায়। আমার কান্না কে দেখে। ঐদিনই পরে প্লাস্টিকের
              আরেকটা ব্যাংক কিনে দিয়েছিল।{" "}
            </p>
            <br />
            <a className="read-more" href="/posts/02">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post no 01 */}
        <div className="post">
          <div className="section">
            <div className="inner">
              <h3 className="post-title">সূচনা পোস্ট </h3>
              <h5 className="post-subtitle">পোস্ট নংঃ ০১ </h5> <hr />
              <div className="category">
                <p>ব্যাক্তিগত</p>
                <p>২৫ ফেব্রুয়ারি, ২০২২</p>
              </div>{" "}
              <hr />
              <p className="details post-details-top">
                এই ওয়েবসাইট টি আসলে শখের বশেই খোলা। খোলার পেছনে অনেক কারনও
                রয়েছে। অনেক সময়ই মাথায় অনেক কথা আসে, কিন্তু ফেসবুক সহ অন্যান্য
                সোশ্যাল মিডিয়া তে শেয়ার করার মতো অবস্থা থাকে না
              </p>
            </div>
            <div className="inner">
              <img className="post-image" src={img1} alt="" />
            </div>
          </div>
          <div className="section">
            <p className="details post-details">
              এবং ইচ্ছাও হয় না। কারন অনেক ধরনের মানুষই আছে, যেটা আমার কাছে অনেক
              গুরুত্বপূর্ন, সেটি অনেকের কাছে প্রদর্শনের বস্তু বলে মনে হবে।তাই
              আমি আমার মতো আলাদা মিডিয়া খুজে নিয়েছি নিজের কথা বলার। এখানে সবাই
              আমার কথা দেখবে না, কেবল ইচ্ছুক মানুষরাই দেখবে। যার পছন্দ হবে না,
              সে দেখবে না। তাছাড়া, নিজের অবসর সময়ে কিছু একটা করে নিজেকে ব্যস্ত
              রাখাও যাবে এর মাধ্যমে। আরেকটা বিষয় হলো, একটা সময় পরে গিয়ে নিজের সব
              কথাগুলো নিজেও কম্পাইলড আকারে খুজে পাবো। সময়ের সাথে নিজের চিন্তা
              চেতনা, ভাবনার পরিবর্তন গুলোও ধরতে পারবো। এই ওয়েবসাইট কে অনেক দিন
              টিকিয়ে রাখার ইচ্ছা। বাকিটা আল্লাহর ইচ্ছা।
            </p>
            <br />
            <a className="read-more" href="/posts/01">
              বিস্তারিত...{" "}
            </a>
          </div>
        </div>

        {/* post no : 03  */}
        {/* //  */}
      </div>
    </div>
  );
};

export default Recent;
