//prints the sum of all numbers divisible by 3 and all numbers divisible by 5
//up to 1000
var i = 0;
var total = 0;

while(i < 1000)
{
	if(i % 3 === 0 || i % 5 ===0)
	{
		total += i;
	}
	
	i++;
}

console.log(total);
