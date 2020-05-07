#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;
char ans[105];
int main()
{
	int len,mx;
	while(~scanf("%s",ans)){
		len=strlen(ans);
		mx=0;
		for(int i=0;i<len;i++){
			mx=max(mx,ans[i]-'a');
		}
		for(int i=0;i<len;i++){
			printf("%c",ans[i]);
			if(ans[i]-'a'==mx){
				printf("(max)");
			}
		}
		printf("\n");
		memset(ans,0,sizeof(ans));
	}
}
