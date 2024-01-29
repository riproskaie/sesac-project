function Contact() {
  return (
    <div className="p-4 w-3/4 m-auto ">
      <h2 className="text-2xl font-serif font-bold mb-4 text-center">개발자 프로필</h2>
      <div>
        <div className="text-center mb-4">
          <img
            src={`https://i.ibb.co/kHpJn6F/IMG-20230702-023810-436.jpg=${Math.floor(
              Math.random() * 100
            )}`}
            alt="Developer"
            className="inline-block rounded-full w-64 h-64"
          />
          <h3 className="text-xl font-serif font-semibold mt-2">이윤재</h3>
          <p className="font-sans">LLM 개발자 </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold">개발자 소개</h4>
          <p className="font-sans">윤치호봇 개발자입니다.</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold">기술 스택</h4>
          <p className="font-sans">Python, FastAPI, HTML, CSS, JavaScript, React, R, TensorFlow, PyTorch, LLM...</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold">경력</h4>
          <p className="font-sans">TBD</p>
        </div>
        <div>
          <h4 className="text-lg font-serif font-semibold">연락처</h4>
          <p className="font-sans">Email: riproskaie@gmail.com</p>
          <p className="font-sans">Blog: blog.naver.com/remedies</p>
          <p className="font-sans">GitHub: github.com/riproskaie</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
