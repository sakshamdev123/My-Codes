#include <iostream>
using namespace std;
#define ll long long

int main()
{
    ll n;
    cin >> n;
    for (ll i = 1; i <= n; i++)
    {
        ll a = i * i, b = a * (a - 1) / 2;
        if (i > 2)
            b -= 4 * (i - 1) * (i - 2);
        cout << b << endl;
    }
    return 0;
}