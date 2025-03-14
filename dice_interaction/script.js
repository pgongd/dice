// 현재 주사위의 면 (인덱스)
let currentFaceIndex = 0;

// 주사위의 각 면 (회전 좌표)
const perFace = [
    [-0.1, 0.1, -1],  // 1번 (앞면)
    [-0.1, 1.1, -1],  // 2번 (윗면)
    [0.9, 0.1, -1],  // 3번 (왼쪽)
    [-1.1, 0.1, -1],  // 4번 (오른쪽)
    [-0.1, -0.9, -1], // 5번 (아래)
    [-9.9, -1, -0.9]  // 6번 (뒷면)
];

// 주사위 회전 설정
const setVal = () => {
    let [x, y, z] = perFace[currentFaceIndex]; // 현재 인덱스의 좌표 가져오기
    $(".dice").css("transform", `rotate3d(${x}, ${y}, ${z}, 180deg)`);
};

// 초기값 적용
setVal();

// 버튼 클릭 시 인덱스 변경
$(".rollBtn").click(() => { 
    currentFaceIndex = (currentFaceIndex + 1) % perFace.length; // 다음 인덱스로 변경 (1 → 2 → 3 → 4 → 5 → 6 → 다시 1)
    setVal();
});
