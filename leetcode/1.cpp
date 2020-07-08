#include<iostream>
using namespace std;
char ans[]={"0123456789abcdefghijklmnopqrstuv"};
int out[105];
int main()
{
    int x;
    int len=0;
    scanf("%d",&x);
    while(x){
        out[len++]=x%32;
        x/=32;
    }
    while(len){
        printf("%c",ans[out[len---1]]);
    }
}
