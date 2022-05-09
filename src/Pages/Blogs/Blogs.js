import React from "react";
import "./Blogs.css";
import img1 from "../images/post01.png";
import img9 from "../images/post09.png";

const Blogs = () => {
  return (
    <div>
      <div className="recent">
        <h4>বিবিধ </h4>
        <hr />
        <br />
        <br />
        <br />
        <div className="all-posts">
          {/* post no 09  */}
          <div className="post">
            <div className="section">
              <div className="inner">
                <h4 className="post-title">
                  “জিদান,পৃথিবী নং-৩২ থেকে বলছি”! (পর্ব-১){" "}
                </h4>
                <h5 className="post-subtitle">পোস্ট নংঃ ০৯ </h5> <hr />
                <div className="category">
                  <p>বিবিধ</p>
                  <p>৯ মে, ২০২২</p>
                </div>{" "}
                <hr />
                <p className="details post-details-top">
                  জিদান ঢাকা বিশ্ববিদ্যালয়ে এবার নতুন ভর্তি হয়েছে তাত্ত্বিক
                  পদার্থবিজ্ঞানে। ঝিনাইদহ থেকে ঢাকা নতুন এসেছে। নতুন পরিবেশ,
                  চারপাশে যা-ই দেখে মুগ্ধ দৃষ্টিতে তাকিয়ে থাকে।
                </p>
              </div>
              <div className="inner">
                <img className="post-image" src={img9} alt="post 09" />
              </div>
            </div>
            <div className="section">
              <p className="details post-details">
                কারণ এই পরিবেশ তার কাছে নতুন। এতো সুন্দর একাডেমিক বিল্ডিং-এ
                ক্লাস করতে পেরে মনে মনে খুব-ই খুশি। সবার সাথে মিশতেও ভয় পায়,
                সবাই তাকে গ্রহণ করবে কীনা ভালোভাবে, সে দ্বিধা-দ্বন্দে ভোগে। তবুও
                ২জন ছেলে বন্ধু এবং একজন মেয়ে বন্ধু পেয়ে গেলো কয়েকদিন ক্লাস করেই।
                আগে থেকেই তার পদার্থবিদ্যায় প্রচুর আগ্রহ, তাই মাইক্রোবায়োলজির
                মতো সাবজেক্ট পেয়েও ছেড়ে দিয়েছে। নিয়েছে তাত্ত্বিক পদার্থবিজ্ঞান,
                স্বপ্ন একদিন অনেক বড় পদার্থবিদ এবং গবেষক হবে। পড়াশুনার চাপ কম
                দেখে নীলক্ষেত থেকে মাল্টিভার্স সম্পর্কিত দুটি বই কিনে আনলো। রুমে
                এসে মাঝ থেকে ২/১ পৃষ্ঠা করে কিছু কিছু পড়েছে।{" "}
              </p>
              <br />
              <a className="read-more" href="/posts/09">
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
          {/* post 02 */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
