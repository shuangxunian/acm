#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;
void dfs(int n,int r){
	if(n==0)
		return ;
	dfs(n/r,r);
	char ans=n%r>9?(n%r-10+'A'):(n%r+'0');
	printf("%c",ans);
}
int main()
{
	int r,n;
	while(~scanf("%d%d",&n,&r)){
		if(n==0)
			printf("0");
		else{
			if(n<0){
				printf("-");
				n=-n;
			}
			dfs(n,r);
		}
		printf("\n");
	}
}
