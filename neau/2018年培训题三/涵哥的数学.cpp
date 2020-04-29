#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
ll qpow(ll a,ll b)
{
	ll ans=1;
	while(b>0){
		if(b&1){
			ans=ans*a%mod;
		}
		a=a*a%mod;
		b>>=1;
	}
	return ans;
}
int main()
{
	ll p,q,n,t;
	ll ans;
	while(~scanf("%lld",&t)){
		while(t--){
			scanf("%lld%lld%lld",&n,&p,&q);
			if(p==1){
				ans=(((n-1)*q)%mod+1)%mod;
			}
			else{
				ans=(qpow(p,n-1)+q*(qpow(p,n-1)-1)/(p-1))%mod;
			}
			printf("%lld\n",ans);
		}
	}
}
