#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	ll p,q,n,t;
	ll ans;
	while(~scanf("%lld",&t)){
		while(t--){
			scanf("%lld%lld%lld",&n,&p,&q);
			ans=1;
			for(int i=2;i<=n;i++){
				ans=(p*ans%mod+q)%mod;
			} 
			printf("%lld\n",ans);
		}
	}
}
