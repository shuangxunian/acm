#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
int main()
{
	int t;
	int m,n;
	ll ans;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d",&m,&n);
			ans=1;
			for(int i=2;i<=m;i++){
				ans=ans*i%n;
			}
			printf("%lld\n",ans);
		}
	}	
}
