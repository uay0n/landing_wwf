// index.js
/* 1. 초기상태-오답박스 팝업 숨기기 */
/* 2. 정답 확인하기 버튼 클릭 시 위 1번 대상 보이기 */
/* 3. x 버튼 클릭 시 위 1번 대상 숨기기 */
// 변수대상(오답박스 팝업, x버튼, 정답확인버튼)
const popup_box = document.querySelector('.answer_box')
const popup_bg = document.querySelector('.answer_popup_bg')
const quiz_btn = document.querySelector('#quiz_btn')
const close_btn = document.querySelector('#answer_close_btn')
console.log(popup_box);
console.log(popup_bg);
console.log(quiz_btn);
console.log(close_btn)

popup_bg.style.display = 'none'

/* 2. 정답 확인하기 버튼 클릭 시 위 1번 대상 보이기 */
// 객체.함수
// addEventListener 이벤트를 호출하는 함수
// addEventListener ('이벤트종류',실행함수)
quiz_btn.addEventListener('click',popupShow);
close_btn.addEventListener('click',popupDown)
function popupShow(){
    popup_bg.style.display = 'flex'
}
function popupDown(){
    popup_bg.style.display = 'none'
}
/* function popupShow(){
    popup_box.style.display = 'flex';
    popup_bg.style.display = 'flex';
}
function popupClose(){
    popup_box.style.display = 'none';
    popup_bg.style.display = 'none';
} */