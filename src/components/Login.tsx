const Login = function(){
    const idLabel = '아이디';
    const pwdLabel = '비밀번호';
    const btnLabel = '로그인';
    const btnClick = function(){
        alert(`${btnLabel}을 클릭하셨습니다.`);
    }
return(
    // JSX(JavaScript XML, 자바스크립트 XML)
    <div>
        <input type="text" id="id" placeholder={idLabel}/><br></br>
        <input type="password" id="pwd" placeholder={pwdLabel}/><br></br>
        <button onClick={btnClick}>{btnLabel}</button>
    </div>
)
}
export default Login; // 다른 곳에서도 Login 을 사용 가능

// sp = single page 엘리먼트