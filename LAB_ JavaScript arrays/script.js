// Put your solution here


const divideArray = (numbers)=>
{
    const evenNums = []
    const oddNums = []

    for(let number of numbers)
    {
        if(number % 2 == 0)
        {
            evenNums.push(number)
        }
        else{
            oddNums.push(number)
        }
    }

    

    console.log("Even numbers:")
    if(evenNums.length == 0)
        console.log("None")
    else{
        evenNums.sort((a,b)=>
        {
            return a-b
        }).forEach((ele)=>{
            console.log(ele)
        })
    }
   


    console.log("Odd numbers:")

    if(oddNums.length !=0)
    {
        oddNums.sort((a,b)=>
        {
            return a-b
        }).forEach((ele)=>
    {
        console.log(ele)
    })
    }
    else{
        console.log("None")
    }
    
    
}


