#include<bits/stdc++.h>

using namespace std;

int main(){
	int t,n;
	while(~scanf("%d",&t)){
		while(t--){
			scanf("%d",&n); 
			if(n==2)
				printf("-1");
			else if(n==3)
				printf("-1");
			else if(n==4)
				printf("3 1 4 2");
			else {
				if(n%2){
					for(int i=1;i<=n;i+=2)
					printf("%d ",i);
					printf("%d ",n-3);
					for(int i=n-1;i>=1;i--){
						i--;
						if(i!=n-3)
						printf("%d ",i);
					}
				}
				else {
					for(int i=1;i<=n;i++){
						i++;
						printf("%d ",i);
					}
					printf("%d ",n-4);
					for(int i=n;i>=1;i--){
						i--;
						if(i!=n-4)printf("%d ",i);
					}
				}
			}
			printf("\n");
		}
	}
}
