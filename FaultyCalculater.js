function faultyCalculater(a,b,operator){
    let result;
    
    let random=Math.random();

    let isFaulty=random<0.1;

    if(isFaulty){
        console.log("Faulty Calculatiom happenend!");

        // Give wrong answer intentionally(10% times)-->

        if(operator=="+"){
            result=a-b;
        }

        else if(operrator=="-"){
            result=a*b;
        }

        else if(operator=="*"){
            result=a%b;

        }

        else if(operator=="/"){
        result= a**b;
        }

        else if(operator=="%"){
        result= a+b;
        }

    }

    // Correct answer (90% times)-->

        else{
            if(operator=="+"){
                result=a+b;
            }
         

        else if(operrator=="-"){
            result=a-b;
        }

        else if(operator=="*"){
            result=a*b;

        }

        else if(operator=="/"){
            result=a/b;
        }

        else if(operator=="%"){
            result=a%b;
        }
        }
        return result;
    
}

console.log(faultyCalculater(10,5,"+"));