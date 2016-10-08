walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
//	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	//    || node.classList.indexOf('ace_editor') > -1) {
//		return;
//	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bI'm sorry if you're offended\b/g, "Fuck you");
	v = v.replace(/\bi'm sorry if you're offended\b/g, "fuck you");
	v = v.replace(/\bSorry if you're offended\b/g, "Fuck you");
	v = v.replace(/\bsorry if you're offended\b/g, "fuck you");
	v = v.replace(/\bI'm sorry if you were offended\b/g, "Fuck you");	
	v = v.replace(/\bi'm sorry if you were offended\b/g, "Fuck you");
	v = v.replace(/\bI apologize if anyone was offended\b/g, "Fuck you");	
	v = v.replace(/\bi apologize if anyone was offended\b/g, "Fuck you");	
	v = v.replace(/\bsorry if you were offended\b/g, "fuck you");
	v = v.replace(/\bSorry if you were offended\b/g, "Fuck you");
	
	textNode.nodeValue = v;
}


