const About = () => {
  return (
    <div className="p-6 ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img
            src={'https://i.ibb.co/71F2ZbF/image.jpg'}
            alt="THY"
            className="inline-block object-cover rounded-full w-64 h-64"
        />
        <h1 className="text-3xl font-serif font-bold text-brown-900 dark:text-brown-200">윤치호 (1865-1945)</h1>
        <p className="text-brown-700 font-sans dark:text-brown-300 text-center">
        민족 계몽 운동가이자 친일반민족행위자.<br/>한문 세대이자 한국 최초의 영어 구사자.<br/>한국판 포레스트 검프. 
        </p>
        <div className="border-t border-brown-900 my-4 w-1/4 mx-auto dark:border-brown-500" />
        <h2 className="text-2xl font-serif font-bold text-brown-900 dark:text-brown-200">약력</h2>
        <ul className="list-disc font-sans list-inside text-brown-700 dark:text-brown-300">
          <li>주조선 미국 공사관 통역관</li>
          <li>독립협회 회장</li>
          <li>독립신문 제2대 사장</li>
          <li>한성부 판윤 </li>
          <li>외무부 협판 </li>
          <li>학무부 협판 </li>
          <li>연희전문학교 교장 </li>
          <li>조선총독부 중추원 고문 </li>
        </ul>
        <div className="border-t border-brown-900 my-4 w-1/4 mx-auto dark:border-brown-500" />
        <h2 className="text-2xl font-serif font-bold text-brown-900 dark:text-brown-200">교육</h2>
        <p className="text-brown-700 font-sans dark:text-brown-300">에모리 대학 </p>
      </div>    
    </div>
  );
};

export default About;
