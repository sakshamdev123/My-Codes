#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    if (n == 2 || n == 3)
        cout << "NO SOLUTION";
    else
    {
        int a = 2, b = 1;
        while (a <= n)
        {
            cout << a << ' ';
            a += 2;
        }
        while (b <= n)
        {
            cout << b << ' ';
            b += 2;
        }
    }
    return 0;
}