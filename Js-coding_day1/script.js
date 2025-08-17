/*2025년 8월 17일 문제 풀이 */

/*Day1-1 문제 : 이름,나이,좋아하는 색깔 출력

const name = "재훈";
let age = 22;
let favoriteColor = "black";

console.log(name,age,favoriteColor);
*/


/*Day1-2 문제 : typeof 사용해서 결과 확인

console.log(typeof true)
console.log(typeof "Hello")
console.log(typeof 123)
console.log(typeof null)
console.log(typeof undefined)
*/



/*Day2-1 문제 : 산술연산
let a = 15;
let b = 4;

let sum = 0;

sum = a+b;
console.log(sum);

sum = a-b;
console.log(sum);

sum = a*b;
console.log(sum);

sum = a/b;
console.log(sum);

sum = a%b;
console.log(sum);
*/


/*Day2-2 문제 : 나이 조건문
let n = prompt("나이를 입력해주세요");
 if(n>20&&n<100){
     console.log("성인입니다.");
 }
 else if(0<n&&n<20){
     console.log("미성년자입니다.");
 }
 else if(n<0){
     console.log("잘못입력하셨습니다");
 }
 else if(n>100){
     console.log("이사람은 죽었습니다");
 }
    */
/*Day2-3 문제 : x값 조건 문
 let x = 10;
 if(x>5&&x<20){
     console.log(x);
 }
 else{
     console.log(x);
 }
*/

/* Day3-1 문제 : 점수에 따른 학점 출력
let score = prompt("점수를 입력해주세요.");
if(score>=90){
    console.log("A");

}
else if(score>=80&&score<90){
    console.log("B");
}
else if(score>=70&&score<80){
    console.log("C");
}
else {
    console.log("D");
}
*/


/* Day3-2 문제 : 점수에 따른 학점 출력
let fruit = prompt("과일을 입력해주세요.");
switch(fruit){
    case "apple":
        console.log(1000);
    break;

    case "banana":
        console.log(1500);
        break;

    case "orange":
        console.log(2000);
        break;

    default:
        console.log("알 수 없는 과일");
}
*/


/* Day 3-3 문제 : 짝수/홀수 판별
let n = prompt();
if(n%2==0){
    console.log("짝수");
}
else{
    console.log("홀수");
}
*/


/* Day 3-4: 나이 구분
let age = prompt("나이를 입력하세요.");
if(age>=0&&age<=12){
    console.log("어린이");
}
else if(age>=13&&age<=19){
    console.log("청소년");
}
else if(age>=20&&age<=64){
    console.log("성인");
}
else if(age>=65){
    console.log("노인");
}
else {
    console.log("잘못된 나이");
}
*/


/* Day 4-1: 1~10 합 구하기 (for문)
let sum = 0;
for(let i=0; i<=10; i++){
    sum=sum+i;
}
console.log(sum);


/* Day 4-2: 10~1 출력 (while문)
let m = 10;
while(m>0){
    console.log(m);
    m--;

}
*/


/* Day 4-3: 1~100 합 구하기 (while문)
let sum2 = 0;
let n = 0;
while(n<=100){
    sum2=sum2+n;
    n++;
}
console.log(sum2);
*/
