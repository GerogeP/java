
function solution(A, B, P) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leng = B.length
    let indexes = []
    let result = 'NN CONTACT'
    for (let i = 0; i < leng; i++) {
        if (B[i].indexOf(P) > -1) {
            indexes.push(i)
        }
    }
    if (indexes.length > 0) {
        let temparr = []
        for (let i of indexes) {
            temparr.push(A[i])
        }
        console.log(temparr)
        result = temparr.sort()[0]
    }
    return result
}
solution(["pim", "pom"], ["999999999", "777888999"], ["8899"])
// solution([1, 2, 6, 3, 4, 5])
// solution([-11, -3, -6, 9, -4, -5])