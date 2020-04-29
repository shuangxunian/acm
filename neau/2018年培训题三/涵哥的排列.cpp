#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
ll ans[15];
int main()
{
	int t,x;
	ans[1]=1;
	for(int i=2;i<13;i++){
		ans[i]=ans[i-1]*i;
	}
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d",&x);
			printf("%lld\n",ans[x]);
		}
	}
}
