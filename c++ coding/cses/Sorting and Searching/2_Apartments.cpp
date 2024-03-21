#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n, m, k, x = 0, y = 0, ans = 0;
    cin >> n >> m >> k;
    vector<int> a(n), b(m);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int i = 0; i < m; i++)
        cin >> b[i];
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    while (x < n && y < m)
    {
        if (a[x] + k < b[y])
            x++;
        else if (a[x] - k > b[y])
            y++;
        else
        {
            ans++;
            x++;
            y++;
        }
    }
    cout << ans;
    return 0;
}