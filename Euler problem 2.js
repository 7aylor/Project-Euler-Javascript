//prints the sum of all fibonacci numbers up to 4000000

var cur = 1;
var prev = 0;

var total = 0;

while(cur < 4000000)
{
	if(cur % 2 === 0)
	{
		total += cur;
	}

	var temp = cur;
	cur += prev;
	prev = temp;
}

console.log(total);
