#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d",&n);
			if(n%2){
				int i;
				for(i=n;i>n/2+1;i--){
					printf("%d ",i);
				}
				printf("%d %d ",i-1,i);
				i-=2;
				while(i){
					printf("%d ",i--);
				}
			}
			else{
				while(n){
					printf("%d ",n--);
				}
			}
			printf("\n");
		}
	}
}
