#include<bits/stdc++.h>
using namespace std;
int main()
{
	int t;
	int m,n;
	int ans;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d",&n,&m);
			if(n>=100)
				printf("%d\n",n+m);
			else{
				ans=(100-n)/m*m;
				if(ans+n>=100)
					printf("%d\n",ans+n);
				else
					printf("%d\n",ans+n+m);
			}
		}
	}
}
