function sumofnumbers(sumarr)
{
    var sum = 0; 
    for (var i=0; i< sumarr.length; i++)
    {
        sum += sumarr[i];
        
    }
    return sum;
}
console.log("c. Sum of Numbers: " + sumofnumbers([1,2,3,4,5]));
console.log("----------------------");