import React from "react";
import "./Personals.css";
import img1 from "../images/post01.png";
import img2 from "../images/post02.png";
import img3 from "../images/post03.png";

const Personals = () => {
  return (
    <div>
      <div className="recent">
        <h4>ব্যাক্তিগত </h4>
        <hr />
        <br />
        <br />
        <br />
        <div className="all-posts">

                    {/* post no 03  */}
                    <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                মাধ্যমিক স্কুলজীবনের  সারসংক্ষেপ (২০১০- ২০১৬)    {" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৩ </h5> <hr />
                <div className="category">
                  <p>ব্যাক্তিগত</p>
                  <p>১৭ এপ্রিল, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                <b> (Disclaimer: প্রচুর ব্যক্তিগত কথায় ভরপুর, অনেকেরই বিরক্তির উদ্রেগ হতে পারে। তাই আগ্রহী না হলে, স্কিপ করতে পারেন। ) </b> 
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img3} alt="" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">প্রাথমিক শিক্ষা সমাপনী পরীক্ষা শেষ করে ঢাকায় ঘুরতে চলে আসলাম। জেলা বয়েজ স্কুলের ভর্তি পরীক্ষার ৪/৫ দিন আগে বাসায় এসে ভর্তি পরীক্ষার প্রস্তুতি নেয়া শুরু করলাম। এদিকে শুনি আমার বন্ধু বান্ধব রা সবাই কোচিং করে একাকার। আমি ভয় পাওয়া শুরু করে দিলাম। তারপরেও সেরাটা দিয়ে প্রিপারেশন নিলাম। ফলাফল আমি ভর্তি পরীক্ষায় সম্মিলিতভাবে প্রথম। এখনো মনে আছে, ট্রাপিজিয়ামের একটা অংক এসেছিল, কেউ পারে নি, কিন্তু আমি পেরেছিলাম। তার কারনেই ফলাফলে আমি বাকিদের চেয়ে এগিয়ে যাই।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/03">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>


          
          {/* post no 02  */}
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
              <p className="details post-details">বছরের
                  মাঝামাঝি হওয়ায় এক সরকারি প্রাইমারি স্কুলে ভর্তি হই।
                তখনকার দৈনন্দিন জীবন ছিল এমন- আব্বু প্রত্যেক দিন পৌছায়ে দিতো
                স্কুলে, আর ৫টাকা দিয়ে দিতো রিক্সা দিয়ে চলে আসার জন্যে।আমি রিক্সা
                দিয়ে না এসে ঐ টাকা জমাতে থাকলাম। একসময় আমার অনেক টাকা জমে গেলো।
                মাটির এক ব্যাংক ছিল। সেটা অর্ধেক পর্যন্ত টাকা জমিয়েছিলাম। একদিন
                দুর্ঘটনাবশত মাটির ব্যাংক ভেঙে যায়। আমার কান্না কে দেখে। ঐদিনই
                পরে প্লাস্টিকের আরেকটা ব্যাংক কিনে দিয়েছিল।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/02">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>

          {/* post 01 */}

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
                এবং ইচ্ছাও হয় না। কারন অনেক ধরনের মানুষই আছে, যেটা আমার কাছে
                অনেক গুরুত্বপূর্ন, সেটি অনেকের কাছে প্রদর্শনের বস্তু বলে মনে
                হবে।তাই আমি আমার মতো আলাদা মিডিয়া খুজে নিয়েছি নিজের কথা বলার।
                এখানে সবাই আমার কথা দেখবে না, কেবল ইচ্ছুক মানুষরাই দেখবে। যার
                পছন্দ হবে না, সে দেখবে না। তাছাড়া, নিজের অবসর সময়ে কিছু একটা করে
                নিজেকে ব্যস্ত রাখাও যাবে এর মাধ্যমে। আরেকটা বিষয় হলো, একটা সময়
                পরে গিয়ে নিজের সব কথাগুলো নিজেও কম্পাইলড আকারে খুজে পাবো। সময়ের
                সাথে নিজের চিন্তা চেতনা, ভাবনার পরিবর্তন গুলোও ধরতে পারবো। এই
                ওয়েবসাইট কে অনেক দিন টিকিয়ে রাখার ইচ্ছা। বাকিটা আল্লাহর ইচ্ছা।
              </p>
              <br />
              <a className="read-more" href="/posts/01">
                বিস্তারিত...{" "}
              </a>
            </div>
          </div>


          {/* post no 03  */}
        </div>
      </div>
    </div>
  );
};

export default Personals;
