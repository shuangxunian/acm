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

struct data
{
    int w,d,c,e;
    int id;
}p[20005];
int e[15];

bool cmp1(data a,data b){
    if(a.w==b.w) return a.id<b.id;
    return a.w>b.w;
}

int main(){
    int n,k;
    scanf("%d%d",&n,&k);
    for(int i=1;i<=10;i++){
        scanf("%d",&e[i]);
    }
    for(int i=0;i<n;i++){
        scanf("%d",&p[i].w);
        p[i].id=i+1;
    }
    sort(p,p+n,cmp1);
    for(int i=0;i<n;i++){
        p[i].w+=e[i%10+1];
    }
    sort(p,p+n,cmp1);
    for(int i=0;i<k;i++){
        printf("%d ",p[i].id);
    }
}