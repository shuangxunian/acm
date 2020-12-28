#include<bits/stdc++.h>
using namespace std;
// int main()
// {
//     int t,n,x;
//     while(cin>>t){
//         while(t--){
//             double ans=0;
//             cin>>n;
//             for(int i=0;i<n;i++){
//                 cin>>x;
//                 ans+=x;
//             }
//             ans/=n;
//             printf("%.2lf\n",ans);
//         }
//     }
// }
// int main(){
//     int t,n,h,x;
//     int ans;
//     cin>>t;
//     while(t--){
//         ans=0;
//         cin>>n>>h;
//         while(n--){
//             cin>>x;
//             if(h+77>=x) ans++;
//         }
//         cout<<ans<<endl;
//     }
// }
// int main(){
//     int t,n,k,x;
//     int ans;
//     cin>>t;
//     while(t--){
//         ans=0;
//         cin>>n>>k;
//         while(n--){
//             cin>>x;
//             if(x==k) ans++;
//         }
//         cout<<ans<<endl;
//     }
// }

int mod = 10007;
int sortPow(int a,int b)
{
    int ans=1;
    a%=mod;
    while (b)
    {
        if (b&1) ans=ans*a%mod;
        b>>=1;
        a=a*a%mod;
    }
    return ans;
}
int main(){
    int t,n,k;
    scanf("%d",&t);
    while(t--){
        scanf("%d%d",&n,&k);
        if(k==1) printf("%d\n",n*k);
        else printf("%d\n",k*(sortPow(k,n)-1)/(k-1))%mod;
    }
}

// long long t[45];
// int main(){
//     int x,n;
//     t[1]=1;
//     t[2]=1;
//     for(int i=3;i<=40;i++) t[i]=t[i-1]+t[i-2];
//     cin>>x;
//     while (x--){
//         cin>>n;
//         cout<<t[n]<<endl;
//     }
// }

// int main(){
//     int t,x,y;
//     cin>>t;
//     while(t--){
//         cin>>x>>y;
//         for(int i=0;i<x;i++){
//             for(int j=0;j<y;j++) cout<<"*";
//             cout<<endl;
//         }
//     }
// }

// int main(){
//     int t,x;
//     cin>>t;
//     while(t--){
//         cin>>x;
//         for(int i=1;i<=x;i++){
//             for(int j=0;j<x-i;j++) printf(" ");
//             for(int j=0;j<(i-1)*2+1;j++) printf("*");
//             printf("\n");
//         }
//     }
// }

// int main(){
//     int t,x,y,n;
//     cin>>t;
//     while(t--){
//         cin>>x>>y;
//         int ans=0;
//         for(int i=0;i<x*y;i++){
//             cin>>n;
//             ans=max(n,ans);
//         }
//         cout<<ans<<endl;
//     }
// }


// int main(){
//     int T,x,y;
//     int p,q;
//     cin>>T;
//     while(T--){
//         int ans=0;
//         cin>>x>>y;
//         for(int i=0;i<x;i++){
//             int flag=1;
//             cin>>p;
//             for(int j=1;j<y;j++){
//                 cin>>q;
//                 if(p!=q) flag=0;
//             }
//             if(flag) ans++;
//         }
//         cout<<ans<<endl;
//     }
// }