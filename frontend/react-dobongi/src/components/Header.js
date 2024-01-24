// 도봉이 옮겨 놓기
// 오늘은 Header만 !
function Header() {
    return ( 
    <header className="bg-gray-50 border-solid border-2 fixed w-full">
        <nav id="header-nav">
            <ul>
                <li key={1} className="inline-block"><a href="#home">홈</a></li>
                <li key={2} className="inline-block"><a href="#news">도봉이 근황 보기</a></li>
                <li key={3} className="inline-block"><a href="#contact">도봉이 만든 사람 소개</a></li>
                <li key={4} className="inline-block"><a href="#about">도봉이는...</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;