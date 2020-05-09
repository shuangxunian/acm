#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;
const int mx=60;
int ans[mx];
void init()
{
	ans[1]=1,ans[2]=2;
	for(int i=3;i<mx;i++)
		ans[i]=ans[i-1]+ans[i-2];
}
int main()
{
	int t;
	int flag;
	init();
	while(~scanf("%d",&t)&&t){
		flag=0;
		for(int i=1;i<mx;i++){
			if(ans[i]==t){
				flag=1;
				printf("Second win\n");
				break;
			}
		}
		if(!flag)
			printf("First win\n");
	}
}
