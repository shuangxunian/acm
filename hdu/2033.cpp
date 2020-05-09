#include<stdio.h>
#include<string.h>
#include<algorithm>
using namespace std;
int main()
{
	int ah,am,as,bh,bm,bs;
	int cm,cs;
	int t;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d%d%d%d%d",&ah,&am,&as,&bh,&bm,&bs);
			cs=as+bs;
			if(cs>=60){
				bm++;
				cs%=60;
			}
			cm=am+bm;
			if(cm>=60){
				bh++;
				cm%=60;
			}
			printf("%d %d %d\n",ah+bh,cm,cs);
		}
	}
}
