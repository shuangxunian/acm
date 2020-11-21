#include<bits/stdc++.h>
using namespace std;
// int t[15];
// int main(){
//     int ans=0;
//     int x;
//     for(int i=0;i<10;i++) cin>>t[i];
//     cin>>x;
//     x+=30;
//     for(int i=0;i<10;i++){
//         if(x>=t[i]) ans++;
//     }
//     cout<<ans<<endl;
//     return 0;
// }

// #define MAXN 100005
// #define MAXL 1299710
// int prime[MAXN];
// int check[MAXL];

// void pri(){
//     int tot = 0;
//     memset(check, 0, sizeof(check));
//     for (int i = 2; i < MAXL; ++i)
//     {
//         if (!check[i]) prime[tot++] = i;
//         for (int j = 0; j < tot; ++j)
//         {
//             if (i * prime[j] > MAXL) break;
//             check[i*prime[j]] = 1;
//             if (i % prime[j] == 0) break;
//         }
//     }
// }

// int main(){
//     int n;
//     pri();
//     scanf("%d",&n);
//     printf("4=2+2\n");
//     for(int i=6;i<=n;i+=2){
//         printf("%d=",i);
//         for(int j=3;;j+=2){
//             if(check[j]==0&&check[i-j]==0){
//                 printf("%d+%d\n",j,i-j);
//                 break;
//             }
//         }
//     }
//     return 0;
// }

// int main(){
//     char c,s[300];
//     int ans=0;
//     while(cin>>c){
//         if(c=='@') break;
//         if(c==')'){
//             ans--;
//             if(ans<0){
//                 printf("NO\n");
//                 return 0;
//             }
//         }
//         if(c=='(') ans++;
//     }
//     if(ans==0) printf("YES\n");
//     else printf("NO\n");
// }

// int t[1005];
// int main(){
//     memset(t, 0, sizeof(t));
//     int n,m,x;
//     cin>>n>>m;
//     for(int i=0;i<m;i++){
//         cin>>x;
//         t[x]++;
//     }
//     for(int i=1;i<=n;i++){
//         while(t[i]--) cout<<i<<" ";
//     }
// }


// const int maxx=505;
// int ta[maxx],tb[maxx];
// char sa[maxx],sb[maxx];
// int ans[maxx];

// int main(){
//     cin>>sa>>sb;
//     int lena=strlen(sa),lenb=strlen(sb);
//     int m=min(lena,lenb);
//     int n=0,flag=0;
//     for(int i=1;i<=m;i++){
//         ans[n]=(sa[lena-i]-'0')+(sb[lenb-i]-'0')+flag;
//         flag=ans[n]/10;
//         ans[n]%=10;
//         n++;
//         // cout<<n<<" "<<i<<endl;
//         // for(int j=n-1;j>=0;j--){
//         //     cout<<ans[j];
//         // }
//         // cout<<endl;
//     }
//     if(m==lena){
//         for(int i=m+1;i<=lenb;i++){
//             ans[n]=(sb[lenb-i]-'0')+flag;
//             flag=ans[n]/10;
//             ans[n]%=10;
//             //cout<<ans[n]<<endl;
//             n++;
            
//         }
//     }
//     else if(m==lenb){
//         for(int i=m+1;i<=lena;i++){
//             ans[n]=(sa[lena-i]-'0')+flag;
//             flag=ans[n]/10;
//             ans[n]%=10;
//             //cout<<ans[n]<<endl;
//             n++;
//         }
//     }
//     if(flag!=0) ans[n++]=flag;
//     for(int i=n-1;i>=0;i--){
//         cout<<ans[i];
//     }
// }

const int maxx=1005;
int m,n;
char ch[maxx][maxx];
int d[maxx][maxx];
int fx[4]={1,-1,0,0},fy[4]={0,0,1,-1};
bool visit[maxx][maxx]={false};
struct node{
    int x,y;
}Node;
bool check(int x1,int y1,int x2,int y2){
    if(x1<0||y1<0||x1>=n||y1>=n) return false;
    if(ch[x1][y1]==ch[x2][y2]||visit[x1][y1]==true) return false;
    return true;
}
void dfs(int x,int y){
    Node.x=x,Node.y=y;
    int sum=1;
    queue<node>q;
    queue<node>Q;
    q.push(Node);
    while(!q.empty()){
        node f=q.front();
        q.pop();
        Q.push(f);
        visit[f.x][f.y]=true;
        for(int i=0;i<4;i++){
            int newx=f.x+fx[i];
            int newy=f.y+fy[i];
            if(check(newx,newy,f.x,f.y)){
                sum++;
                Node.x=newx;
                Node.y=newy;
                visit[newx][newy]=true;
                q.push(Node);
            }
        }
    }
    while (!Q.empty()){
        node a=Q.front();
        Q.pop();
        d[a.x][a.y]=sum;
    }
}
int main(){
    cin>>n>>m;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>ch[i][j];
        }
        getchar();
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(visit[i][j]==false){
                dfs(i,j);
            }
        }
    }
    while (m--){
        int x,y;
        cin>>x>>y;
        cout<<d[x-1][y-1]<<endl;
    }
    return 0;
}

