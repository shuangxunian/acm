#include<stdio.h>
#include<string.h> 
using namespace std;
long long ans[60];
int main()
{
	int n;
	for(int i=1;i<=4;i++)
		ans[i]=i;
	for(int i=5;i<=55;i++){
		ans[i]=ans[i-1]+ans[i-3];
	}
	while(scanf("%d",&n)){
		if(n==0)
			break;
		else
			printf("%lld\n",ans[n]);
	}
}
