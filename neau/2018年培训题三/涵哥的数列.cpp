#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n,a;
	ll ans;
	while(~scanf("%d",&t)){
		while(t--){
			ans=0;
			scanf("%d",&n);
			while(n--){
				scanf("%d",&a);
				ans+=a;
			}
			printf("%lld\n",ans);
		}
	}
}
