#include<stdio.h>
#include<string.h> 
using namespace std;
int x[]={0,31,28,31,30,31,30,31,31,30,31,30,31};
int main()
{
	int a,b,c;
	int ans;
	while(~scanf("%d/%d/%d",&a,&b,&c)){
		ans=0;
		for(int i=0;i<b;i++){
			ans+=x[i];
		}
		ans+=c;
		if((a%400==0||(a%100!=0&&a%4==0))&&(b>2))
			ans++;
		printf("%d\n",ans);
	}
	 
}
