var sum = 0;
for(var i = 10; i <= 20; i++)
{
	console.log(i + "**2 = " + i**2);
	sum += i;
}
console.log("Sum (10-20) = ", sum);

function buttonClick()
{
	var resultDiv = document.getElementById('result');
	resultDiv.innerHTML = "";
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	var action = document.getElementById('elections').value;
	
	if (document.getElementById('x1').value == '' || document.getElementById('x2').value == '')
	{
		alert("Поля x1 и x2 должны быть заполнены");
	}
	else if(Number.isNaN(x1) || Number.isNaN(x2))
	{
		alert("В поля x1 и x2 должны быть введены числовые значения");
	}
	else
	{
		resultDiv.append("x1 + x2 = " + (x1 + x2));
		var result = 0;
		if (document.getElementById("ch+").checked)
		{
			for (i = x1; i <= x2; i++)
			{
				result += i;
			}
			resultDiv.append(", сумма чисел от x1 до x2 = " + result);
		}
		else if(document.getElementById("ch*").checked)
		{
			result = 1;
			for (i = x1; i <= x2; i++)
			{
				result *= i;
			}
			resultDiv.append(", произведение чисел от x1 до x2 = " + result);
		}
		
		resultDiv.append(". Список простых чисел из промежутка: ");
		for (i = x1; i <= x2; i++)
		{
			var isSimple = true;
			if(i <= 1)
			{
				continue;
			}
			for (j = 2; j < i; j++)
			{
				if ((i % j) == 0)
				{
					isSimple = false;
					break;
				}
			}
			if (isSimple)
			{
				resultDiv.append(i + " ");
			}
		}
	}
}

function resetClick()
{
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}