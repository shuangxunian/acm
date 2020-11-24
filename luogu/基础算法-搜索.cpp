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

// int tx[]={-1,-1,-1, 0, 0, 1,1,1};
// int ty[]={-1, 0, 1, 1,-1,-1,0,1};

// char a[105][105],b[105][105],c[]="yizhong";

// int dfs(int x,int y,int k,int m){
//     if(m==6){
//         for(;m>=0;m--){
//             b[x][y]=c[m];
//             x-=tx[k];
//             y-=ty[k];
//         }
//         return 0;
//     }
//     x+=tx[k];
//     y+=ty[k];
//     if(a[x][y]==c[m+1]) dfs(x,y,k,m+1);
//     return 0;
// }
// int main(){
//     int n,x,y;
//     cin>>n;
//     for(int i=0;i<n;i++){
//         for(int j=0;j<n;j++){
//             cin>>a[i][j];
//             b[i][j]='*';
//         }
//     }
//     for(int i=0;i<n;i++){
//         for(int j=0;j<n;j++){
//             if(a[i][j]=='y'){
//                 for(int k=0;k<8;k++){
//                     dfs(i,j,k,0);
//                 }
//             }
//         }
//     }
//     for(int i=0;i<n;i++){
//         for(int j=0;j<n;j++){
//             cout<<b[i][j];
//         }
//         cout<<endl;
//     }
//     return 0;
// }


// int n,a[103][103]={0};
// int tx[]={1,-1,0,0};
// int ty[]={0,0,1,-1};
// int bfs(int x,int y){
//     queue<int> qx,qy;
//     int xx,yy;
//     qx.push(x);
//     qy.push(y);
//     a[x][y]=3;
//     while(!qx.empty()){
//         for(int i=0;i<4;i++){
//             // cout<<i<<endl;
//             xx=qx.front()+tx[i];
//             yy=qy.front()+ty[i];
//             // cout<<"xx:"<<xx<<"yy:"<<yy<<endl;
//             if(xx>=0&&xx<=n+1&&yy>=0&&yy<=n+1&&a[xx][yy]==0){
//                 qx.push(xx);
//                 qy.push(yy);
//                 a[xx][yy]=3;
//             }
//         }
//         qx.pop();
//         qy.pop();
//     }
//     return 0;
// }
// int main(){
//     cin>>n;
//     for(int i=1;i<=n;i++){
//         for(int j=1;j<=n;j++){
//             cin>>a[i][j];
//         }
//     }
//     bfs(0,0);
//     for(int i=1;i<=n;i++){
//         for(int j=1;j<=n;j++){
//             if(a[i][j]==0) cout<<"2"<<" ";
//             else if(a[i][j]==3) cout<<"0"<<" ";
//             else cout<<a[i][j]<<" ";
//             // cout<<a[i][j]<<" ";
//         }
//         cout<<endl;
//     }
//     return 0;
// }


// int n,r,t[105];
// int dfs(int k){
//     if(k>r){
//         for(int i=1;i<=r;i++){
//             printf("%3d",t[i]);
//         }
//         printf("\n");
//         return 0;
//     }
//     for(int i=t[k-1]+1;i<=n;i++){
//         t[k]=i;
//         dfs(k+1);
//     }
//     return 0;
// }

// int main(){
//     scanf("%d%d",&n,&r);
//     dfs(1);
//     return 0;
// }


// int n;
// int t[12]={0};
// int s[12];
// int dfs(int k){
//     if(k==n){
//         for(int i=1;i<=n;i++) printf("%5d",s[i]);
//         printf("\n");
//         return 0;
//     }
//     for(int i=1;i<=n;i++){
//         if(t[i]==0){
//             t[i]=1;
//             s[k+1]=i;
//             dfs(k+1);
//             t[i]=0;
//         }
//     }
//     return 0;
// }
// int main(){
//     scanf("%d",&n);
//     dfs(0);
//     return 0;
// }


