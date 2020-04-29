#include<bits/stdc++.h>
using namespace std;
int main()
{
	int t;
	int a,b,c;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d%d",&a,&b,&c);
			for(int i=1;;i++){
				if((a%i+i%b)==c){
					printf("%d\n",i);
					break;
				}
			}
		}
	}
}
