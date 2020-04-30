#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n;
	int a,mx,ans;
	while(~scanf("%d",&t)){
		while(t--){
			mx=0;
			ans=0;
			scanf("%d",&n);
			while(n--){
				scanf("%d",&a);
				if(a>mx){
					mx=a;
					ans=a;
				}
				else if(a==mx){
					ans+=a;
				}
			}
			printf("%d\n",ans);
		}
	}
}
