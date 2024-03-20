#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, b = 0;
    cin >> n;
    int a[n - 1];
    for (int i = 0; i < n - 1; i++)
        cin >> a[i];
    sort(a, a + n - 1);
    for (int i = 0; i < n - 1; i++)
        if (a[i] - i - 1)
        {
            cout << a[i] - 1 << ' ';
            b = 1;
            break;
        }
    if (!b)
        cout << n;
    return 0;
}