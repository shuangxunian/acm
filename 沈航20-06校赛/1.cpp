#include<bits/stdc++.h>
using namespace std;
/*
int ans[100005];
int q[100005];
int p[100005];
int main()
{
    int t;
    int n,k;
    int mx;
    int out;
    scanf("%d",&t);
    while(t--){
        mx=0;
        memset(ans,0,sizeof(ans));
        memset(q,0,sizeof(q));
        memset(p,0,sizeof(p));
        scanf("%d%d",&n,&k);
        for(int i=0;i<n;i++){
            scanf("%d",&ans[i]);
        }
        for(int i=0;i<n/2;i++){
            out=abs(ans[i]-ans[n-i-1]);
            p[out]++;
            mx=max(p[out],mx);
        }
        printf("%d\n",n/2-mx);
    }
}
*/
/*
int main()
{
    int t;
    int x,y;
    int p,q;
    int flag;
    scanf("%d",&t);
    while(t--){
        flag=1;
        scanf("%d%d",&x,&y);
        if(x==0&&y!=0){
            for(int i=0;i<4;i++){
                scanf("%d%d",&p,&q);
                if(p!=0){
                    flag=0;
                }
            }
    	}
        else if(y==0&&x!=0){
            for(int i=0;i<4;i++){
                scanf("%d%d",&p,&q);
                if(q!=0){
                    flag=0;
                }
            }
        }
        else if(x==0&&y==0){
            for(int i=0;i<4;i++){
                scanf("%d%d",&p,&q);
                if(q!=0||p!=0){
                    flag=0;
                }
            }
		}
        else {
            for(int i=0;i<4;i++){
                scanf("%d%d",&p,&q);
                if(p%x!=0||q%y!=0){
                    flag=0;
                }
            }
        }
        printf("%d\n",flag);
    }
}
*/
/*
long long power_mod(long long a, long long b, long long P)
{
    if(b == 0) return 1;
    long long ans = power_mod(a, b >> 1, P);
    ans = ans * ans % P;
    return (int)(b & 1) ? a % P * ans % P: ans;
}
long long bpow(long long a, long long b, long long m){
	if(b == 0)
		return 1;
	else if(b % 2 == 1)
		return a * bpow(a, b - 1, m) % m;
	else{
		long long num = bpow(a, b/2, m) % m;
		return num * num % m;
	}
	
}
int main()
{
    long long a,b,c,d,e,f,g;
    while(~scanf("%lld%lld%lld%lld%lld%lld%lld",&a,&b,&c,&d,&e,&f,&g)){
        long long rem = power_mod(b,c,d-1);
        long long ans = power_mod(a,rem,d);
        long long ques=bpow(ans,e,f);
        printf("%lld\n",ques*g%1000000007+bpow(ques,g,1000000007));
    }
}*/
#define ll long long
using namespace std;
int n,m;
ll G[100005];
ll Grps[1005];
ll test;
ll dfs(int i, int tail, ll lstHas){
    test++;
    if(i==n){
        return *max_element(Grps,Grps+tail) - *min_element(Grps,Grps+tail);
    }
	else{
        ll ans = 9e18;
        if(lstHas<m&&tail>0){
            Grps[tail-1]+=G[i];
            ans = min(ans, dfs(i+1, tail, lstHas+1));
            Grps[tail-1]-=G[i];
        }
        Grps[tail++] = G[i];
        ans = min(ans, dfs(i+1, tail, 1));
        tail--;
        return ans;
    }
}

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        scanf("%d%d",&n,&m);
        for(int i=0;i<n;i++){
        	scanf("%lld",&G[i]);
		}
        test = 0;
        cout<<dfs(0,0,0)<<endl;
    }
    return 0;
}
