#include<stdio.h>
#include<string.h> 
using namespace std;
int main()
{
	char x[5];
	while(~scanf("%s",x)){
		if(x[0]>=x[1]&&x[1]>=x[2]){
			printf("%c %c %c\n",x[2],x[1],x[0]);
		}
		else if(x[0]>=x[2]&&x[2]>=x[1]){
			printf("%c %c %c\n",x[1],x[2],x[0]);
		}
		else if(x[1]>=x[2]&&x[2]>=x[0]){
			printf("%c %c %c\n",x[0],x[2],x[1]);
		}
		else if(x[1]>=x[0]&&x[0]>=x[2]){
			printf("%c %c %c\n",x[2],x[0],x[1]);
		}
		else if(x[2]>=x[1]&&x[1]>=x[0]){
			printf("%c %c %c\n",x[0],x[1],x[2]);
		}
		else {
			printf("%c %c %c\n",x[1],x[0],x[2]);
		}
		memset(x,0,sizeof(x));
	}
}
