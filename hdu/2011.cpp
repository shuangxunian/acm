#include<stdio.h>
#include<string.h> 
using namespace std;
double ans[1005];
int main()
{
	int m,n;
	for(int i=1;i<=1000;i++){
		if(i%2){
			ans[i]=ans[i-1]+1.0/i;
		}
		else{
			ans[i]=ans[i-1]-1.0/i;
		}
	}
	while(~scanf("%d",&m)){
		while(m--){
			scanf("%d",&n);
			printf("%.2lf\n",ans[n]);
		}
	}
}
