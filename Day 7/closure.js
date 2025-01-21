function test1(){
    var x="Hello"
    let y=" Iam ur grand mother"
    const z="Yes I am ur grand mother!!"
    console.log(x,y)
    function test2(){
        let e="Hello "
        let f="I am ur mother"
        const g="Yes I am ur mother!!"
        console.log(e,f)
        function test3(p,q){
           console.log(p,q)
           console.log(z)
           console.log(g)

        }test3("R u our grandma?","R u our mother?")
    }test2()
}test1()