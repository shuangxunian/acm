#include <bits/stdc++.h>
using namespace std;
// int main()
// {
//     int m,n,x,j=0;
//     int ans=0;
//     int t[10005];
//     int tm[105];
//     cin>>n>>m;
//     for(int i=0;i<n;i++){
//         cin>>x;
//         if(j!=m) tm[j++]=x;
//         else {
//             sort(tm,tm+j);
//             tm[0]+=x;
//         }
//     }
//     sort(tm,tm+j);
//     cout<<tm[j-1]<<endl;
// }
//int t[15];
//int main()
//{
//    char s[105];
//    
//    cin>>s;
//    int len=strlen(s);
//    for(int i=0;i<len;i++){
//        t[s[i]-'0']++;
//    }
//    for(int i=1;i<10;i++){
//        if(t[i]%i==0&&t[i]){
//            printf("%d ",i);
//        }
//    }
//    return 0;
//}
// struct st
// {
//     double w,q;
// }s[5005];
// bool cmp(st a,st b){
//     return a.w<b.w;
// }

// int main(){
//     int n,m;
//     int ans=0;
//     cin>>n>>m;
//     for(int i=0;i<m;i++) cin>>s[i].w>>s[i].q;
//     sort(s,s+m,cmp);
//     //for(int i=0;i<m;i++) cout<<s[i].w<<" "<<s[i].q<<endl;
//     for(int j=0;;j++){
//         if(s[j].q>n){
//             ans+=n*s[j].w;
//             break;
//         }
//         n-=s[j].q;
//         ans+=s[j].q*s[j].w;
//         //cout<<ans<<endl;
//         if(n==0) break;
//     }
//     cout<<ans<<endl;
// }
// struct st
// {
//     char s[25];
//     int mk,xh;
//     char rz[5];
//     int js;
//     int all;
// }s[1005];


// int main(){
//     int n;
//     int ans=0,ansi=0;
//     long long all=0;
//     cin>>n;
//     for(int i=0;i<n;i++){
//         cin>>s[i].s>>s[i].mk>>s[i].xh>>s[i].rz>>s[i].js;
//         s[i].all=0;
//         if(s[i].mk>80&&s[i].js!=0) s[i].all+=8000;
//         if(s[i].mk>85&&s[i].xh>80) s[i].all+=4000;
//         if(s[i].mk>90&&s[i].xh>70) s[i].all+=2000;
//         if(s[i].mk>85) s[i].all+=1000;
//         if(s[i].xh>85&&s[i].rz[0]=='Y') s[i].all+=850;
//         if(s[i].all>ans){
//             ans=s[i].all;
//             ansi=i;
//         }
//         all+=s[i].all;
//     }
//     cout<<s[ansi].s;
//     if(strcmp(s[ansi].s,"Hibiki")==0) cout<<" "<<"Hibiki"<<" "<<"txdy!";
//     cout<<endl;
//     cout<<s[ansi].all<<endl;
//     cout<<all<<endl;
// }



