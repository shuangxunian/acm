#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n,k;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d",&n,&k);
			for(int i=1;i<=n;i++){
				printf("%d ",i*k);
			}
			printf("\n");
		}
	}
}
