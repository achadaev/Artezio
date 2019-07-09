var opened = 0;
var count = 16;
var delay = false;
var first;

var dict = {
	'00': '3',
	'10': '6',
	'20': '8',
	'30': '1',
	'01': '4',
	'11': '7',
	'21': '8',
	'31': '5',
	'02': '2',
	'12': '4',
	'22': '1',
	'32': '3',
	'03': '6',
	'13': '5',
	'23': '2',
	'33': '7'
};

function breakDelay()
{
	delay = false;
}

function hide(card0, card1)
{
	card0.src = 'images/hidden.jpg'
	card1.src = 'images/hidden.jpg'
}

function del(card0, card1)
{
    card0.parentNode.innerHTML = '';
	card1.parentNode.innerHTML = '';
}

function check(card0, card1)
{
	if (dict[card0.id.slice(4)] == dict[card1.id.slice(4)])
	{
		return true;
	}
	else
	{
		return false;
	}
}

function show(thisCard)
{
	if (!delay)
	{
		delay = true;
		var path = 'images/' + dict[thisCard.id.slice(4)] + '.jpg';
		thisCard.src = path;
		opened += 1;
		if (opened == 1)
		{
			first = thisCard;
			delay = false;
		}
		else if (opened == 2)
		{
			if (check(thisCard, first))
			{
				setTimeout(del, 1000, thisCard, first);
				setTimeout(breakDelay, 1000);
				count -= 2;
			}
			else
			{
				setTimeout(hide, 1500, thisCard, first);
				setTimeout(breakDelay, 1500);
			}
			opened = 0;
		}
		if (count == 0)
		{
			document.getElementById('title').innerHTML = 'Good job!';
		}
	}
}