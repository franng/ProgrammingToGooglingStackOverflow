walk(document.body);

function walk(node) 
{
	// I stole this function from Cloud to Butt
	// which stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

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

	v = v.replace(/\bProgramming\b/g, "Googling StackOverflow");
	v = v.replace(/\bprogramming\b/g, "googling StackOverflow");
	v = v.replace(/\bProgrammer\b/g, "Googler of StackOverflow");
	v = v.replace(/\bprogrammer\b/g, "googler of StackOverflow");
	v = v.replace(/\bProgram\b/g, "Google StackOverflow");
	v = v.replace(/\bprogram\b/g, "google StackOverflow");
	v = v.replace(/\bPrograms\b/g, "Googles StackOverflow");
	v = v.replace(/\bprograms\b/g, "googles StackOverflow");
	v = v.replace(/\bProgrammed\b/g, "Googled StackOverflow");
	v = v.replace(/\bprogrammed\b/g, "googled StackOverflow");
	v = v.replace(/\bProgrammable\b/g, "Googlable StackOverflow");
	v = v.replace(/\bprogrammable\b/g, "googlable StackOverflow");
	v = v.replace(/\bProgrammers\b/g, "Googlers of StackOverflow");
	v = v.replace(/\bprogrammers\b/g, "googlers of StackOverflow");
	
	textNode.nodeValue = v;
}

