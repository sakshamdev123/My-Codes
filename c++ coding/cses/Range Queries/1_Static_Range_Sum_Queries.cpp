#include <bits/stdc++.h>
using namespace std;

#define ll long long

int main(int argc, char *argv[])
{
    ll n, x;
    cin >> n >> x;
    vector<ll> a(n), p(n);
    for (int j = 0; j < n; j++)
        cin >> a[j];
    p[0] = a[0];
    for (int j = 1; j < n; j++)
        p[j] = p[j - 1] + a[j];
    for (int i = 0; i < x; i++)
    {
        int c, d;
        cin >> c >> d;
        cout << p[d - 1] - p[c - 1] + a[c - 1] << '\n';
    }
    return 0;
}