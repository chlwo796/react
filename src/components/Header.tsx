interface Props{
    title:string;
    onTest:Function;
}

const Header = function(prop:Props){
return (
    <div>
      <header>
        <h1><a href='/' onClick={function(evt){
            evt.preventDefault(); // 실행할 이벤트를 실행하지 않게하는 설정, 경로설정 무시
            prop.onTest();
        }}>{prop.title}</a></h1>
      </header>
    </div>
  )
}
export default Header;