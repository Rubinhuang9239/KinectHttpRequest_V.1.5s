import http.requests.*;

int val = 45;

public void setup() 
{
	size(100,100);
	smooth();
	
	GetRequest get = new GetRequest("http://172.16.240.249:3000/" + str(val));
	get.send();
	println("Reponse Content: " + get.getContent());
	println("Reponse Content-Length Header: " + get.getHeader("Content-Length"));
}
