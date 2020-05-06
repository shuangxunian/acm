#include<bits/stdc++.h>
using namespace std;
/*int main()
{
	long long n,m;
	while(~scanf("%lld%lld",&n,&m)){
		printf("%lld\n",n*m-min(m,n));
	}
}*/
//T131523 六边形
//long long ans[1000000+5];
/*int main()
{
	int t,n;
	long long ansp;
	int i,j,k;
	for(i=1;i<=1000000;i++){
		ansp=0;
		for(j=1,k=i;j<=i;j++){
			ansp+=(k*2+1);
			k++;
		}
		ans[i]=ansp*2;
	}
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d",&n);
			printf("%lld\n",ans[n]);
		}
	}
}*/
/*
int main()
{
	int t,n;
	int i,j,k;
	long long ansp;
	ans[1]=6;
	ansp=18;
	for(i=2;i<=1000000;i++){
		ans[i]=ans[i-1]+ansp;
		ansp+=12;
	}
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d",&n);
			printf("%lld\n",ans[n]);
		}
	}
}*/
//T131840 Range Update
//wa在int 
/*
long long int ans[1000000+5];
int main()
{
	int t,n;
	long long int ad;
	long long int flag;
	while(~scanf("%d",&t)){
		while(t--){
			memset(ans,0,sizeof(ans));
			ad=0;
			flag=0;
			scanf("%d",&n);
			for(int i=0;i<n;i++){
				scanf("%lld",&ans[i]);
				if(i){
					ans[i]+=ad;
					if(ans[i]<=ans[i-1]){
						flag=ans[i-1]-ans[i]+1;
						ans[i]+=flag;
						ad+=flag;
					}
				}
			}
			printf("%lld\n",ad);
		}
	}
	return 0;
}*/
//T131841 Overstars的比赛
//我是傻逼，没读懂题就写 
/*
const long long int maxx=1e7+5;
int ans[maxx];
int main()
{
	int n,x,ad=0;
	scanf("%d",&n);
	for(int i=0;i<n;i++){
		scanf("%d",&x);
		ans[x]++;
	}
	for(int i=1;i<maxx;i++)
		ans[i]+=ans[i-1];
	for(int i=1;i<maxx/2;i++){
		ad=max(ad,ans[i*2]-ans[i-1]);
	}
	printf("%d\n",ad);
}*/
//T131845 六边形(Hard version)
/*
int main() 
{
	int t;
	long long a,b,c,d;
	scanf("%d",&t);
	while(t--){
		scanf("%lld%lld%lld%lld",&a,&b,&c,&d);
		a*=a;
		if(a==b&&a==c&&a==d)
			printf("YES\n");
		else
			printf("NO\n");
	}
}*/
//T131846 大司的千层套路
/*
int main()
{
	int n;
	double ans=0;
	double q;
	//62
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		scanf("%lf",&q);
		if(i<=62)
			ans+=q/pow(2,i);
	}
	long long ad=ceil(ans);
	printf("%lld",ad);
}*/

