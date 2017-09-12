function provera(niz)
{
	var niz = [3, 6, 7, 8];
	
	niz.sort();
	for (var i = 1; i < niz.length; i++) {
		if (niz[i - 1] === niz[i])
		{
			return true;
		}
		return false;
	}
	
}

console.log(provera("niz"));



