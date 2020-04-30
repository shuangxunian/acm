#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n,a;
	int ans;
	while(~scanf("%d",&t)){
		while(t--){
			ans=1;
			scanf("%d",&n);
			while(n--){
				scanf("%d",&a);
				if(a<=ans)
					ans+=a;
			}
			printf("%d\n",ans);
		}
	}
}
