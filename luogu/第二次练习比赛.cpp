#include<bits/stdc++.h>
using namespace std;

// int main(){
//     int n;
//     int x;
//     while(cin>>n){
//         int now=0;
//         int mx=0;
//         int last=0;
//         while(n--){
//             cin>>x;
//             if(x>last){
//                 now++;
//             } else {
//                 mx=max(mx,now);
//                 now=1;
//             }
//             if(n==0){
//                 mx=max(mx,now);
//             }
//             last=x;
//         }
//         cout<<mx<<endl;
//     }
// }


// int n,k,a[100001];

// int solve(int x) {
//     if(x==n)
//         return 1;
//     if(a[x])
//         return a[x];
//     for(int i=1;i<=k&&x+i<=n;++i)
//         a[x]+=solve(x+i);
//     a[x]%=100003;
//     return a[x];
// }

// int main() {
//     cin>>n>>k;
//     cout<<solve(0)<<endl;
//     return 0;
// }

// int main(){
//     int n,k;
//     cin>>n>>k;
//     cout<<n/k<<endl;
// }

// struct data
// {
//     int x,y;
// }apple[5005];

// bool cmp(data a,data b){
//     return a.y<b.y;
// }
// int main(){
//     int n,s,a,b;
//     int ans=0;
//     cin>>n>>s;
//     cin>>a>>b;
//     a+=b;
//     for(int i=0;i<n;i++) cin>>apple[i].x>>apple[i].y;
//     sort(apple,apple+n,cmp);
//     for(int i=0;i<n;i++){
//         if(apple[i].x<=a){
//             ans++;
//             s-=apple[i].y;
//             if(s<0){
//                 ans--;
//                 break;
//             }
//         }
//     }
//     cout<<ans<<endl;
// }

// struct data
// {
//     int w,d,c,e;
//     int id;
// }p[20005];
// int e[15];

// bool cmp1(data a,data b){
//     if(a.w==b.w) return a.id<b.id;
//     return a.w>b.w;
// }

// int main(){
//     int n,k;
//     scanf("%d%d",&n,&k);
//     for(int i=1;i<=10;i++){
//         scanf("%d",&e[i]);
//     }
//     for(int i=0;i<n;i++){
//         scanf("%d",&p[i].w);
//         p[i].id=i+1;
//     }
//     sort(p,p+n,cmp1);
//     for(int i=0;i<n;i++){
//         p[i].w+=e[i%10+1];
//     }
//     sort(p,p+n,cmp1);
//     for(int i=0;i<k;i++){
//         printf("%d ",p[i].id);
//     }
// }


//正解思路：数位DP

//f[i][j][k]表示有i位，最高位为j，数字k出现的次数。
// int n,tot;
// int ans[10];
// int sum[16],num[10];
// int f[11][10][11];
// int main(){
//     scanf("%d",&n);
//     for(int i=0;i<=9;i++)    f[1][i][i]=1;
//     sum[1]=1;
//     for(int i=2;i<=10;i++){
//         sum[i]=sum[i-1]*10;
//         f[i][0][0]=f[i-1][1][0]*9+f[i-1][0][0]+sum[i];
//         for(int j=1;j<=9;j++)    f[i][0][j]=f[i-1][0][j]*9+f[i-1][j][j];
//         for(int j=1;j<=9;j++){
//             f[i][j][0]=f[i-1][1][0]*9+f[i-1][0][0];
//             for(int k=1;k<=9;k++){
//                 if(j==k)    f[i][j][k]=f[i-1][0][k]*9+f[i-1][k][k]+sum[i];
//                 else f[i][j][k]=f[i-1][0][k]*9+f[i-1][k][k];
//             }
//         }
//     }
//     int x=n;
//     while(x){ num[++tot]=x%10;x/=10; }
//     for(int i=1;i<tot;i++)
//         for(int j=1;j<=9;j++)
//             for(int k=0;k<=9;k++)
//                 ans[k]+=f[i][j][k];
//     for(int i=tot;i>=1;i--){
//         for(int j=0;j<num[i];j++){
//             if(i==tot&&j==0)    continue;
//             for(int k=0;k<=9;k++)    ans[k]+=f[i][j][k];
//         }
//         ans[num[i]]+=n%sum[i]+1;
//     }
//     for(int i=0;i<=9;i++)    printf("%d\n",ans[i]); 
// }


#define maxn 1000005
#define inf 99999999
int a[maxn],p[maxn];
int n,m,tot,L=0,R=inf;
int main()
{
    scanf("%d%d",&n,&m);
    int l=1;
    for(int i=1;i<=n;i++)
    {
        scanf("%d",&a[i]);
        if(!p[a[i]]) tot++;
        p[a[i]]=i;
        while(l<p[a[l]]) l++;
        if(tot==m&&R-L+1>i-l+1)
        {
            L=l;
            R=i;
        }
    }
    printf("%d %d",L,R);
    return 0;
}