#include<bits/stdc++.h>
using namespace std;
//a
/*
char t[1005];
int q[1005];
int main()
{
	int n,p;
	while(~scanf("%d",&n)){
		while(n--){
			scanf("%s",t);
			int ans=0;
			int ss;
			int len=strlen(t);
			for(int i=0;i<len;i++){
				if(t[i]=='0'){
					
				}
				else{
					ss=t[i]-'0';
					for(int j=1;j<len-i;j++){
						ss*=10;
					}
					q[ans++]=ss;
				}
			}
			printf("%d\n",ans);
			for(int i=0;i<ans;i++){
				printf("%d ",q[i]);
			}
			printf("\n");
			memset(t,0,sizeof(t));
			memset(q,0,sizeof(q));
		}
	}
}*/ 
//b
int main()
{
	int t;
	int n,k;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d%d",&n,&k);
			if(n<k)
				printf("NO\n");
			else if(n==k){
				printf("YES\n");
				for(int i=0;i<k;i++)
					printf("1 ");
				printf("\n");
			}
			else{
				int m=n/k;
				int q=n%k;
				if(q%2==0){
					printf("YES\n");
					for(int i=0;i<k-1;i++){
						printf("%d ",m);
					}
					printf("%d \n",m+q);
				}
				else{
					if(k%2&&m!=1){
						m--;
						q+=k;
						printf("YES\n");
						for(int i=0;i<k-1;i++){
							printf("%d ",m);
						}
						printf("%d \n",m+q);
					}
					else
						printf("NO\n");
				}
			}
		}
	}
}
//c
//n k

