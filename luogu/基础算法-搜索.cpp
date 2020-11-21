#include<bits/stdc++.h>
using namespace std;
// int t[25];
// int n,k;
// int ans=0;
// int pri(int x){
//     if(x<2) return 0;
//     for(int i=2;i<=sqrt(x);i++) if(x%i==0) return 0;
//     return 1;
// }
// int dfs(int nowk,int i,int num){
//     if(nowk==k){
//         if(pri(num)) ans++;
//         return 0;
//     }
//     for(;i<n;i++) dfs(nowk+1,i+1,num+t[i]);
// }
// int main(){
//     cin>>n>>k;
//     for(int i=0;i<n;i++) cin>>t[i];
//     dfs(0,0,0);
//     cout<<ans<<endl;
//     return 0;
// }
// int t[10][10];
// int ans=0;
// int n,m,T,x,y,sx,sy,ex,ey;
// int tx[4]={1,-1,0,0};
// int ty[4]={0,0,1,-1};
// int dfs(int a,int b){
//     if(a==ex&&b==ey){
//         ans++;
//         return 0;
//     }
//     else{
//         t[a][b]=0;
//         for(int i=0;i<4;i++){
//             if(t[a+tx[i]][b+ty[i]]) {
//                 dfs(a+tx[i],b+ty[i]);
//                 t[a+tx[i]][b+ty[i]]=1;
//             }
//         }
//     }
// }
// int main()
// {
//     cin>>n>>m>>T;
//     cin>>sx>>sy>>ex>>ey;
//     memset(t,0,sizeof(t));
//     for(int i=1;i<=n;i++){
//         for(int j=1;j<=m;j++){
//             t[i][j]=1;
//         }
//     }
//     for(int i=0;i<T;i++){
//         cin>>x>>y;
//         t[x][y]=0;
//     }
//     dfs(sx,sy);
//     cout<<ans<<endl;
//     return 0;
// }