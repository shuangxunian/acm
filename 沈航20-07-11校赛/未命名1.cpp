#include<stdio.h>
#include<iostream>
#include<stdlib.h>
#include<string.h>
#include<algorithm>
using namespace std;
typedef long long ll;
ll ans[200005];
char n[25];
char res[25];
long long pow_10[19] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, \
1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, \
1000000000000000, 10000000000000000, 100000000000000000, 1000000000000000000};

long long up_bound[19] = {0, 0, 1000000000, 1000000, 31623, 3982, 1000, 373, 178, \
100, 64, 44, 32, 25, 20, 16, 14, 12, 10};

bool isBase(long long num, int m){
    while(num > 1){
        if((num - 1) % m != 0) return false;
        else num = (num - 1) / m;
    }
    return true;
}

long long fastPower(long long base, long long power) {
    long long result = 1;
    while (power > 0) {
        if (power & 1) {
            result = result * base;
        }
        power >>= 1;
        if(power > 0)base = base * base;
    }
    return result;
}

long long *pow_int(long long num, long long order, int len){
    long long top, rear, mid;
    long long *ans;
    ans = (long long*)malloc(sizeof(long long) * 2);
    ans[0] = ans[1] = 0;

    top = 1; rear = up_bound[order] > pow_10[(len - 1) / order + 1] ? \
    pow_10[(len - 1) / order + 1] : up_bound[order];

    while(rear - top > 1){
        if(fastPower(top, order) == num){ans[0] = top; ans[1] = 1; return(ans);}
        if(fastPower(rear, order) == num){ans[0] = rear; ans[1] = 1; return(ans);}

        mid = (top + rear) / 2;
        if(num >= fastPower(mid, order)){top = mid; continue;}
        if(num <= fastPower(mid, order)) rear = mid;
    }
    if(fastPower(top, order) == num){ans[0] = top; ans[1] = 1; return(ans);}
    if(fastPower(rear, order) == num){ans[0] = rear; ans[1] = 1; return(ans);}

    ans[0] = top;
    return(ans);
}


void smallestGoodBase(){
    unsigned long long num = 0;
    int len = strlen(n);

    long long i, j, base, *a;
    bool judge;

    for(i = 0; i < len; i ++) num += pow_10[len - 1 - i] * (n[i] - '0');
    base = num - 1;

    i = 2;
    do{
        a = pow_int(num, i, len);
        if(a[1] == 1){i ++; continue;}
        judge = isBase(num, a[0]);
        if(judge) base = a[0];
        i ++;
    }while(a[0] > 10);

    for(i = 9; i >= 2; i --){
        judge = isBase(num, i);
        if(judge) base = i;
    }

    char res_opp[19];

    i = 0;
    while(base != 0){
        res_opp[i] = (base % pow_10[i + 1]) / pow_10[i] + '0';
        base -= base % pow_10[i + 1]; i ++;
    }

    for(j = 0; j < i; j ++) res[j] = res_opp[i - 1 - j];
    res[i] = '\0';


}
int main()
{
	memset(n,0,sizeof(n));
	while(~scanf("%s",n)){
        memset(res,0,sizeof(res));
		smallestGoodBase();
		printf("%s\n",res);
		memset(n,0,sizeof(n));
	}
} 
