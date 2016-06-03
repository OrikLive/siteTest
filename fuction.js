
/*function sumTo (n)
{
	var x=0;
	for (var i = 1; i <= n; i++)
		x+=i;
	return x;
}*/

function sumTo(n)
{
	if(n == 1)
		return n;
	else
		return n+sumTo(--n); 
}	

alert(sumTo(2));


/*function ask(question, yes, nos) {
    if (confirm(question)) yes()
    else nos();
  }

function showOk() {
  alert( "Вы согласились." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);

/*var ageUser = prompt("Ваш вік?");

checkAge(ageUser);

function checkAge (age)
{
//	(age > 18) ? true: confirm ("Батьки дозволили?");
//if ((age > 18) || confirm("Батьки дозволили"));
return (age > 18) || confirm("Батьки дозволили");
}

function min (a, b)
{
	if (a < b)
		return a;
	else 
		return b;
}

function sayHi() {
  alert( "Привет" );
}

alert( sayHi ); // выведет код функции*/