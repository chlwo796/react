import { useEffect, useState } from "react";

interface Test{
    id:string,
    name:string;
}
const List = ()=>{
    const [cnt, setCnt] = useState(0);
    const [list, setList] = useState<Test[]>([]);
    useEffect(()=>{
        fetch('http://localhost:8085/react/list')
        .then((res)=>res.json())
        .then(result=>{
            setList(result);
        })
        // 재렌더링 x
        // 도메인이 달라서 cors 설정이 필요
        console.log(1);
    },[]);
    // console.log(1); // 한번만 실행될거같지만 실제로 2번실행이 됨, 클릭 이벤트때마다 console 2번씩 찍힘.
    // 리액트 = 반응(변함)에따라 재렌더링 함
    // 자바스크립트 = 컴포넌트방식
    // 펑션방식을 사용할 예정 = 새로운 대세
    return (
        <div>
            <ul>{list.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}</ul>
            <span onClick={()=>setCnt(cnt+1)}>{cnt}</span>
        </div>
    )
}
export default List;

// 예시
// 프론트 서버 도메인(리액트) : http://react.test.com
// 백엔드 서버 도메인(스프링부트) : http://server.test.com

// localhost로 할 경우 실제 서버에서는 동작하지 않는다.(실행디바이스의 localhost)