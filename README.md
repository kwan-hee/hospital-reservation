# 프로젝트 설명
병원에 가려고 예약을 하려고 합니다.
예약이 가능한 일자를 선택하여, 예약을 진행하려고 합니다. 노쇼 방지를 위한 설계를 합니다.

# 배포 : https://kwan-hee.github.io/hospital-reservation/

# 언어
styled-components
react-dom
react-router-dom
prettier
modal
a tag
media quary
localStorage

# 구현기능
* react-calendar 사용하여 해당 월에 예약 가능한 목록 나타내기
* 오늘 날짜를 기준으로 가능한 시간을 보여줍니다.
* react-hook-form을 사용하여 예약자 정보 폼 내의 예약자 이름, 연락처, 예약종류, * 요청사항을 입력하여 예약을 가능하게 합니다.
* 유효성 검사(No show) 를 통해 필수값 입력되어야만 submit 가능하게 구현합니다.
* mock data에서 연락처를 확인해 중복된 연락처일 경우 예약이 불가능합니다.

✅ 상세페이지

1.이름, 전화번호, 병원에 온 목적
![2022-10-19_181403](https://user-images.githubusercontent.com/80756638/197110735-5c31e1b6-782c-413f-a7a0-8863c09e7af9.jpg)

2. 이름, 전화번호, 목적 을 localStorage 에 저장
![2022-10-19_181443](https://user-images.githubusercontent.com/80756638/197110791-d2dca420-ce84-4e64-9caa-bcea39b60151.jpg)

3. 목데이터로 날짜를 뽑아서 예약된 날짜는 빨간 점으로 구현
![2022-10-19_181554](https://user-images.githubusercontent.com/80756638/197110872-299deb52-603b-4667-85e9-81ca890c7104.jpg)

4. No show 인 사람의 DB를 가지고 있어 이름을 입력하는 순간 No show 인 사람은 경고창이 뜬다.
![2022-10-20_034145](https://user-images.githubusercontent.com/80756638/197111076-34c1ef65-496a-44d3-beef-08373360fef9.jpg)

5. 예약을 했는지 확인 후 예약이 되어 있으면 입력이 안되고 예약이 안되어 있으면 예약 가능하다.

![2022-10-20_041037](https://user-images.githubusercontent.com/80756638/197111148-dfa0f189-0ce2-4ab3-81a6-35b7fc568a3f.jpg)

![2022-10-20_041135](https://user-images.githubusercontent.com/80756638/197111167-dbfd529c-4c3b-435f-87df-c35a564c01b7.jpg)

## 새롭게 알게 된 것!
이번에 새롭게 알게 된 것은 input tag를 썼을 때 이 input 이 많아질 때 다루기가 힘들어 진다. 
그래서 이 input 들을 하나로 모아서 단하나의 useState 로 쓸 수 있는 법을 알게 되었다.

```
const [userInput, setUserInput] = useState({
        reserch: '',
        phone: '',
        selectData: '',
    });
    
 ```
 일단 useState를 만들때 초기값을 앞으로 쓸 input 을 초기화 한다.
 
 ```
 const reserchandle = (e) => {
        e.preventDefault();  
         
        setUserInput({
            ...userInput,
            reserch: e.target.value,
        });
    };
  const phonehandle = (e) => {
        e.preventDefault();
        setUserInput({
            ...userInput,
            phone: e.target.value,
        });
    };

    const radiohandling = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        setSelectData({
            [name]: value,
        });
        setUserInput({
            ...userInput,
            selectData: e.target.value,
        });
    };  
 ```


