#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define mod 10007
int main()
{
	int t;
	int n,a;
	int flag;
	while(~scanf("%d",&t)){
		while(t--){
			flag=0;
			scanf("%d",&n);
			while(n--){
				scanf("%d",&a);
				if(a==7)
					flag=1;
			}
			if(flag)
				printf("I'm glad.\n");
			else
				printf("I'm angry.\n");
		}
	}
}
