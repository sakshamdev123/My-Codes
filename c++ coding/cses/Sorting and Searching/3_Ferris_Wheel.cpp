#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    long long n, x, ans = 0;
    cin >> n >> x;
    vector<long long> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    sort(a.begin(), a.end());
    long long s = 0, t = n - 1;
    while (s <= t)
    {
        if (s == t)
            ans++, s++;
        else if (a[s] + a[t] <= x)
            ans++, s++, t--;
        else
            ans++, t--;
    }
    cout << ans;
    return 0;
}